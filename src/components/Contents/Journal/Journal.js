import React from 'react';
import './Journal.css';

class Journal extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render(){
  	return(
  		<div className="journal-container">
  			<div className="tctfl main-title">
  				Journal
  			</div>
        <ul className="timeline-content-container">
          <li>
            <div className="tctfl qualification-content">
            Yuga Onoue, Kazumune Hashimoto, Masaki Ogura, and Toshimitsu Ushio. Event-Triggered Control for Mitigating SIS Spreading Processes. Annual Reviews in Control, 2021, to appear.
            <a href="https://arxiv.org/abs/2012.15146" className="btn"> <div className="tctfl jounal-arXiv">[arXiv]</div></a>
            </div>
          </li>
        </ul>
  		</div>
  	);
  }
}

export default Journal;