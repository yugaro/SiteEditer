import React from 'react';
import EducationTimeline from './EducationTimeline/EducationTimeline.js';
import './Education.css';

class Education extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
    const educationList = [
      {name: 'Osaka University', 
        year: 'Apr. 2021 - Mar. 2023 (expected)',
         place: 'Osaka, Japan',
         status: 'Master of Engineering (Major in Intelligent System Innovation)', 
         contents: [
            {text: "My research area focuses on machine learning for uncertain CPS to achieve low-cost, safe, and high-performance control."}, 
            {text: "I'm currently authoring a paper on learning-based event-triggered MPC via symbolic model with stability guarantees, which provides the novel framework for control of CPSs with statility and cost constraints."},
            {text: "Participated in collaborative research to path planning in a completely unknown environment."}
         ],
         specials: [
            {spec: 'Networked Control System'},
            {spec: 'Machine Learning'},
            {spec: 'Model Predictive Control'},
            {spec: 'Computer Science'},
            {spec: 'Network Science'},
            {spec: 'Embedded System'},
            {spec: 'Hybrid System'},
            {spec: 'Discrete-event System'},
            {spec: 'Financial Engineering'},
            {spec: 'Statistics'},
            {spec: 'Python'},
            {spec: 'C, C++'},
         ]
     },
      {name: 'Osaka University', 
       year: 'Apr. 2017 - Mar. 2021',
       place: 'Osaka, Japan',
       status: 'Bachelor of Engineering ( Major in Intelligent System )', 
       contents: [
          {text: 'My research area focused on the the analysis and design of cyber physical systems, such as networked control systems that exchange information via communication networks, as well as software development for computer control.'}, 
          {text: ' I authored a paper on event-triggered control for mitigating deterministic SIS spreading processes, which is the novel research area for computer control.'},
       ],
       specials: [
          {spec: 'Networked Control System'},
          {spec: 'Machine Learning'},
          {spec: 'Computer Science'},
          {spec: 'Network Science'},
          {spec: 'Hybrid System'},
          {spec: 'Epidemiology'},
          {spec: 'Statistics'},
          {spec: 'Python'},
          {spec: 'C, C++'},
       ]
     },
    ];
    return (
      <div className="education-container" id="Education">
        <div className="tctfl main-title">
          Education
        </div>
        {educationList.map((educationItem) => {
              return (
                <EducationTimeline
                  name={educationItem.name }
                  year={ educationItem.year }
                  place={ educationItem.place }
                  status={ educationItem.status }
                  contents={ educationItem.contents }
                  specials={ educationItem.specials }
                />
              );
            }) }
      </div>
    );
  }
}

export default Education;
