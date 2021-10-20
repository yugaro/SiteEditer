import React from 'react';
import './JobTimeline.css';

class JobTimeline extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="main-timeline-container">
        <div className="main-timeline-line-container">
          <div className="main-timeline-round"></div>
          <div className="main-timeline-line"></div>
        </div>
        <div className="main-timeline-wrap">
          <div className="main-timeline-year-container">
            <div className="main-timeline-year">
              {this.props.year}
            </div>
            <div className="tctfl main-timeline-place">
              {this.props.place}
            </div>
          </div>
          <div className="tctfl ttf">
            {this.props.name}
          </div>
          <div className="tctfl tts">
            {this.props.status}
          </div>
          
          <ul className="timeline-content-container">
            { this.props.contents.map((content) => {
              return (
                <li><div className="tctfl timeline-content">
                    {content.text}
                </div></li>
              );
            }) }
          </ul>

          <div className="timeline-special-container">
              { this.props.specials.map((special) => {
              return (
                <div className="timeline-special">
                    {special.spec}
                </div>
              );
            }) }
          </div> 
          
      </div>
    </div>
    );
  }
}

export default JobTimeline;

