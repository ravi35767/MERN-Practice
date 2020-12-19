import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      alphabets: ['A','B','C'],
      value:'',
    }
  }

  handleChange = (e) => {
    this.setState({
      value:e.target.value,
    });
  }

  addTask = () => {
    this.setState({
      alphabets: [...this.state.alphabets, this.state.value],
      value:'',
    })
    console.log(this.state.value);
  }

  render() {
    return (
      <div>
        <input value={this.state.value} type="text" onChange={this.handleChange} />
        <input type="button" value="Add Task" onClick={this.addTask} />
        <ul>
          {
            this.state.alphabets.map((value,index)=>{
              return(
              <li key={index}>{value}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
