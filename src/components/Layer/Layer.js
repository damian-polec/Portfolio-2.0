import React from 'react';

import Icon from '../Icon/Icon';

import './Layer.scss';
const layer = (props) => {
  return (
    <div className='layer'>
      <a href={props.liveLink} target='_blank' rel='noopener noreferrer'><Icon iconType={'link'} /></a>
      <a href={props.gitHubLink} target='_blank' rel='noopener noreferrer'><Icon iconType={['fab', 'github']} /></a>
    </div>
  )
}

export default layer;