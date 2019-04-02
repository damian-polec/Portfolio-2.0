import React from 'react';

import Icon from '../../../../components/Icon/Icon';
import './Skills.scss';
const skills = (props) => {
  const mainSkills = ['html5', 'css3-alt', 'js-square', 'react', 'sass', 'npm'];
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <h3>Programming Languages & Tools</h3>
      <div className='main'>
        {mainSkills.map(icon => {
          return (
          <i key={icon}>
            <Icon iconType={['fab', icon]} />
          </i>
        )})
      }
      </div>
      <h3>Additional</h3>
      <div className='other'>
        <ul className='list'>
          <li><i><Icon iconType={'check'} /></i>I worked with Node.js and Express framework to build simple REST API</li>
          <li><i><Icon iconType={'check'} /></i>Working with noSQL MongoDB database withe the use of Mongoose library</li>
          <li><i><Icon iconType={'check'} /></i>Basic knowledge of Git workflow</li>
          <li><i><Icon iconType={'check'} /></i>Basic knowledge of GraphQL</li>
          <li><i><Icon iconType={'check'} /></i>Basic knowledge of SQL databases</li>
        </ul>
      </div>
      <h3>Workflow</h3>
      <div className='workflow'>
        <ul className='list'>
          <li><i><Icon iconType={'check'} /></i>Mobile-First, Responsive Design</li>
          <li><i><Icon iconType={'check'} /></i>Cross Browser Testing & Debugging</li>
        </ul>
      </div>
    </div>
  )
}

export default skills;