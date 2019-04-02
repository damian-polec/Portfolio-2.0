import React from 'react';


import Socials from '../Socials/Socials';
import Cover from '../Cover/Cover';
import './Intro.scss';

const intro = props => {
  return (
    <div className={props.isVisible ? ['intro', 'isVisIntro'].join(' ') : ['intro', 'isNotVisIntro'].join(' ')}>
      <Cover />
      <div className='intro-text'>
        <h1>Hello</h1>
        <h1>I'm <span>Damian</span> Polec</h1>
        <h2>Front End Developer</h2>
      </div>
      <Socials view={'header'} />
    </div>
  )
}

export default intro;