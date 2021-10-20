import React from 'react';
import yuga01 from '../image/yuga01.png';
import { Link } from 'react-router-dom';
import './ToHome.css';

class ToHome extends React.Component {
  render(){
    return(
      <div className='about-me-container2' id="AboutMe">
	      <img src={yuga01} class='about-me-icon2' alt='MyFace'/>
        <div className="tctfl qualification-content">
          Yuga Onoue, Osaka University
        </div>
        <div className='tctfl qualification-content'>
          Click <Link to="/" className='jounal-arXiv'>here</Link> to my site.
        </div>
	    </div>
    );
  };
}

export default ToHome;
