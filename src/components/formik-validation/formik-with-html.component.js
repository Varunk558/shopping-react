import { useFormik } from "formik";
import * as Yup from 'yup';

export function FormikWithHtmlComponent() {

    const formik = useFormik({
        initialValues: {
            name: '',
            age: 0,
            mobile: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('User Name Required')
                .min(4, 'Name must be at least 4 characters')
                .max(10, 'Name must be less than 10 characters'),
            age: Yup.number()
                .required('Age Required')
                .min(0, 'Invalid age'),
            mobile: Yup.string()
                .required('Mobile Number Required')
                .matches(/^[0-9]{10}$/, 'Invalid mobile number')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input name="name" type="text" {...formik.getFieldProps('name')} />
                    </dd>
                    <dd className="text-danger">{formik.touched.name && formik.errors.name}</dd>
                    <dt>Age</dt>
                    <dd>
                        <input name="age" type="text" {...formik.getFieldProps('age')} />
                    </dd>
                    <dd className="text-danger">{formik.touched.age && formik.errors.age}</dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input name="mobile" type="text" {...formik.getFieldProps('mobile')} />
                    </dd>
                    <dd className="text-danger">{formik.touched.mobile && formik.errors.mobile}</dd>
                </dl>
                <button className="btn btn-primary" type="submit">Register</button>
            </form>
        </div>
    )
}