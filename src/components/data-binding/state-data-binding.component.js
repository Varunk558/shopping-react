import { useState } from "react";

export function StateDataBindingComponent() {
    //const { userName, setUserName} = useState("John Doe");
    const [userName, setUserName] = useState("");
    function onUserNameChange(e){
        setUserName(e.target.value);
    }
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={onUserNameChange}/></dd>
            </dl>
            <p>
                Hello {userName}
            </p>
        </div>
    )
}