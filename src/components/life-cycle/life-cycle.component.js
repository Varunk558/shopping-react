import React from "react";


class LoginComponent extends React.Component{

    componentDidMount(){
        alert("Login Component Requested");
    }

    componentWillUnmount(){
        alert("Login component will unmount");
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
            </div>
        )
    }
}

class RegisterComponent extends React.Component{

    componentDidMount(){
        alert("Register Component Requested");
    }

    componentWillUnmount(){
        alert("Register component will unmount");
    }

    render(){
        return(
            <div>
                <h2>Register</h2>
            </div>
        )
    }
}

export class LifeCycleComponent extends React.Component {

    constructor(){
        super();
        this.state ={
            component: ''
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegisterClick = this.handleRegisterClick.bind(this);
    }

    handleLoginClick(){
        this.setState({
            component: <LoginComponent/>
        })
    }

    handleRegisterClick(){
        this.setState({
            component: <RegisterComponent/>
        })
    }

    render(){
        return(
            <div className="container">
                <h2>Life Cycle Hooks</h2>
                <div>
                    <button onClick={this.handleLoginClick}>Login</button>
                    <button onClick={this.handleRegisterClick}>Register</button>
                </div>
                <hr/>
                <div>
                    {this.state.component}
                </div>
            </div>
        )
    }
}