import React from 'react';

import Layer from '../../../../components/Layer/Layer';
import Image from '../../../../components/Image/Image';

import './Project.scss';
const project = (props) => {
  return (
    <div className='project' id={props.projectId}>
      <Layer liveLink={props.liveLink} gitHubLink={props.gitHubLink}/>
      <Image imageUrl={props.projectImageUrl} alt={props.title} />
    </div>
  )
}

export default project;