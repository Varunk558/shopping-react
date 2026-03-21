import { useState } from "react"

export function KeyboardEventDemoComponent() {

    const [ users ] = useState([{"UserId": "john"},{"UserId": "jane"},{"UserId": "alice"},{"UserId": "bob"}]);
    const [ msg, setMsg ] = useState("");
    const [ errorClass, setErrorClass ] = useState("");

    function verifyUserId(e) {
        for(let user of users) {
            if(user.UserId === e.target.value) {
                setMsg("User Id is already taken. Please choose another one.");
                setErrorClass("text-danger");
                break;
            }
            else {
                setMsg("User Id is available.");
                setErrorClass("text-success");
            }
        }
        
    }
    return (
        <div className="container-fluid">
            <h2>Keyboard Event Demo</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onKeyUp={verifyUserId}/></dd>
                <dd className={errorClass}>{msg}</dd>
                <dt>Password</dt>
                <dd><input type="password" /></dd>
            </dl>
        </div>
    )

}

