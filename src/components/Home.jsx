import React from 'react'
import {motion} from 'framer-motion';

export const Home=()=> {
  return (
    <div className='text-center'>
      <motion.h1 initial={{y:-250}} animate={{y:60}}>
        Home page <br />
        <div className='howckep'>
        <img src={require('./howc.jfif')} alt="loading..." />
        </div>
      </motion.h1>
    </div>
  )
}
