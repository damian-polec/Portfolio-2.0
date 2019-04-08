import React from 'react';

import { NavLink } from 'react-router-dom';
import NavToggle from './NavToggle/NavToggle';
import MobileNav from './MobileNav/MobileNav';
import './NavTop.scss';
const navTop = (props) => {
  return (
    <div className={props.isVisible ? ['nav-top', 'hide'].join(' ') : ['nav-top', 'show'].join(' ')}>
      <MobileNav 
        isToggle={props.isToggle}
        onToggle={props.toggle}
        showMainNavAction={props.showMainNavAction}
        isVisible={props.isVisible}/>
      <NavLink
        className='nav-top-link' 
        exact to='/' 
        activeClassName='active'
        onClick={props.showMainNavAction}>Home</NavLink>
      <NavLink 
        className='nav-top-link' 
        exact to='/profile'>Profile</NavLink>
      <NavToggle onToggle={props.toggle}/>
      <NavLink 
        className='nav-top-link'
        exact to='/portfolio'>Portfolio</NavLink>
      <NavLink
        className='nav-top-link' 
        exact to='/contact'>Contact</NavLink>
    </div>
  )
}

export default navTop;