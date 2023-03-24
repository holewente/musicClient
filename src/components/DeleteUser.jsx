import React, { useState,useEffect } from 'react';
import { motion } from "framer-motion";
import { useQuery,useQueryClient,useMutation } from 'react-query'
import { getUsers,deleteUser } from './getData'



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
          <ul>
            {status=="success" && data.data.map(obj=>
         <li key={obj.id}>
          <span >
            <h4>{obj.username}</h4> <i className="fa-solid fa-trash text-danger fa-2x" onClick={()=>mutationDel.mutate(obj.id)} ></i>
          </span>

         </li>
         
            )}
          </ul>

        </div>
    </motion.div>
    
  );
}