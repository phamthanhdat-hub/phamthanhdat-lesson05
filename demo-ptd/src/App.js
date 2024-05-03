import React, { Component } from 'react';
import PTD_Form1 from './components/PTD_Form1';
import PTD_Form2 from './components/PTD_Form2'; 
import PTD_Form3 from './components/PTD_Form3'; 

class App extends Component {
  handleSubmit = (param)=>{
 console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event - Form - Controlled Component - Pham Thanh Dat</h1>
        <div>
          <PTD_Form1/>
          <PTD_Form2/> 
          <PTD_Form3 onSubmit={this.handleSubmit}/> 
        </div>
      </div>
    );
  }
}

export default App;