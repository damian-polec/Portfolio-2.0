import React from 'react';

import './NavToggle.scss';

const navToggle = props => (
  <div className='nav-toggle' onClick={props.onToggle}>
    <div className='toggle-bar'></div>
    <div className='toggle-bar'></div>
    <div className='toggle-bar'></div>
  </div>
)

export default navToggle;