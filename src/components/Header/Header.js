import React, { Fragment } from 'react';

const header = (props) => {
  const textTransform =(() => {
    const text = props.text;
    const start = text.substring(0,2);
    const mid = text.substring(2,3);
    const end = text.substring(3);
    return <h2>{start}<span>{mid}</span>{end}</h2>
  })();

  return (
    <Fragment>
      {textTransform}
    </Fragment>
  )
}

export default header;