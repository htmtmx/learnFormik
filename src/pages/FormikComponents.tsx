import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './../styles/styles.css';

export const FormikComponents = () => {

  return (
		<div>
			<h1>Formik Components</h1>
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
          jobType: Yup.string().notOneOf(['jr'], 'Option not available').required('You must select an option'),
					terms: Yup.boolean().isTrue("You must accept the terms"),
				})}
			>
				{(formik) => (
					<Form>
						<label htmlFor="firstName">First Name</label>
						<Field
							name="firstName"
							type="text"
						/>
						<ErrorMessage name="firstName" component="span" />
						<label htmlFor="lastName">Last Name</label>
						<Field name="lastName" type="text" />
						<ErrorMessage name="lastName" component="span" />
						<label htmlFor="email">Email</label>
						<Field name="email" type="email" />
						<ErrorMessage name="email" component="span" />
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
}
