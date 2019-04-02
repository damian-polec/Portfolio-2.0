import React from 'react';

import profilePic from '../../../../assets/ProfilePic.jpg';

import './AboutMe.scss';

const aboutMe = (props) => {
  return (
    <div className='about-me'>
      <h2>About Me</h2>
      <div className='wrapper'>
        <img src={profilePic} alt='profileImage' />
        <div className='info'>
          <p>Hi I'm Damian. I'm technology enthusiast with a passion for continuous learning and improvement. I'm focusing on mastering JS and feel the most comfortable with React.js, but I have some experience using other technologies as well. </p>
          <p>Apart from being a web developer, I enjoy most of my time being outdoors.</p>
        </div>
      </div>
    </div>
  )
}


export default aboutMe;