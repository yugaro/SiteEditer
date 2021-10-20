import React from 'react';
import './AboutMe.css'
import yuga01 from '../image/yuga01.png';


class AboutMe extends React.Component {
  render(){
  	return(
  		<div className='about-me-container' id="AboutMe">
	        <img src={yuga01} class='about-me-icon' alt='MyFace'/>
	        <div className='about-me-main'>
	          <div className='tctfl main-title'>
	          About Me
	          </div>
	          <div className='tctfl about-me-contents'>
	           I'm a master at Osaka University majoring in intelligent system innovation, synthesized by mathematics, hardware, software engineering.
	           My particular concerns are Cyber-Physical Systems (CPSs), where physical and software components are densely intertwined with each other, and in the future, I would like to develop software and services that can enhance intelligence and ensure safety of a city-scale CPS.
	           I am currently studying manipulation of the CPS with high performance, safety, and low cost by utilizing my knowledge of machine learning, control theory, and software verification.
	           The unique knowledge and interdisciplinary experienced skill sets as an engineer allow me to merge multidisciplinary resources, from the theoretical developments to the applications.
	           I hope to develop further my skills, manage a team, and provide directions that align with the company's overall goals.
	           </div>
	        </div>
	    </div>
  	);
  }
}
export default AboutMe;
