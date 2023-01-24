import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 1.5 }}
    >
      
      <div className="contactkeret loginregisterpanel">
        <h1 className="text-center">Developers:</h1>
        <p className="text-center">
          <a href="https://github.com/holewente">
            <b>Horváth Levente</b>
          </a>
          <br />
          <br />
          <a href="https://github.com/milanszabo2001">
            <b>Szabó Milán</b>
          </a>
        </p>
        <br />

        <h2 className="text-center">
          Copyright Disclaimer Under Section 107 of the Copyright Act 1976
        </h2>
        <p className="text-center">
          Copyright Disclaimer Under Section 107 of the Copyright Act 1976,
          allowance is made for "fair use" for purposes such as criticism,
          comment, news reporting, teaching, scholarship, and research.
        </p>
        <p className="text-center">
          Fair use is a use permitted by copyright statute that might otherwise
          be infringing.
        </p>
        <p className="text-center">
          Non-profit, educational or personal use tips the balance in favor of
          fair use.
        </p>
      </div>
    </motion.div>
  );
};
