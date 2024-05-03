import React, { Component } from 'react'
class PTD_Form3 extends Component {
    constructor(props){
        super(props);
        this.state={
            studentName:'Pham Thanh Dat',
            age:20,
            course:'RectJs'
        }
    }
    handleChange=(ev)=>{
        let name= ev.target.name;
        let val = ev.target.value;
        this.setState({
          [name]:val
        })
    }
    handleChange = (ev)=>{
      ev.preventDefault();
      alert(this.state.studentName +"\&" + this.state.age +"\&" + this.state.course)
      let obj ={
        studentName:'ReactJS',
        age:this.state.age,
        course: this.state.course
      }
      //gui du lieu len App
      this.props.onSubmit(obj)
    }
  render() {
    return (
      <div>
        <form name="ptdform">
        <div>
                <label> Ho va Ten </label>
                <input name='studentName' value={this.state.studentName}
                onChange={this.handleChange}/>
               
            </div>
            <div>
                <label> Tuoi </label>
                <input name='age' value={this.state.age}
               onChange={this.handleChange}/>
               
            </div>
            <div>
            <label> Khoa Hoc</label>
            <select value={this.state.khoahoc}name="course" onChange={this.handleChange}>
                <option value={'HTML'}> HTML</option>
                <option value={'CSS'}> CSS</option>
                <option value={'JS'}> JS</option>
                <option value={'RectJS'}> RectJS</option>
            </select>
            </div>
            <button onClick={this.handleSubmit}> Submit</button>
        </form>
      </div>
    )
  }
}
export default PTD_Form3;
