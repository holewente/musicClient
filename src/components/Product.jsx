import React, { useState,useEffect } from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import SpotifyPlayer from 'react-spotify-player';
import { useQuery } from 'react-query'
import { getUrl } from './getData'
import { useRef } from 'react';
import {MySpinner} from './MySpinner'
import ReactPlayer from 'react-player/lazy';



export const Product=()=> {
   
  const { data, status, isLoading } = useQuery("url", getUrl);
    const navigate = useNavigate()
    const [searchedText, setSearchedText] = useState("")
    const params = useParams()
    const [items, setItems] = useState([])
    

    status=='success' && console.log(data.data)
    useEffect(()=>{
      status=='success' && setItems(data.data)
    },[status,searchedText])
    //const selProduct=data.find(obj=>obj.id==params.id)
    //console.log(selProduct)
  const size = {
    width: '640px',
    height: '500px'
    
  }
  const handleClick=async (event,id,url)=>{
  event.target.disabled = true;
  try {
      await document.getElementById(id).requestPictureInPicture();
    } catch (error) {
      // TODO: Show error message to user.
    } finally {
      event.target.disabled = false;
    }
  }
  function kereses() {
  /*console.log(document.getElementById("cimszo").value)
  let selectedTitle=document.getElementById("cimszo").value*/
  let newItems= items.filter(obj=>obj.title.toLowerCase().includes(searchedText.toLowerCase()))
  setItems(newItems)
}
/*const filterNotes = cimszo.filter((noteText) => noteText.title.toLowerCase().includes(searchText.toLowerCase())); */

console.log(isLoading,"isLoading")
  return (
    
    <div className='loginregisterpanel'>
      <h1>Playlist</h1>

              <span className='holder'>
                <input id='cimszo' type="text" value={searchedText} className='text-dark' placeholder='Search in Library'
                onChange={(event)=>setSearchedText(event.target.value)} />
                  <i className="fa-solid fa-magnifying-glass" onClick={()=>kereses()} ></i>
                
              </span>
      
      {isLoading && <MySpinner/>}
      <div id='zenelista'>
        
         {status=='success' && items.map(obj=>
         <span key={obj.id}>
          <h4 className='mt-5'>{obj.title}</h4>
        
          {obj.url.includes('spotify') ? 
          <SpotifyPlayer uri={obj.url}
            size={size}
            view='coverart'
            theme='black'/>
            :
            <ReactPlayer url={obj.url}
            controls='true'
            pip='true'
            id={obj}/>
        }
         
         </span>
          
          )}
      </div>
      {items.length==0 && <div>No title found...</div>}
    
  </div>
  )
}
