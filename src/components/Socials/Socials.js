import React from 'react';

import Icon from '../Icon/Icon'
import './Socials.scss';

const socials = (props) => {
  return (
    <div className={props.view}>
        <a href="https://github.com/damian-polec" target="_blank" rel="noopener noreferrer"><Icon iconType={['fab', 'github']} /></a>
        <a href="www.linkedin.com/in/damian-polec" target="_blank" rel="noopener noreferrer"><Icon iconType={['fab', 'linkedin-in']} /></a>
    </div>
  )
}

export default socials;