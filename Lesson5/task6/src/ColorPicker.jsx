import React, { Component } from 'react';

const CORAL = 'Coral';
const AQUA = 'Aqua';
const BISQUE = 'Bisque';

class ColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: ""
        }
    }
    hoverColor = (color) => {
        this.setState({
            color: color
        })
    }

    reset = () => {
        this.setState({
          color: ""
        })
    }
    render() {
        return (
            <div>
                <div className="picker__title">{this.state.currentColor}</div>
                <button className="picker__button picker__button_coral"
                    onMouseEnter={this.hoverColor.bind(this, CORAL)}
                    onMouseLeave={this.reset}
                ></button>
                <button className="picker__button picker__button_aqua"
                    onMouseEnter={this.hoverColor.bind(this, AQUA)}
                    onMouseLeave={this.reset}></button>
                <button className="picker__button picker__button_bisque"
                    onMouseEnter={this.hoverColor.bind(this, BISQUE)}
                    onMouseLeave={this.reset}
                ></button>
            </div>
        )
    }
}
export default ColorPicker;