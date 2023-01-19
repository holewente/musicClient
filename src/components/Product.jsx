import React from 'react'
import {data} from '../data.js'
import { useParams,useNavigate } from 'react-router-dom'
//import {MyImg} from './MyImg'
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card';
import ReactPlayer from "react-player"


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
    url="https://music.youtube.com/watch?v=hLQl3WQQoQ0&list=RDCLAK5uy_nHSqCJjDrW9HBhCNdF6tWPdnOMngOv0wA"
    /> <br />
    
  </div>
  )
}
