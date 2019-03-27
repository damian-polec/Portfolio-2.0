import React, { Component } from 'react';

import Intro from '../../components/Intro/Intro';

import './Main.scss';

class Main extends Component{
  render() {
    return (
      <div className='home'>
        <Intro />
      </div>
    )
  }
}

export default Main;