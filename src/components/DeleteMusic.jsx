import React, { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { useQuery,useQueryClient,useMutation } from 'react-query'
import { getMusic,deleteMusic } from './getData'
import ListGroup  from 'react-bootstrap/ListGroup';




export const DeleteMusic = () => {
  const { data, status } = useQuery("library", getMusic);
  const [items, setItems] = useState([])
  const clientQuery=useQueryClient()
  const mutationDel=useMutation(deleteMusic,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("library")
    }
  })
  status=="success" && console.log(data.data)
  console.log(items)
  
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      
        <div className='loginregisterpanel'>
          <ListGroup>
            {status=="success" && data.data.map(obj=>
         <ListGroup.Item className='bg-dark border border-success' key={obj.id}>
          <span className='bg-dark zenesor'>
            <h4 className='d-flex justify-content-between'><span>{obj.title} - {obj.url}</span> 
            <span><i className="fa-solid fa-trash text-danger" onClick={()=>mutationDel.mutate(obj.id)} ></i></span></h4> 
          </span>

         </ListGroup.Item>
         
            )}
          </ListGroup>

        </div>
    </motion.div>
    
  );
}