import React from 'react';

import Header from '../Header/Header';
import Cover from '../Cover/Cover';
import './Jumbo.scss';

const jumbo = (props) => {
  return (
    <div className={['jumbotron', props.jumboType].join(' ')}>
      <Cover />
      <Header text={props.header}/>
    </div>
  )
}

export default jumbo;