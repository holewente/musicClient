import React from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player"
import SpotifyPlayer from 'react-spotify-player';
import { Upload } from './Upload'
import { useQuery } from 'react-query'
import { getUrl } from './getData'


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
  return (
    
    <div className='loginregisterpanel'>
      <h1>Playlist</h1>

              <span className='holder'>
                <input type="text" className='text-dark' placeholder='Search in Library' />
                  <i className="fa-solid fa-magnifying-glass" ></i>
                
              </span> <br />

      <div id='zenelista'>
         {status=='success' && data.data.map(obj=>
          <ReactPlayer url={obj.url}/> 
          )}
      </div>
    
    {/*<SpotifyPlayer
  uri="https://open.spotify.com/track/2KJkKZ6u3QRm9Xpu5I2CPB"
  size={size}
  view='coverart'
  theme='black'
         />*/}
  </div>
  )
}
