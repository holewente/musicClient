import React, { useState,useEffect } from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import SpotifyPlayer from 'react-spotify-player';
import { useQuery,useQueryClient,useMutation } from 'react-query'
import { getUrl } from './getData'
import { useRef } from 'react';
import {MySpinner} from './MySpinner'
import ReactPlayer from 'react-player/lazy';
import { addFavorite,getFavorites,deleteFavorite } from './getData';



export const Favorite=({user_id})=> {
   
  const { data, status, isLoading } = useQuery(["favorites",user_id], getFavorites);
  const [items, setItems] = useState([])
  const clientQuery=useQueryClient()
  const mutationDel=useMutation(deleteFavorite,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("favorites")
    }
  })
    

    status=='success' && console.log(data.data)

  const size = {
    width: '640px',
    height: '500px'
    
  }
  const delFav=(url)=>{
    console.log(user_id,url)
    deleteFavorite({user_id,link_url:url})
    alert("Song has been successfully deleted from your Favorites.")
  }
  
  return (
    
    <div className='loginregisterpanel'>
      <h1>Favorites</h1>
      
      {isLoading && <MySpinner/>}
      <div id='zenelista'>
        
         {status=='success' && data.data.map(obj=>
         <span key={obj.id}>
          <h4 className='cimsor mt-5 d-flex justify-content-between'>{obj.title} <i class="fa-regular fa-square-minus" onClick={()=>mutationDel.mutate(obj.id)}></i></h4>
        
          {obj.link_url.includes('spotify') ? 
          <SpotifyPlayer uri={obj.link_url}
            size={size}
            view='coverart'
            theme='black'/>
            :
            <ReactPlayer url={obj.link_url}
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
