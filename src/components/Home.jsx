import React from 'react'
import { motion } from 'framer-motion';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


export const Home=()=> {
  return (
    <div className='text-center mt-5'>
      <motion.h1 initial={{y:-250}} animate={{y:60}} >
       Spoticloud Home Page <br />

      <div className="row">
<div id="fb-root"></div>
        <div class="fb-page" data-href="https://www.facebook.com/SoundCloud"
        data-tabs="timeline" data-width="" data-height="" data-small-header="false" 
        data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/SoundCloud" className="fb-xfbml-parse-ignore">
          <a href="https://www.facebook.com/SoundCloud">SoundCloud</a></blockquote></div>

        <TwitterTimelineEmbed
        sourceType="profile"
        screenName="spotify"
        options={{height: 600}}
        />
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
