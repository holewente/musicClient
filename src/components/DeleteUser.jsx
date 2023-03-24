import React, { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { useQuery,useQueryClient,useMutation } from 'react-query'
import { getUsers,deleteUser } from './getData'
import ListGroup  from 'react-bootstrap/ListGroup';




export const DeleteUser = () => {
  const { data, status } = useQuery("users", getUsers);
  const [items, setItems] = useState([])
  const clientQuery=useQueryClient()
  const mutationDel=useMutation(deleteUser,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("users")
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
         <ListGroup.Item className='bg-dark' key={obj.id}>
          <span className='bg-dark'>
            <h4>{obj.username}</h4> <i className="fa-solid fa-trash text-danger fa-2x" onClick={()=>mutationDel.mutate(obj.id)} ></i>
          </span>

         </ListGroup.Item>
         
            )}
          </ListGroup>

        </div>
    </motion.div>
    
  );
}