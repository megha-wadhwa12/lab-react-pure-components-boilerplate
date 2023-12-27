import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {

    constructor(){
        super()
        this.state = {
            count: 0,
            toggle: true,
        }
    }

    changeToggle =()=>{
        this.setState({
            toggle: !this.state.toggle,
        })
    }

    increaseCount =()=>{
        if(this.state.toggle){
            this.setState({
                count: this.state.count +1
            })
        }else {
            this.setState({
                count: this.state.count
            })
        }
    }
  render() {
        console.warn("This is a simple component")
    return (
      <div>
        <hr />
        <h1>Simple Counter</h1>
        <h1>{this.state.count}</h1>
        <button onClick={this.changeToggle} style={{backgroundColor: `${this.state.toggle? "Green": "Red"}`}}>Toggle</button>
        &nbsp;
        &nbsp;
        <button onClick={this.increaseCount}>+</button>
        <hr />
      </div>


    )
  }
}
