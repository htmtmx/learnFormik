import { useField } from "formik"

interface Props{
  label: string,
  name: string,
  type?: 'text' | 'email' | 'password',
  [x:string]: any

}

export const MyTextInput = ({ label, ...props }: Props) => {
  
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="" {...field} {...props} />
      {
        meta.touched && meta.error && (
          <span className="error">{ meta.error}</span>
        )
      }
    </>
  )
}
