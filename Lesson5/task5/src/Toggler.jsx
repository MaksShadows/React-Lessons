
import React, { Component } from 'react';

class Toggler extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isToggle: false
        }
    }

    switchClick = () =>{
      this.setState({
        isToggle: !this.state.isToggle
      })
    }

    render() {
        return (
            <button className="toggler"
            onClick={this.switchClick}>
              {this.state.isToggle ? "On": "Off"}
            </button>
        )
    }
}
export default Toggler;
