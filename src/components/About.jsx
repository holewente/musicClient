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
        <h1 className="text-center">About page</h1>
        <p className="text-center">
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
          </b>{" "}
        </p>
      </div>
    </motion.div>
  );
};
