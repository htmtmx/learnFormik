import { Form, Formik } from "formik";
import { MyTextInput } from "../components/MyTextInput";
import * as Yup from "yup";

import "./../styles/styles.css";

export const RegisterFormikPage = () => {
	return (
		<div>
			<h1>Register formik page</h1>
			<Formik
				initialValues={{
					name: "",
					email: "",
					password: "",
					repeatPassword: "",
				}}
				onSubmit={(values) => {
					console.log(values);
				}}
				validationSchema={Yup.object({
					name: Yup.string()
						.min(2, "El nombre debe contener al menos dos letras")
						.max(15, "El nombre no puede tener más de 15 letras")
						.required("Campo requerido"),
					email: Yup.string()
						.matches(
							/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							"Email no valido"
						)
						.required("Campo requerido"),
					password: Yup.string()
						.min(6, "La contraseña contener minimo 6 letras")
						.required("Campo requerido"),
					repeatPassword: Yup.string().oneOf(
						[Yup.ref("password")],
						"Las contraseñas deben coincidir"
					),
				})}
			>
				{({ handleReset }) => (
					<Form>
            <MyTextInput
              label="Name"
              name="name"
              placeholder="John Smith"
            />
						<MyTextInput
							label="Email"
							name="email"
							placeholder="email@email.com"
						/>
            <MyTextInput
              label="Password"
              name="password"
              type="password"
            />
						<MyTextInput
							label="Repeat password"
							name="repeatPassword"
							type="password"
						/>

						<button type="submit">Submit</button>
						<button type="button" onClick={handleReset}>
							Reset
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
