import React from 'react';

import Jumbo from '../../components/Jumbo/Jumbo';
import Profile from './Profile/Profile';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

import './Content.scss'

const content = (props) => {
  return (
    <div className='content'>
      <Jumbo jumboType={props.jType} header={props.contentType}/>
      { (props.contentType === 'profile') 
        ? <Profile /> 
        : (props.contentType === 'portfolio')
        ? <Portfolio />
        : (props.contentType === 'contact')
        ? <Contact />
        : null }      
    </div>
  )
}

export default content;