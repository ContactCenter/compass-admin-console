import React, { Component } from 'react';
import './Login.css';

class Login extends React.Component{
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
    return(
        <div>
            <img src={props.agent_url} alt=""/>
            <div>{props.name}</div>
        </div>
    )
};
let agents = [
    {   "name": "David Shams",
        "agent_url": "https://avatars0.githubusercontent.com/u/7882227?s=40&v=4"
    },
    {   "name": "Mike Knott",
        "agent_url": "https://avatars0.githubusercontent.com/u/7882227?s=40&v=4"
    },
    {   "name": "John Doe",
        "agent_url": "https://avatars0.githubusercontent.com/u/7882227?s=40&v=4"
    },
    ];

const AgentList = (props)=> {
        return (
            <div className="Login">
                <h3>AgentList</h3>
                <div>{props.cards.map(card => <Card {...card}/>)}</div>
            </div>
        );
};
class Form extends React.Component{
    render(){
        return(
            <form>
                <h4>Login Form</h4>
                <AgentList cards={agents}/>
                <span>AAA </span><input type="text"/>
                <span>Sine </span><input type="text"/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Login;
