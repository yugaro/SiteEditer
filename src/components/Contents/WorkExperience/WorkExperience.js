import React from 'react';
import JobTimeline from './JobTimeline/JobTimeline.js';
import './WorkExperience.css';

class WorkExperience extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
  	const jobList=[
      {
        name: 'HACARUS, Inc ',
        year: 'Nov. 2020 - Current',
        place: 'Kyoto, Japan',
        status: 'Data Scientist, Intern',
        contents:[
          {text: 'Sparse modeling technology that can extract features with a small amount of training data or without any training data is developed.'},
          {text: 'Most common deep learning processes, in which the decision-making mechanism of artificial intelligence is a black box, ours is visualized in a form that can be interpreted by humans.'},
        ],
        specials:[
          {spec: 'Python'},
          {spec: 'AWS'},
          {spec: 'Docker'},
        ],  
      },
      {
        name: 'Liberty Fish co., LTD',
        year: 'Jan. 2020 - Apr. 2020',
        place: 'Osaka, Japan',
        status: 'System Engineer, Intern',
        contents:[
          {text: 'Developed a base application for linking other products in the instrumentation systems, which are measuring instruments used for indicating, measuring, and recording physical quantities.'},
          {text: 'Evaluated the performance of air conditioners intending to improve their qualities, such as creating test cases based on the specifications, confirming that the specifications are satisfied, and finding defects.'},
        ],
        specials:[
          {spec: 'C++'},
          {spec: 'Python'},
        ],  
      },
      {
        name: 'Star Form, Inc',
        year: 'Mar. 2019 - Jan. 2020',
        place: 'Osaka, Japan',
        status: 'Web App Engineer, Intern',
        contents:[
          {text: 'Designed and developed Web application SPOGIFT, which is a service that allows customers easily to create their own sports team original memorabilia.'},
          {text: 'Devised a plan for what products to handle and how to market them, including designing of the entire UI flow by myself.'},
        ],
        specials:[
          {spec: 'HTML & CSS'},
          {spec: 'jQuery'},
          {spec: 'React'},
          {spec: 'Node.js'},
        ],  
      },
      {
        name: 'Daintree Manor',
        year: 'Feb. 2019 - Mar. 2019',
        place: 'Forest Creek, Australia',
        status: 'Bell Person, Workawayer',
        contents:[
          {text: 'Worked for about two months as a bellperson taking advantage of "workaway", which is an international program that allows travelers to pay for their room and food by helping their host with household work needs, projects, or odd jobs.'},
          {text: 'Mainly, guided guests to their rooms, showing them the facilities, and also worked as a cook when there was a shortage of the staff.'},
        ],
        specials:[
          {spec: 'Communication'},
          {spec: 'English'},
        ],    
      },
  		{
  			name: 'MSK Anshin Station, Mitsui Sumitomo Insurance Company, Inc',
  			year: 'Dec. 2017 - Sep. 2020',
  			place: 'Osaka, Japan',
  			status: 'Customer Service Operator',
  			contents:[
  				{text: 'Took accident reports from the insurance policyholders over the phone and provided initial responses, e.g., contacting the other party, arranging towing services and rented cars, and request for withholding the treatment costs.'},
  				{text: 'Understood requests from the confused customers accurately and advised them in precise terms, considering their feelings.'},
          {text: 'Among the departments of accident report center, I had the best record of the number of accidents handled per day.'},
  			],
  			specials:[
  				{spec: 'Communication'},
  				{spec: 'Flexibility'},
  			],	
  		},
  	];
    return (
    	<div className="workexperience-container" id="WorkExperience">
    		<div className="tctfl main-title">
  				Work Experience
  			</div>
  			{ jobList.map((jobItem) => {
              return (
                <JobTimeline
                  name={ jobItem.name }
                  year={ jobItem.year }
                  place={ jobItem.place }
                  status={ jobItem.status }
                  contents={ jobItem.contents }
                  specials={ jobItem.specials }
                />
              );
            }) }
  		</div>
    );
  }
}

export default WorkExperience;
