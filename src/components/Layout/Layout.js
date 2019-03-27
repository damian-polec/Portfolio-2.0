import React from 'react';

import Main from '../../pages/Main/Main';

const layout = props => {
  return (
    <Main>
      {props.children}
    </Main>
  )
}

export default layout;