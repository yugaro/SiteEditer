import React from 'react';
import './Qualification.css';

class Qualification extends React.Component {
  render(){
  	return(
  		<div className="qualification-container">
  			<div className="tctfl main-title">
  				Qualification
  			</div>
        <ul className="timeline-content-container">
          <li>
            <div className="tctfl qualification-content">
            TOEIC (ETS), Feb. 2021, SCORE: 925
            </div>
          </li>
          <li>
            <div className="tctfl qualification-content">
            OPEN WATER DIVER (PADI), Feb. 2019
            </div>
          </li>
        </ul>
  		</div>
  	);
  }
}

export default Qualification;
