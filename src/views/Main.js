import React from 'react';
import AboutMe from '../components/Contents/AboutMe/AboutMe.js';
import SpecialtySkill from '../components/Contents/SpecialtySkill/SpecialtySkill.js';
import Education from '../components/Contents/Education/Education.js';
import WorkExperience from '../components/Contents/WorkExperience/WorkExperience.js';
import Article from '../components/Contents/Article/Article.js';
import Journal from '../components/Contents/Journal/Journal.js';
import Prize from '../components/Contents/Prize/Prize.js';
import Qualification from '../components/Contents/Qualification/Qualification.js';
import Slide from '../components/Contents/Slide/Slide';
import ReleasedApp from '../components/Contents/ReleasedApp/ReleasedApp.js';
import './Main.css';

class Main extends React.Component {
  render() {
    return (
      <div className='main'>
        <Slide />
        <div className='main-wrapper'>
         <AboutMe/>
         <SpecialtySkill />
         <Education />
         <WorkExperience />
         <Article />
         <Qualification />
         <Journal />
         <Prize />
         <ReleasedApp />
        </div>
      </div>
    );
  }
}

export default Main;
