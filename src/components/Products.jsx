import React,{useState} from 'react'
import {data} from '../data.js'
import { useNavigate } from 'react-router-dom'
import { Upload, handleUpload } from './Upload'

export const Products=()=> {
    const [items,setItems]=useState(data)
    const navigate=useNavigate()

  return (
    <div className='loginregisterpanel'>
        <h1>Libraries</h1>
        <ul className='list-group'>
            {items.map(obj=>
            <li className='list-group-item btn btn-primary'
             key={obj.id}
             onClick={()=>navigate('/products/'+obj.id)}
             >
            {obj.name}</li>
            )}
        </ul>
        
    </div>
  )
}