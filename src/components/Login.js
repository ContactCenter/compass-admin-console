import React, { Component } from 'react';
// import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
      <h3>Admin Login</h3>
      <Form />
      </div>
    );
  }
}

const Card = (props)=> {

}
let agents = ['David', 'Mike', 'Bot'];

class Form extends React.Component{
    render(){
        return(
            <form>
                <h4>Login Form</h4>
                <span>AAA </span><input type="text"/>
                <span>Sine </span><input type="text"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Login;
