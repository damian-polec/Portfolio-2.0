import React from 'react';

import './Backdrop.scss';
const backdrop = props => (
  <div 
    className={props.isToggle ? ['backdrop', 'backdrop-show'].join(' ') : ['backdrop', 'backdrop-hide'].join(' ')}
    onClick={props.toggle}></div>
)

export default backdrop;