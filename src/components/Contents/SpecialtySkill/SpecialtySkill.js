import React from 'react';
import './SpecialtySkill.css';


class SpecialtySkill extends React.Component {
	// constructor(props) {
 //    super(props);
 //  }
  render(){
  	const s_s_list=[
  		{
        "name":"Cyber-Physical System",
        "level":"90%",
        "label":1,

      },
      {
        "name":"Networked Control System",
        "level":"88%",
        "label":0,
      },
      {
        "name":"Machine Learning",
        "level":"86%",
        "label":1,
      },
      {
        "name":"Computer Science",
        "level":"86%",
        "label":0,
      },
      {
        "name":"Embedded System",
        "level":"80%",
        "label":1,
      },
      {
        "name":"Python",
        "level":"88%",
        "label":0,
      },
      {
        "name":"C, C++",
        "level":"82%",
        "label":1,
      },
      {
        "name":"React, Node.js",
        "level":"80%",
        "label":0,
      },
       {
        "name":"React Native",
        "level":"80%",
        "label":1,
      },
      {
        "name":"Kotlin, Java",
        "level":"70%",
        "label":0,
      },
      {
        "name":"MATLAB",
        "level":"70%",
        "label":1,
      },
      {
        "name":"AWS / GCP",
        "level":"68%",
        "label":0,
      },
      {
        "name":"Docker",
        "level":"76%",
        "label":1,
      },
      {
        "name":"Google Analytics, Firebase",
        "level":"76%",
        "label":0,
      },
      {
        "name":"Design / Architect",
        "level":"76%",
        "label":1,
      },
      {
        "name":"Communication",
        "level":"90%",
        "label":0,
      },
    ];

  	return(
  		<div className="s-s-container" id="Specialty&Skill">
  			<div className="tctfl main-title">
  			Specialty & Skill
  			</div>
  			<div className="s-s-main">
    			{s_s_list.map((s_s_item)=>{
    				if(s_s_item.label){
    					return(
    					<div className="s-s-wrap">
      						<div className="tctfl s-s-title">
      							{s_s_item.name}
      						</div>
      						<div className="s-s-level-wrap">
      							<div style={{width:s_s_item.level}} className="s-s-level"> </div>
      						</div>
      					</div>
    				);
    				}else{
    					return(
    					<div className="s-s-wrap s-s-wrap-r">
      						<div className="tctfl s-s-title">
      							{s_s_item.name}
      						</div>
      						<div className="s-s-level-wrap">
      							<div style={{width: s_s_item.level}} className="s-s-level"> </div>
      						</div>
      					</div>
    				);
    				}
    			})}
  			</div>
  		</div>
  	);
  }
}


export default SpecialtySkill;
