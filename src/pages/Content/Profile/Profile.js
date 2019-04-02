import React from 'react';

import AboutMe from './AboutMe/AboutMe';
import Courses from './Courses/Courses';
import Skills from './Skills/Skills';
import Footer from '../../../components/Footer/Footer';
import './Profile.scss';


const profile = (props) => {
  return (
    <div className='profile'>
      <AboutMe />
      <Courses />
      <Skills />
      <Footer />
    </div>
  )
}

export default profile;