import React, { Component } from 'react'

 class PTD_Form2  extends Component {
    constructor(props){
        super(props);
        this.state={
            khoahoc:"RectJS"
        }
    }
    // ham xu ly su kien 
    handleChange=(ev)=>{
        this.setState({
            khoahoc:ev.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.khoahoc)
    }
  render() {
    return (
      <div>
        <form>
            <label> Khoa Hoc</label>
            <select value={this.state.khoahoc}name="khoahoc" onChange={this.handleChange}>
                <option value={'HTML'}> HTML</option>
                <option value={'CSS'}> CSS</option>
                <option value={'JS'}> JS</option>
                <option value={'RectJS'}> RectJS</option>
            </select>
            <button onClick={this.handleSubmit}> Submit</button>
        </form>
      </div>
    )
  }
}
export default PTD_Form2;




