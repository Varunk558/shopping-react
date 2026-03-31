import { useState } from "react";

export function FormValidationComponent() {

    const [userDetails, setUserDetails] = useState({
        name: '',
        age: 0,
        mobile: '',
        city: ''
    });
    const [nameError, setNameError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [mobileError, setMobileError] = useState('');
    const [cityError, setCityError] = useState('');

    function NameChangeHandler(event) {
        setUserDetails({
            ...userDetails,
            name: event.target.value
        })
        if (userDetails.name!=='') {
            setNameError('');
        }
    }

    function AgeChangeHandler(event) {
        setUserDetails({
            ...userDetails,
            age: event.target.value
        })
        if (userDetails.age!=='') {
            setAgeError('');
        }
        if (!isNaN(userDetails.age) && userDetails.age > 0) {
            setAgeError('');
        }
    }

    function MobileChangeHandler(event) {
        setUserDetails({
            ...userDetails,
            mobile: event.target.value
        })
        if (userDetails.mobile!=='') {
            setMobileError('');
        }
    }

    function CityChangeHandler(event) {
        setUserDetails({
            ...userDetails,
            city: event.target.value
        })
        if (userDetails.city!=='-1') {
            setCityError('');
        }
    }

    function FormSubmit(event) {
        event.preventDefault();
        if (userDetails.name === '') {
            setNameError('Name is required');
        }
        if (isNaN(userDetails.age) || userDetails.age <= 0) {
            setAgeError('Age should be a positive number');
        } else if (userDetails.age === '') {
            setAgeError('Age is required');
        }
        if (userDetails.mobile === '') {
            setMobileError('Mobile is required');
        } else {
            setMobileError('');
        }
        if (userDetails.city === '-1') {
            setCityError('City is required');
        } else {
            setCityError('');
        }

        if (userDetails.mobile.match(/^\d{10}$/) === null) {
            setMobileError('Mobile should be 10 digits');
        }

        if (nameError === '' && ageError === '' && mobileError === '' && cityError === '') {
            alert('Form submitted successfully');
        }
    }

    return (

        <div className="container-fluid mt-3">
            <form onSubmit={FormSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input  onChange={NameChangeHandler} type="text" name="name" /></dd>
                    <dd className="text-danger">{nameError}</dd>
                    <dt>Age</dt>
                    <dd><input  onChange={AgeChangeHandler} type="text" name="age" /></dd>
                    <dd className="text-danger">{ageError}</dd>
                    <dt>Mobile</dt>
                    <dd><input  onChange={MobileChangeHandler} type="text" name="mobile" /></dd>
                    <dd className="text-danger">{mobileError}</dd>
                    <dt>City</dt>
                    <dd>
                        <select value={userDetails.city} onChange={CityChangeHandler}>
                            <option value="-1">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{cityError}</dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}