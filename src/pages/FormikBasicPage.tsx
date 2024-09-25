import React from 'react';
import { FormikErrors, useFormik } from 'formik';

import './../styles/styles.css';

interface FormValues{
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {

  const validate = (values: FormValues) => {
    const errors:FormikErrors<FormValues> = {};
    if (!values.firstName) {
      errors.firstName = 'First Name is required';
    }else if(values.firstName.length < 3){
      errors.firstName = 'First Name is too short';
    }

    if (!values.lastName) {
      errors.lastName = 'Last Name is required';
    } else if (values.lastName.length < 3) {
      errors.lastName = 'Last Name is too short';
    }

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  }

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      firstName: 'Cesar',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate
  });

  return (
		<div>
      <h1>FormikBasicPage</h1>
      <form onSubmit={handleSubmit} noValidate>

        <label htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={values.firstName} />
        <span>First Name is required</span>
        
        <label htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={values.lastName} />
        <span>Last Name is required</span>

        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={values.email} />
        <span>Email is required</span>
        <span>Email is invalid</span>

        <button type="submit">Submit</button>
      </form>
		</div>
	);
}
