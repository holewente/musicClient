import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      
      <div className="aboutkeret loginregisterpanel">
        <h1 className="text-center mt-2">About Us</h1>
        <div className="text-center">
          Spoticloud is a Professional Music Streaming Platform. <br />
          Here we will provide you only interesting content, which you will like
          very much. <br />
          We're dedicated to providing you the best of Music Streaming, with a
          focus on dependability and Revolutionary. <br />
          We're working to turn our passion for Music Streaming into a booming
          online website. <br />
          <b>
            We hope you enjoy our Music Streaming as much as we enjoy offering
            them to you.
          </b>{" "} <br />
          <h2 className="mt-2">How to use:</h2>
          <div className="text-center">
            1. Copy a link from the selected supported sites from below. <br />
            2. Go to the Upload section and paste your link in the url field. <br />
            3. Pick a music genre, and name your desired song which you want to upload, it can be anything. <br />
            4. Press the Upload button to add the song to your personal Library. <br />

          </div>
          <h2 className="mt-2">Supported sites:</h2>
          <div>
          <img className="icons" src="/img/yt.png" alt="yt" />{" "}
          <img className="icons" src="/img/sound.jpg" alt="sound" />
          <br /><br />
          <img className="icons" src="/img/spoti.png" alt="spoty" />
          <p><b>Only preview</b></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
