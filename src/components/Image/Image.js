import React, { Fragment } from 'react';

const image = props => {
  return (
    <Fragment>
      <img  src={props.imageUrl}/>
    </Fragment>
  )
}