import React from 'react';
import { NavLink } from 'react-router-dom';

import './MobileNav.scss';
const mobileNav = props => (
  <div className={props.isToggle && !props.isVisible ? ['mobile-nav', 'mobile-nav-show'].join(' ') : ['mobile-nav', 'mobile-nav-hide'].join(' ')}>
      <NavLink
        className='mobile-nav-link' 
        exact to='/' 
        activeClassName='active'
        onClick={props.showMainNavAction}>Home</NavLink>
      <NavLink
        className='mobile-nav-link'
        onClick={props.onToggle} 
        exact to='/profile'>Profile</NavLink>
      <NavLink
        className='mobile-nav-link'
        onClick={props.onToggle} 
        exact to='/portfolio'>Portfolio</NavLink>
      <NavLink
        className='mobile-nav-link'
        onClick={props.onToggle}  
        exact to='/contact'>Contact</NavLink>
  </div>
)

export default mobileNav;