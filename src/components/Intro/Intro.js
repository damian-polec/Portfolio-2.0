import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Cover from '../Cover/Cover';
import './Intro.scss';

const intro = props => {
  return (
    <div className='intro'>
      <Cover />
      <div className='intro-text'>
        <h1>Hello</h1>
        <h1>I'm <span>Damian</span> Polec</h1>
        <h2>Front End Developer</h2>
      </div>
      <div className='social-buttons'>
        <a href='https://www.facebook.com/damien.polec' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href="https://github.com/damian-polec" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'github']} /></a>
        <a href="https://www.linkedin.com/in/damian-po%C5%82e%C4%87-46167912b/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a>
      </div>
    </div>
  )
}

export default intro;