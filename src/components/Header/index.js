import Drawer from "./Drawer";
import React, { useState } from "react";
import Button from "../Button";
import "./styles.css";

function Header() {
  return (
    <div className="navbar">
      <a href="/">
        <h1 className="heading">
          CryptoTracker
        </h1>
      </a>
      <div className="links-flex">
       
        <a href="/">
          <p className="links">Home</p>
        </a>
        <a href="/compare">
          <p className="links">Compare</p>
        </a>
        <a href="/dashboard">
          <p className="links">
            <Button text="Dashboard" />
          </p>
        </a>
      </div>
      <div className="menu-div">
        <Drawer />
      </div>
    </div>
  );
}

export default Header;
