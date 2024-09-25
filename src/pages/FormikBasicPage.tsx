import React from 'react'
import './../styles/styles.css'

export const FormikBasicPage = () => {
  return (
		<div>
      <h1>FormikBasicPage</h1>
      <form noValidate>
        <label htmlFor="firstName">
          First Name
        </label>
        <input type="text" name="firstName" />
        <span>First Name is required</span>
        <label htmlFor="lastName">
          Last Name
        </label>
        <input type="text" name="lastName" />
        <span>Last Name is required</span>
        <label htmlFor="email">
          Email
        </label>
        <input type="email" name="email" />
        <span>Email is required</span>
        <span>Email is invalid</span>
        <button type="submit">Submit</button>
      </form>
		</div>
	);
}
