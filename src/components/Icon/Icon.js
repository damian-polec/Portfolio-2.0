import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icon = (props) => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={props.iconType} />
    </Fragment>
  )
}

export default icon