import React, { Fragment } from 'react';

import './Image.scss';

const image = props => {
  return (
    <Fragment>
      <img className={props.classType} src={props.imageUrl} alt={props.alt}/>
    </Fragment>
  )
}

export default image;