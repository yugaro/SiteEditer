import React from 'react';

import LockNote from '../components/Contents/LockNote/LockNote';
import PrivacyPolicy from '../components/Contents/PrivacyPolicy/PrivacyPolicy';
import LockNoteContents from '../components/Contents/LockNote/LockNoteContents';
import ToHome from '../components/Contents/ToHome/ToHome';
import './Release.css';

class Release extends React.Component {
  render(){
    return(
      <div className='main'>
        <LockNote />
        <div className='main-wrapper'>
          <LockNoteContents />
          <PrivacyPolicy />
          <ToHome />
        </div>
      </div>
    );
  };
}

export default Release;
