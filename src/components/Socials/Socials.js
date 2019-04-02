import React from 'react';

import Icon from '../Icon/Icon'
import './Socials.scss';

const socials = (props) => {
  return (
    <div className={props.view}>
        <a href='https://www.facebook.com/damien.polec' target="_blank" rel="noopener noreferrer"><Icon iconType={['fab', 'facebook-f']} /></a>
        <a href="https://github.com/damian-polec" target="_blank" rel="noopener noreferrer"><Icon iconType={['fab', 'github']} /></a>
        <a href="https://www.linkedin.com/in/damian-po%C5%82e%C4%87-46167912b/" target="_blank" rel="noopener noreferrer"><Icon iconType={['fab', 'linkedin-in']} /></a>
    </div>
  )
}

export default socials;