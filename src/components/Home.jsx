import React from 'react'
import {motion} from 'framer-motion';

export const Home=()=> {
  return (
    <div className='text-center'>
      <motion.h1 initial={{y:-250}} animate={{y:60}}>
        Home page <br />
        <div className='howckep'>
        <img src='./img/howc.jfif' alt="loading..." />
        </div>
        <div className='kep2'>
        <img src="/img/kumala.gif" alt="kep2" />
        </div>
      </motion.h1>
    </div>
  )
}
