import React from 'react';
import { Link } from 'react-router-dom';

import NavButton from './NavButton/NavButton';
import profile from '../../assets/profile.jpg';
import portfolio from '../../assets/portfolio.jpg';
import contact from '../../assets/contact.jpg';
import './Nav.scss';


const nav = (props) => {
  return (
    <div className={props.isVisible ? ['nav', 'isVis'].join(' ') : ['nav', 'isNotVis'].join(' ')}>
      <Link to='/profile'>
        <NavButton 
          btType='profile'
          img={profile}
          icon={['far', 'user']}
          header='Profile'
          subHeader='Something about me and my skills'
          click={props.click}/> 
      </Link>
      <Link to='/portfolio'>
        <NavButton 
          btType='portfolio'
          img={portfolio}
          icon='briefcase' 
          header='Portfolio'
          subHeader='Check out some of my works'
          click={props.click}/>
      </Link>
      <Link to='/contact'>
        <NavButton 
          btType='contact'
          img={contact}
          icon={['far', 'envelope']} 
          header='Contact'
          subHeader='Hire me or just say hello'
          click={props.click}/>      
      </Link>
    </div>
  )
}

export default nav;