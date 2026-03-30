

export function FormikDemoComponent() {

    return (

        <div className="container-fluid mt-3">
            <form>
                <h2>Register User</h2>
                <dl>
                    <dt>Name</dt>
                    <dd><input  type="text" name="name" /></dd>
                    <dt>Age</dt>
                    <dd><input  type="text" name="age" /></dd>
                    <dt>Mobile</dt>
                    <dd><input  type="text" name="mobile" /></dd>
                    <dt>City</dt>
                    <dd>
                        <select>
                            <option value="-1">Select City</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}