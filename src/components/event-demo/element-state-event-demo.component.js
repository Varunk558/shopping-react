import { useState } from "react"


export function ElementStateEventDemoComponent() {


    const [userName, setUserName] = useState("");
    const [userError, setUserError] = useState("");

    function handleUserName(event) {
        setUserName(event.target.value);
    }

    function SubmitClick() {
        if (userName == "") {
            setUserError("User Name is required");
        } else {
            setUserError("");
            document.write(`Hello !: ${userName}`);
        }
    }

    function HandleUserBlur(event) {
        if (event.target.value == "") {
            setUserError("User Name is required");
        } else {
            setUserError("");
        }
    }

    return (

        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onBlur={HandleUserBlur} onChange={handleUserName} /></dd>
                <dd className="text-danger">{userError}</dd>
            </dl>
            <button onClick={SubmitClick} className="btn btn-primary">Submit</button>
        </div>
    )
}