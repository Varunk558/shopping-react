import { useState } from "react"

export function StyleDemoComponent() {

    const [styleObject, setStyleObject] = useState({border:'', boxShadow:''});
    const [userError, setUserError] = useState('');

    function handleUserName(event) {
        const userName = event.target.value;
        if(userName.charCodeAt(0) >= 65 && userName.charCodeAt(0)<=90) {
            setStyleObject({border:'2px solid green', boxShadow:'0 0 10px green'});
            setUserError('');
        } else {
            setStyleObject({border:'2px solid red', boxShadow:'0 0 10px red'});
            setUserError('User name must start with a capital letter');
        }
    }

    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onBlur={handleUserName} style={styleObject} /></dd>
                <dd className="text-danger">{userError}</dd>
            </dl>
        </div>
    )
}