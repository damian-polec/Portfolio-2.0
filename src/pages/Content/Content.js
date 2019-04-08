import React, { Suspense } from 'react';

import Jumbo from '../../components/Jumbo/Jumbo';
import Spinner from '../../components/Spinner/Spinner';
import './Content.scss'
const Profile = React.lazy(() => import('./Profile/Profile'));
const Portfolio = React.lazy(() => import('./Portfolio/Portfolio'));
const Contact = React.lazy(() => import('./Contact/Contact'));




const content = (props) => {
  return (
    <div className='content'>
      <Jumbo jumboType={props.jType} header={props.contentType}/>
      { (props.contentType === 'profile') 
        ? (
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>
        ) 
        : (props.contentType === 'portfolio')
        ? (
          <Suspense fallback={<Spinner />}>
            <Portfolio />
          </Suspense>
        )
        : (props.contentType === 'contact')
        ? (
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        )
        : null }      
    </div>
  )
}

export default content;