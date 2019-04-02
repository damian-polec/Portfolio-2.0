import React from 'react';

import { NavLink } from 'react-router-dom';

import './NavTop.scss';
const navTop = (props) => {
  return (
    <div className={props.isVisible ? ['nav-top', 'hide'].join(' ') : ['nav-top', 'show'].join(' ')}>
      <NavLink exact to='/' 
        activeClassName='active'
        onClick={props.showMainNavAction}>Home</NavLink>
      <NavLink exact to='/profile'>Profile</NavLink>
      <NavLink exact to='/portfolio'>Portfolio</NavLink>
      <NavLink exact to='/contact'>Contact</NavLink>
    </div>
  )
}

export default navTop;