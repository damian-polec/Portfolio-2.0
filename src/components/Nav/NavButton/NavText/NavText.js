import React, { Fragment } from 'react';

import Icon from '../../../Icon/Icon';
import Header from '../../../Header/Header';

import './NavText.scss';

const navText = (props) => {

  return (
    <Fragment>
      <div className='icon-wrapper'>
        <Icon iconType={props.icon} />
      </div>
      <div className='text-wrapper'>
        <Header text={props.header} />
        <p>{props.subHeader}</p>
      </div>
    </Fragment>
  )
}

export default navText;

