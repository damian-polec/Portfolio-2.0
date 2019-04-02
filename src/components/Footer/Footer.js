import React from 'react';

import Socials from '../Socials/Socials';

import './Footer.scss';
const footer = (props) => {
  return (
    <div className='footer'>
      <p>Damian Lukasz Polec</p>
      <Socials />
    </div>
  )
}

export default footer;