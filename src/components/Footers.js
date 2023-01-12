import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Footers() {
  return (
    <footer>
      <div className="top">
        <div className="copyright">
          <p>&copy; 2023 Zenach Fashion</p>
          <h6>
            📨 Address:&nbsp; 2031 Georgia Ave,
            <br /> &nbsp; &nbsp; &nbsp; Silver Spring, MD, 20902
          </h6>
        </div>

        <div className="icons">
          <SocialIcon url="http://www.facebook.com/zenach-fashion7"/>
          <SocialIcon url="http://www.github.com/bettyshawla"/>
          <SocialIcon url="http://www.google.com"/>
          <SocialIcon url="http://www.twitter.com"/>
          <SocialIcon url="http://www.instagram.com"/>
        </div>
      </div>
    </footer>
  );
}


