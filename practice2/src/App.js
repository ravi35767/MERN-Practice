import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: "None",
      counter:0,
    };
    console.log("Constructor");
  }
  
  // static getDerivedStateFromProps(){
  //   console.log("getDerivedStateFromProps");
  //   // return {
  //   //   name:"Shaheer",
  //   // };
  //   return null;
  // }
  
  // changeName = () => {
  //   console.log(this.state.name);
  // }

  // componentDidMount(){
  //   console.log("componentDidMount");
  //   setTimeout(()=>{
  //     this.setState({
  //       name:"Muhammad Shaheer khan",
  //     })
  //   }, 2000);
  // }


  update_counter  = () => {
    this.setState({
      counter: this.state.counter+1,
    });
    console.log("Counter ==> ", this.state.counter);
  } 
  
  // componentDidUpdate(){
  //   console.log("componentDidUpdate");
  // }

  // componentWillUnmount(){
  //   console.log("componentWillUnmount");
  // }

  shouldComponentUpdate(){
    // return false;
    if(this.state.counter < 5){
      return true;
    }else{
      return false;
    }
  }

  render(){
    console.log("Render");
    return (
      <div className="App">
        <h1>Hello {this.state.name}</h1>
        {/* {
          this.state.counter <= 5?
            <h1>{this.state.counter}</h1>
          : null
        } */}
        <h1>{this.state.counter}</h1>
        <button onClick={()=>this.update_counter()}>Update counter</button>
      </div>  
    );
  }
}

export default App;
