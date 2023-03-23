import React, { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { useQuery } from 'react-query'
import { getUsers,deleteUser } from './getData'


export const DeleteUser = () => {
  const { data, status } = useQuery("users", getUsers);
  const [items, setItems] = useState([])
  status=="success" && console.log(data.data)
  console.log(items)
  
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      
        <div className='loginregisterpanel'>
          <ul>
            {status=="success" && data.data.map(obj=>
         <li>
          <span key={obj.id}>
            <h4>{obj.username}</h4> <i className="fa-solid fa-trash text-danger fa-2x" ></i>
          </span>

         </li>
         
            )}
          </ul>

        </div>
    </motion.div>
    
  );
}