import React from 'react'
import { motion } from 'framer-motion';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


export const Home=()=> {
  return (

    <div className='text-center mt-5 w-100'>
      <motion.h1 initial={{y:-250}} animate={{y:60}} >
       Spoticloud Home Page <br />

      <div className='mt-5 row'>
        <div className="col-md-4">
          <TwitterTimelineEmbed
        sourceType="profile"
        screenName="spotify"
        options={{height: 500}}
        />
        </div>
        <div className='col-md-4'>
          <TwitterTimelineEmbed
        sourceType="profile"
        screenName="soundcloud"
        options={{height: 500}}
        />
        </div>
        <div className='col-md-4'>
          <TwitterTimelineEmbed
        sourceType="profile"
        screenName="instagram"
        options={{height: 500}}
        />
        </div>
        
      </div>      
       

        <div className='howckep mt-5'>
        <img src='./img/howc.jfif' alt="loading..." />
        </div>
        <div className='kep2'>
        <img src="/img/kumala.gif" alt="kep2" />
        </div>
      </motion.h1>
      
    </div>

  )
}
