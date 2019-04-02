import React from 'react';

import Cover from '../../Cover/Cover';
import Image from '../../Image/Image';
import NavText from './NavText/NavText';
import './NavButton.scss';

const navButton = (props) => {
  return (
    <div className={['menu-button', props.btType].join(' ')}
      onClick={props.click}>
      <Cover />
      <Image classType='image' imageUrl={props.img} alt={props.bType}/>
      <NavText 
        icon={props.icon}
        header={props.header}
        subHeader={props.subHeader}/>
    </div>
  )
}

export default navButton;