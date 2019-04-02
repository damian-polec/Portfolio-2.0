import React from 'react';

import { Route } from 'react-router-dom';

import Main from '../../pages/Main/Main';

const layout = props => {
  return (
  <Route path='/' render={(props) => <Main {...props} /> } />
  )
}

export default layout;