import React, {Component} from 'react';
import axios from "axios";

class App extends Component {
  getStudentData = ()=>{
    axios.get('http://localhost:3000/students').then(
      response => {console.log('success', response.data);},
      error => {console.log('fail', error)}
    )
  }

  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>get student data</button>
      </div>
    );
  }
}

export default App;