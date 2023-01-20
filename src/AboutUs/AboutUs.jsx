import React from 'react';
import './AboutUs.css'
import numberIcon from '../assets/illustration-intro.svg'
const AboutUs = () => {
return (
    <div className="about-container">

<div className="about-main-text">
    <div className="about-header">
        <h2>Bring everyone together to build better products. </h2>


    </div>
    <div className="about-paragraph">
        <p>  Manage makes it simple for software teams to plan day-to-day 
  tasks while keeping the larger team goals in view.
</p>
    </div>
<div className="about-button">
    <button >  Get Started</button>
</div>
</div>
<div className="about-pix">
    <img src={numberIcon} />
</div>
    </div>
)
}

export default AboutUs