import React from "react";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "Sheri",
      email: "m.shaheerkhan199@gmail.com",
      value:"",
    }
  }
  set_name = () => {
    this.setState(
      {
        name: this.state.value,
      }
    )
  }

  greetings = (message) => {
    console.log(message);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  get_name = () =>{
    console.log(this.state.name);
  }
  render() {
    return (
      <div className="App">
        <h1>Practicing of states and props</h1>
        <div>
          <Header name={this.state.name} func={this.greetings} />
          <label>You name</label>
          <input name="name" onChange={(e)=> this.handleChange(e)} placeholder="Enter your name" type="text" />
          <input name="email" onChange={(e)=> this.handleChange(e)} placeholder="Enter your email" type="text" />
          <input type="button"  value="Set name" onClick={this.set_name} />
          <input type="button" value="Get name" onClick={this.get_name} />
          <p>Your name is: {this.state.name}</p>
          <p>Your email is: {this.state.email}</p>
        </div>
      </div>
    );
  }
}
export default App;
