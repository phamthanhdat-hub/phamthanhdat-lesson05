import React, { Component } from 'react'

class PTD_Form1 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:"Pham Thanh Dat"
        }
    }
    // ha, xu lys su kien
    handleChange = (ev)=>{
    // lay gia tri khi thay doi form
    let ten = ev.target.name;
    let gtri = ev.target.value;
    // cap nhat state
    this. setState({
        [ten]:gtri
        //studentName:ev.target.value
    })
}
handleSubmit =(ev)=>{
    ev.preventDefault();
    //lay gia tri moi trong state
    alert(this.state.studentName)
}
  render() {
    return (
      <div>
           <form on onSubmit={this.handleSubmit}>
            <div>
                <label> Ho va Ten </label>
                <input name='studentName' value={this.state.studentName}
                onChange={this.handleChange}/>
               
            </div>
            <button>Submit</button>
           
           </form>
           </div>
    );
  }
}
export default PTD_Form1;
