import './App.css';
import React from "react";
import axios from "axios";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      password:"",
    }
  }
  login = () => {
    console.log(this.state);
    axios.post('/api/login', this.state)
    .then((data)=>{
      console.log(data);
      console.log("login Successfull token created");
    })
    .catch((err)=>{
      console.log("Invalid Login");
    })
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  logout_user = () => {
    axios.get('/api/logout')
    .then((data)=>{
      console.log(data);
      console.log("logout Successfull token deleted");
    })
    .catch((err)=>{
      console.log("Something wrong");
    })
  }
  render(){
    return (
      <div className="App">
        <input type="email" onChange={this.handleChange} name="email"/> <br/>
        <input type="password" onChange={this.handleChange} name="password" />
        <button onClick={this.login}>login</button>

        <button onClick={this.logout_user}>Logout</button>
      </div>
    );
  }
}

export default App;
