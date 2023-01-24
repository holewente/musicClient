import React from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player"
import SpotifyPlayer from 'react-spotify-player';


export const Product=()=> { 
    const navigate = useNavigate()
    const params = useParams()
    console.log('url paraméter:',params)
    const selProduct=data.find(obj=>obj.id==params.id)
    console.log(selProduct)
  return (
    
    <div>
      <h1>.</h1><br />
      <h1>Hanglejátszó sáv</h1>
    <ReactPlayer
      url="https://soundcloud.com/lilyeat/not-sorry-prod-trgc-x-sharkboy"
    /> <br />
    <ReactPlayer
    url="https://www.youtube-nocookie.com/watch?v=U3ASj1L6_sY"
    /> <br />
    <SpotifyPlayer
  uri="https://open.spotify.com/track/2KJkKZ6u3QRm9Xpu5I2CPB"
  size="large"
  view='list'
  theme='black'
/>
  </div>
  )
}
