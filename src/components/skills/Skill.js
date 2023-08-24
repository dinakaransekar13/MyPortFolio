import React from "react";
import "./Skill.css";
import { Element } from "react-scroll";
import SkillImage from './../../assest/a.jpeg'
import LinearProgress from '@mui/material/LinearProgress';


const Skill = () => {
  return(
    <Element className="skillContainer" id="skills">

      <div className="skillContainer_image">
        <img src={SkillImage} alt="" />
      </div>

      <div className="skillContainer_text">
        <h2>SKILLSSET</h2>

        <div className="skillContainer_skillSet">
          <h5>React</h5>
          <div className="skillContainer_slider skillContainer_slider1">
            <LinearProgress variant="determinate" value={60}/>
          </div>
        </div>

        <div className="skillContainer_skillSet">
          <h5>HTML & CSS</h5>
          <div className="skillContainer_slider skillContainer_slider2">
            <LinearProgress variant="determinate" value={70}/>
          </div>
        </div>

        <div className="skillContainer_skillSet">
          <h5>JavaScript & Jquery</h5>
          <div className="skillContainer_slider skillContainer_slider3">
            <LinearProgress variant="determinate" value={70}/>
          </div>
        </div>

        <div className="skillContainer_skillSet">
          <h5>Bootstrap & Material UI</h5>
          <div className="skillContainer_slider skillContainer_slider3">
            <LinearProgress variant="determinate" value={70}/>
          </div>
        </div>

        <div className="skillContainer_skillSet">
          <h5>Python & Django</h5>
          <div className="skillContainer_slider skillContainer_slider4">
            <LinearProgress variant="determinate" value={40}/>
          </div>
        </div>

        <div className="skillContainer_skillSet">
          <h5>Photoshop & SEO</h5>
          <div className="skillContainer_slider skillContainer_slider5">
            <LinearProgress variant="determinate" value={70}/>
          </div>
        </div>

        <div className="skillContainer_skillSet">
          <h5>Git & Github</h5>
          <div className="skillContainer_slider skillContainer_slider6">
            <LinearProgress variant="determinate" value={50}/>
          </div>
        </div>

      </div>

    </Element>
  )
};

export default Skill;
