import React from 'react';
import './App.css';
// import Header from './components/Header'
// import Footer from "./components/Footer"
// import BasicTextFields from "./components/textField"

// Function component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Hello world</h1>
//       </header>
//     </div>
//   );
// }

// class Header extends React.Component{
//   render(){
//     return(
//       <div className="header">
//         <h1 style={{color:"red", fontSize:"85px"}}>This is Header of the website</h1>
//       </div>
//     )
//   }
// }

// class Footer extends React.Component{
//   render(){
//     return(
//       <div className="footer">
//         <h1>This is the Footer of the website</h1>
//       </div>
//     )
//   }
// }

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      isShow: true,
    }
  }

  hide_and_show = () =>{
    // console.log("Hide and SHow");
    this.setState({
      isShow:!this.state.isShow,
    });
  }
  render() {
    // let user = "Sheri";
    // let todos = [{ text: "Eat" }, { text: "Sleep" }, { text: "Code" }];
    return (
      // <div className="body">
      //   <Header />
      //   <h1>Main component</h1>
      //   <h1>Hello world from {user} using Class Components</h1>
      //   <ul>
      //     {
      //       todos.map((item, index) => {
      //         return <li key={index}>{item.text}</li>
      //       })
      //     }
      //   </ul>
      //   <div className="row mb-2">
      //     <div className="col-md-2"></div>
      //     <div className="col-md-8 border border-muted p-2">
      //       <form > 
      //         <h1 className="text-center">Login Form</h1>
      //         <label>Username</label>
      //         <input type="text" className="form-control"></input><br></br>
      //         <label>Password</label>
      //         <input type="password" className="form-control"></input><br></br>
      //         <input type="button" className="btn btn-danger btn-block" value="Submit"></input>
      //       </form>
      //     </div>
      //     <div className="col-md-2"></div>
      //     <h1>This is Material UI textbox</h1>
      //     <BasicTextFields />
      //   </div>
      //   <Footer />
      // </div>
      <div>
        {
          this.state.isShow ?
            <h1>Hide and Show</h1>
          :null
        }

        <button onClick={ ()=>this.hide_and_show() } >Toggle Hide and Show</button>
      </div>

    )
  }
}

export default App;
