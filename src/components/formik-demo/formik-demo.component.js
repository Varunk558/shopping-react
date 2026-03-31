import { useFormik } from 'formik';
import * as Yup from 'yup';

export function FormikDemoComponent() {


    // function VerifyUserDetails(values) {
    //     var errors = {};
    //     if (values.name === '') {
    //         errors.name = 'User Name Required';
    //     } else if (values.name.length < 5) {
    //         errors.name = 'User Name must be at least 5 characters';
    //     }else if (values.name.length > 15) {
    //         errors.name = 'User Name must be less than 15 characters';
    //     }
        
    //     if (values.age == '') {
    //         errors.age = 'Age Required';
    //     } else if (isNaN(values.age)) {
    //         errors.age = 'Age must be a number';
    //     } else if (values.age < 18) {
    //         errors.age = 'Age must be at least 18';
    //     } else if (values.age > 100) {
    //         errors.age = 'Age must be less than 100';
    //     }

    //     if (values.mobile.match(/^\s*$/)) {
    //         errors.mobile = 'Mobile Number Required';
    //     } else if (isNaN(values.mobile)) {
    //         errors.mobile = 'Mobile Number must be a number';
    //     } else if (values.mobile.length != 10) {
    //         errors.mobile = 'Mobile Number must be 10 digits';
    //     }

    //     if (values.city === '-1') {
    //         errors.city = 'City is Required';
    //     }
    //     return errors;
    // }
    const formik = useFormik({
         initialValues: {
             name: '',
             age: 0,
             mobile: '',
             city: ''
     },
        onSubmit: (values) => {
            alert(JSON.stringify(values));
     },
        //validate: VerifyUserDetails
        validationSchema: Yup.object({
            name: Yup.string()
                    .required('User Name Required')
                    .min(5, 'User Name must be at least 5 characters')
                    .max(15, 'User Name must be less than 15 characters'),
            age: Yup.number()
                    .required('Age Required')
                    .min(18, 'Age must be at least 18')
                    .max(100, 'Age must be less than 100'),
            mobile: Yup.string()
                        .required('Mobile Number Required')
                        .matches(/^\d{10}$/, 'Mobile Number must be 10 digits'),
            city: Yup.string()
                    .required('City is Required')
                    .notOneOf(['-1'], 'City is Required')
        })

    });

    return (

        <div className="container-fluid mt-3">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={formik.handleChange}  type="text" name="name" /></dd>
                    {formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                    <dt>Age</dt>
                    <dd><input onChange={formik.handleChange} value={formik.values.age} type="text" name="age" /></dd>
                    {formik.errors.age ? <div className="text-danger">{formik.errors.age}</div> : null}
                    <dt>Mobile</dt>
                    <dd><input onChange={formik.handleChange}  type="text" name="mobile" /></dd>
                    {formik.errors.mobile ? <div className="text-danger">{formik.errors.mobile}</div> : null}
                    <dt>City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="city">
                            <option value="-1">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                        {formik.errors.city ? <div className="text-danger">{formik.errors.city}</div> : null}
                    </dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}