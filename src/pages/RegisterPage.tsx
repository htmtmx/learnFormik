import React from 'react'
import "./../styles/styles.css"
import { useForm } from '../hooks/useForm'

export const RegisterPage = () => {

  const {
    name, email, password, repeatPassword,
    formData,
    onChange,
    resetForm,
    isValidEmail } = useForm(
        {
          name: "",
          email: "",
          password: "",
          repeatPassword: "",
        }
    );
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    if (name.trim().length <= 0 || !isValidEmail(email) || password.trim().length <= 0 || password.trim().length < 6 || repeatPassword.trim().length <= 0 || password !== repeatPassword) {
      console.log("Formulario invalido");
      return;
    }
    console.log(formData)
  }

  return (
		<div>
			<h1>Register page</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Name"
					name="name"
					onChange={onChange}
					value={name}
					className={`${name.trim().length <= 0 && "has-error"}`}
				/>
				{name.trim().length <= 0 && <span>Campo requerido</span>}
				<input
					type="email"
					placeholder="Email"
					name="email"
					onChange={onChange}
					value={email}
					className={`${!isValidEmail(email) && "has-error"}`}
				/>
				{!isValidEmail(email) && <span>El email no es valido</span>}
				<input
					type="password"
					placeholder="Password"
					name="password"
					onChange={onChange}
					value={password}
				/>
				{password.trim().length <= 0 && <span>Campo requerido</span>}
				{password.trim().length < 6 && password.trim().length > 0 && (
					<span>La contraseña debe tener almenos 6 caracteres.</span>
				)}
				<input
					type="password"
					placeholder="Repeat Password"
					name="repeatPassword"
					onChange={onChange}
					value={repeatPassword}
				/>
				{repeatPassword.trim().length <= 0 && <span>Campo requerido</span>}
				{repeatPassword.trim().length >0 && password !== repeatPassword && (
					<span>Las contraseñas deben coincidir.</span>
				)}
				<button type="submit">Register</button>
				<button type="button" onClick={resetForm}>
					Reset
				</button>
			</form>
		</div>
	);
}
