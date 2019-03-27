import React, { Component, Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

import Layout from './components/Layout/Layout';

library.add(faFacebookF, faGithub, faLinkedinIn);

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout />
      </Fragment>
    );
  }
}

export default App;
