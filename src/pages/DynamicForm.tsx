
import { Form, Formik } from "formik";
import formJson from "./../data/custom-form.json"
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";

const initialValues: { [key: string]: any } = {};

const requiredFields: { [key: string]: any } = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;

  if (!input.validations) continue;

  let schema = Yup.string();

  for (const validation of input.validations) {
    if (validation.type === "required") {
      schema = schema.required("Required");
    }
  }
  requiredFields[input.name] = schema;
  
}

const validationSchema = Yup.object({...requiredFields});

export const DynamicForm = () => {

  return (
    <div>
      <h1>DynamicForm</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={validationSchema}
      >

        {({handleReset}) => (
          <Form>
            
            {formJson.map(({ label, name, type, placeholder, options }) => {
              
              if (type === 'input' || type === 'password' || type === 'email') {
                return (
                  <MyTextInput label={label} name={name} key={name} type={(type as any)} placeholder={placeholder} />
                )
              } else if (type === 'select') {
                return (
                  <MySelect label={label} name={name} key={name} >
                    <option value="">Select...</option> &&
                    {
                      options?.map(({id, label}) => {
                        return (
													<option value={id} key={label}>
														{label}
													</option>
												);
                      })
                    }
                  </MySelect>
                )
              }
              throw new Error('Invalid type')
            }
              )
            }

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
          </Form>
        )}
        
      </Formik>
    </div>
  )
}
