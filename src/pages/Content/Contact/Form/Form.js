import React  from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import './Form.scss'

const form = () => (
  <div className='form'>
    <h2>Send me your message</h2>
    <Formik
      initialValues={{ name: '', email: '', message: ''}}
      validate={values => {
        let errors = {};
        if(!values.name) {
          errors.name = 'Name required'
        } else if(values.name.length < 3) {
          errors.name = 'Name too short!'
        }

        if (!values.email) {
          errors.email = 'Email required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.message) {
          errors.message = 'Message required';
        } else if (values.message.length < 5) {
          errors.message = 'Message too short!!'
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        fetch('https://formcarry.com/s/7oac9iUJRDb', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept' : 'application/json'
          },
          body: JSON.stringify(values),
          }).then(res => {
            setSubmitting(false);
            console.log(res)
          }).catch(err => console.log(err))
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor='name'>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" />
          <label htmlFor='email'>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label htmlFor='message'>Message</label>
          <Field component='textarea' name='message'/>
          <ErrorMessage name="message" component="div" />
          <Field component={() => <input type='hidden' name='_gotcha' />} />
          <button type="submit" disabled={isSubmitting}>
            Send
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default form;