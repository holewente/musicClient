import React from 'react'
import {motion} from 'framer-motion'

export const Contacts=()=> {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.3,duration:1.5}}>
      <br />
      <br />
     <h1>About page</h1>
     <p>lorem ipsum dolor</p>
     
    </motion.div>
    )
}