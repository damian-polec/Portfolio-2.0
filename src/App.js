import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faNpm
  } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {  faBriefcase, faCheck, faLink } from '@fortawesome/free-solid-svg-icons';

import Layout from './components/Layout/Layout';

library.add(
  faFacebookF,
  faGithub, 
  faLinkedinIn, 
  faUser, 
  faBriefcase, 
  faEnvelope,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faNpm,
  faCheck,
  faLink,
  );

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
