import React from 'react'
import "./../styles/styles.css"
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

  const {name, email, password, repeatPassword, formData, onChange } = useForm({
		name: "",
		email: "",
		password: "",
		repeatPassword: "",
	});
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    console.log(formData)
  }

  return (
    <div>
      <h1>Register page</h1>
      <form onSubmit={onSubmit}>
        <input 
        type="text" placeholder='Name' name='name'
        onChange={onChange} 
        value={name}
        />
        <input 
        type="email" placeholder='Email' name='email'
        onChange={onChange} 
        value={email}
        />
        <input 
        type="password" placeholder='Password' name='password'
        onChange={onChange} 
        value={password}
        />
        <input 
        type="password" placeholder='Repeat Password' name='repeatPassword'
        onChange={onChange} 
        value={repeatPassword}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}
