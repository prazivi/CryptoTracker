import React from "react";
import "./styles.css";
import iPhone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import Button from "../../Button";
import OutlinedButton from "../../OutlinedButton";
import { RWebShare } from "react-web-share";
import { APP_URL } from "../../../constants";

function LandingComponent() {
  return (
    <div className="flex-wrapper">
      <div className="heading-container">
        <motion.h1
          className="big-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
        >
          <span className="stroke">Track Crypto</span>
          <br />
          <span className="big-heading-g">Real Time.</span>
        </motion.h1>
        <p className="para">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <div className="button-div">
          <a href="/dashboard">
            <Button text={"Dashboard"} />
          </a>
          <a href="/">
            <Button text={"Share"} />
          </a>
        </div>
      </div>

      <div className="img-box">
        
      </div>
    </div>
  );
}

export default LandingComponent;
