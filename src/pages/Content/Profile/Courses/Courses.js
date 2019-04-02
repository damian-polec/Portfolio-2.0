import React from 'react';

import './Courses.scss';

const courses = (props) => {
  return (
    <div className='courses'>
      <h2>Courses</h2>
      <div className="courses-content">
        <div className="bullet"></div>
        <div className="courses-info">
          <h3>AcadeMind Node.js/2019</h3>
        </div>
      </div>
      <div className="courses-content">
        <div className="bullet"></div>
        <div className="courses-info">
          <h3>AcadeMind React.js/2018</h3>
        </div>
      </div>
      <div className="courses-content">
        <div className="bullet"></div>
        <div className="courses-info">
          <h3>Front End Developer Kodilla.com/2017</h3>
        </div>
      </div>
      <div className="courses-content">
        <div className="bullet"></div>
        <div className="courses-info">
          <h3>FreeCodeCamp.com/2016-</h3>
        </div>
      </div>
    </div>
  )
}

export default courses;