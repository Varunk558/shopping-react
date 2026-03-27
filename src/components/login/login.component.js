import './login.component.css';
export function LoginComponent(props){
    return(
        <div id="form-container" className="container-fluid">
            <form>
                <h2> <span className="bi bi-person-fill"></span>{props.title}</h2>
                <div className="mb-2">
                    <label className="form-label">{props.usernameLabel}</label>
                    <div>
                        <input type = {props.usernameType} className="form-control"/>
                    </div>
                </div>
                <div>
                    <label className="form-label">Password</label>
                    <div>
                        <input type = "password" className="form-control"/>
                    </div>
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary w-100">Login</button>
                </div>
            </form>
        </div>
    )
}