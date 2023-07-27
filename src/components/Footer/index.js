import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./styles.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div id="footer" className="footer-wrapper">
      <div className="socials">
        <a href="https://www.instagram.com/_prazivi_">
          <InstagramIcon className="socialIcons" />
        </a>
        <a href="https://www.linkedin.com/in/pranav-gupta-b02956178">
          <LinkedInIcon className="socialIcons" />
        </a>
        <a href="https://github.com/prazivi">
          <GitHubIcon className="socialIcons" />
        </a>
        <a href="mailto:kpranav.in@gmail.com">
          <EmailIcon className="socialIcons" />
        </a>
      </div>
      
      <p className="heading">-Pranav Gupta</p>
    </div>
  );
}

export default Footer;

