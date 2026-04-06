import { Field, Form, Formik, useField, ErrorMessage, useFormik } from "formik";
import * as Yup from 'yup';

export function FormikValidationComponent() {

    


    return (

        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik
                initialValues={{
                    name: '',
                    age: 0,
                    mobile: '',
                    city: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string().required('Name is required'),
                    age: Yup.number().min(0).required('Age is required'),
                    mobile: Yup.string().required('Mobile is required'),
                    city: Yup.string().required('City is required')
                })}
                onSubmit={(values) => {
                    alert(JSON.stringify(values));
                }}
            >
                <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd>
                            <Field name="name" type="text" />
                        </dd>
                        <dd>
                            <ErrorMessage name="name" component="div" className="text-danger" />
                        </dd>
                        <dt>Age</dt>
                        <dd>
                            <Field name="age" type="number" />
                        </dd>
                        <dd>
                            <ErrorMessage name="age" component="div" className="text-danger" />
                        </dd>
                        <dt>Mobile</dt>
                        <dd>
                            <Field name="mobile" type="text" />
                        </dd>
                        <dd>
                            <ErrorMessage name="mobile" component="div" className="text-danger" />
                        </dd>
                        <dt>City</dt>
                        <dd>
                            <Field name="city" as="select">
                                <option value="">Select a city</option>
                                <option value="new-york">New York</option>
                                <option value="los-angeles">Los Angeles</option>
                                <option value="chicago">Chicago</option>
                            </Field>
                        </dd>
                        <dd>
                            <ErrorMessage name="city" component="div" className="text-danger" />
                        </dd>
                    </dl>
                    <button>Register</button>
                </Form>
            </Formik>
        </div>
    )


}