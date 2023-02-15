import React from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player"
import SpotifyPlayer from 'react-spotify-player';
import { Upload, handleUpload } from './Upload'


export const Product=()=> { 
    const navigate = useNavigate()
    const params = useParams()
    console.log('url paraméter:',params)
    const selProduct=data.find(obj=>obj.id==params.id)
    console.log(selProduct)
  const size = {
    width: '640px',
    height: '500px'
  }

  return (
    
    <div className='loginregisterpanel'>
      <h1>Playlist</h1>
      <div id='zenelista'></div>
    <ReactPlayer
      url="https://soundcloud.com/digitalstreams/sets/deephousehits"
    /> <br />
    <ReactPlayer
    url="https://www.youtube-nocookie.com/watch?v=U3ASj1L6_sY"
    /> <br />
    <SpotifyPlayer
  uri="https://open.spotify.com/track/2KJkKZ6u3QRm9Xpu5I2CPB"
  size={size}
  view='coverart'
  theme='black'
/>
  </div>
  )
}
