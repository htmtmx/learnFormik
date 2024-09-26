import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';

export const FormikAbstract = () => {
	return (
		<div>
			<h1>Formik Abstract</h1>
			<Formik
				initialValues={{
					firstName: "",
					lastName: "",
					email: "",
					jobType: "",
					terms: false,
					color: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Must be 15 characters or less")
						.required("Required"),
					lastName: Yup.string()
						.max(15, "Must be 15 characters or less")
						.required("Required"),
					email: Yup.string()
						.email("Invalid email address")
						.required("Required"),
					jobType: Yup.string()
						.notOneOf(["jr"], "Option not available")
						.required("You must select an option"),
					terms: Yup.boolean().isTrue("You must accept the terms"),
				})}
			>
				{(formik) => (
          <Form>
            <MyTextInput label='My first name' name='firstName' placeholder="First Name"/>
            <MyTextInput label='Last name' name='lastName' placeholder="Last Name"/>
            <MyTextInput label='Email' name='email' placeholder="email@email.com"/>
						<label htmlFor="jobType">Job type</label>
						<Field name="jobType" component="select">
							<option value="">Select...</option>
							<option value="jr">Jr</option>
							<option value="mid">Mid</option>
							<option value="sr">Sr</option>
						</Field>
						<ErrorMessage name="jobType" component="span" />
						<label>
							<Field name="terms" type="checkbox" />
							Terms and conditions
						</label>
						<ErrorMessage name="terms" component="span" />

						<button type="submit">Submit</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
