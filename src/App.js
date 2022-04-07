import { Component } from 'react';
import InputFieldComponent from './components/input-field/inputField';
import ButtonComponent from './components/button-field/buttonField';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>To do list</h1>
     <FirstComponent />
     Email: <InputFieldComponent/>
     <br/>
     Password: <InputFieldComponent/>
     <br/>
     <ButtonComponent/>
    </div>
  );
}

class FirstComponent extends Component {
  render() {
    return (
      <div>Component</div>
    )
  }
}

// class InputFieldComponent extends Component{
//   render(){
//     return(
//       <input type="text"/>
//     )
//   }
// }


export default App;
