import { useState } from "react"


export function ElementStateEventDemoComponent() {


    const [userName, setUserName] = useState("");
    const [userError, setUserError] = useState("");
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState("");
    const [msg, setMsg] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function SubmitClick() {
        if (userName == "") {
            setUserError("User Name is required");
        } else {
            setUserError("");
            document.write(`Hello ! ${userName} and your city is ${city}`);
        }

        if (city == "notcity") {
            setCityError("City is required");
        }

    }
    function HandleUserBlur(event) {
        if (event.target.value == "") {
            setUserError("User Name is required");
        } else {
            setUserError("");
        }
    }

    function HandleUserKeyUp(event) {
        if (event.target.value == "") {
            setUserError("User Name is required");
        } else {
            setUserError("");
        }
    }

    function CityChanged(event) {
        if (event.target.value == "notcity") {
            setCityError("City is required");
        } else {
            setCity(event.target.value);
            setCityError("");
        }
    }

    function HandleUserFocus(event) {
        setUserError("Name is Mandatory");
    }

    function HandleCut(event) {
        setMsg("Removed and pasted to clipboard");
    }

    function HandleCopy(event) {
        setMsg("Copied to clipboard");
    }   

    function HandlePaste(event) {
        setMsg("Inserted from clipboard");
    }

    return (

        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onFocus={HandleUserFocus} onKeyUp={HandleUserKeyUp} onBlur={HandleUserBlur} onChange={handleUserName} /></dd>
                <dd className="text-danger">{userError}</dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={CityChanged}>
                        <option value="notcity">Select City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                    </select>
                </dd>
                <dd className="text-danger">{cityError}</dd>
                <dt>Mobile</dt>
                <dd><input type="text" onCut={HandleCut} onPaste={HandlePaste} onCopy={HandleCopy} /></dd>
                <dd className="text-danger">{msg}</dd>
            </dl>
            <button onClick={SubmitClick} className="btn btn-primary">Submit</button>
        </div>
    )
}