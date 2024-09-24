import React from 'react'

export const useForm = <T>(initialState: T) => {

  const [formData, setFormData] = React.useState(initialState);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

  return {...formData ,formData, onChange }
}
