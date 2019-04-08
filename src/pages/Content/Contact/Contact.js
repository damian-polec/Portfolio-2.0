import React from 'react';

import Form from './Form/Form';
import Footer from '../../../components/Footer/Footer';

import './Contact.scss';
const contact = (props) => {
  return (
    <div className='contact-page'>
      <Form />
      <Footer />
    </div>
  )
}

export default contact;