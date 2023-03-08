import React from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player"
import SpotifyPlayer from 'react-spotify-player';
import { useQuery } from 'react-query'
import { getUrl } from './getData'
import usePictureInPicture from 'react-use-pip'
import { useRef } from 'react';



export const Product=()=> {
   
  const { data, status } = useQuery("url", getUrl);
    const navigate = useNavigate()
    const params = useParams()
    status=='success' && console.log(data.data)
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
  function kereses(props) {
  return ;
}



  return (
    
    <div className='loginregisterpanel'>
      <h1>Playlist</h1>

              <span className='holder'>
                <input type="text" className='text-dark' placeholder='Search in Library' />
                  <i className="fa-solid fa-magnifying-glass" onClick="kereses" ></i>
                
              </span>
      
      
      <div id='zenelista'>
        
         {status=='success' && data.data.map(obj=>
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
    
  </div>
  )
}
