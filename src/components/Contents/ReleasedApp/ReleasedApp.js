import React from 'react';
import './ReleasedApp.css';
import LockNoteIcon from '../image/LockNoteIcon.png'
import { Link } from 'react-router-dom';

class ReleasedApp extends React.Component {
  render(){
  	return(
      <div className='tctfl main-title'>
        Released App
        <div className='about-me-container' id="AboutMe">
          <Link to="./locknote">
            <img src={LockNoteIcon} class='about-me-icon' alt='MyFace'/>
          </Link>
          <div className='about-me-main'>
            <div className='tctfl sub-title2'>
             <Link to="./locknote">
              Lock Note
            </Link>
            </div>
            <div className='tctfl about-me-contents'>
              It is a mobile application that allows you to create, save, and edit your own notes. It connects your email address with the note information and stores the data in the cloud. The saved note data can be retrieved at any time. For inquiries, please get in touch with me at my email address.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReleasedApp;
