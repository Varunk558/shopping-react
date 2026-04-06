import { Form, Formik, useFormik, ErrorMessage, Field} from "formik";
import * as Yup from 'yup';


export function FormikComponents() {
    return (
        <div>
            <h2>User Registration</h2>
            <Formik
                initialValues={{
                    name: '',
                    age: 0,
                    mobile: '',
                    city: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Name is required')
                        .min(4, 'Name must be at least 4 characters')
                        .max(10, 'Name must be less than 10 characters'),
                    age: Yup.number()
                        .min(0)
                        .required('Age is required'),
                    mobile: Yup.string()
                        .required('Mobile is required')
                        .matches(/^\d{10}$/, 'Mobile number must be 10 digits'),
                    city: Yup.string()
                        .required('City is required'),
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}
            >
                
               {
                 <Form>
                        <dl>
                            <dt>User Name</dt>
                            <dd><Field name="name" /></dd>
                            <dd><ErrorMessage name="name" component="div" className="text-danger" /></dd>
                            <dt>Age</dt>
                            <dd><Field name="age" /></dd>
                            <dd><ErrorMessage name="age" component="div" className="text-danger" /></dd>
                            <dt>Mobile</dt>
                            <dd><Field name="mobile" /></dd>
                            <dd><ErrorMessage name="mobile" component="div" className="text-danger" /></dd>
                            <dt>City</dt>
                            <dd>
                                <Field name="city" as="select">
                                    <option value="">Select a city</option>
                                    <option value="new-york">New York</option>
                                    <option value="los-angeles">Los Angeles</option>
                                    <option value="chicago">Chicago</option>
                                </Field>
                            </dd>
                            <dd><ErrorMessage name="city" component="div" className="text-danger" /></dd>
                        </dl>
                        <button className="btn btn-primary">Register</button>
                 </Form>

               } 
               
            </Formik>
        </div>
    )
}