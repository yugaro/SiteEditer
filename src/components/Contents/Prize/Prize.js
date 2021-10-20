import React from 'react';
import './Prize.css';

class Prize extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
  	return(
  		<div className="prize-container">
  			<div className="tctfl main-title">
  				Prize
  			</div>
        <ul className="timeline-content-container">
          <li>
            <div className="tctfl qualification-content">
            Yuga Onoue, (2021). Control of Epidemic Processes by Combinations of Network Science and Feedback Control Theory ~Event-Triggered Control Approach~. Sience Incare 2021. Ministry of Education, Culture, Sports, Science and Technology, Finalist.
            </div>
          </li>
        </ul>
  		</div>
  	);
  }
}

export default Prize;