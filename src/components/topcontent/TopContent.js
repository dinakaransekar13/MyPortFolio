import React from "react";
import { Link } from "react-scroll";
import "./TopContent.css";
const TopContent = () => {
  return (
    <div className="topcontent">
      <div className='topcontent_container'>
        <h1>DINAKARAN S</h1>
        <p>
          Am a WebDeveloper with 2.3 Years of Experience in Development and CMS
          Tools
        </p>
        <a href="./../../assest/DINAKARAN Resume.pdf">
          <button className="a">Download CV</button>
        </a>
        <Link to="project" smooth={true} duration={500}>
          <button className="b">My work</button>
        </Link>
      </div>
    </div>
  );
};

export default TopContent;
