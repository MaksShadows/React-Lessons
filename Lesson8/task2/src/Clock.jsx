import React, { Component } from "react";


const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      date: getTimeWithOffset(props.offset).toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState({
        date: getTimeWithOffset(this.props.offset).toLocaleTimeString()
      });
    }, 1000);
  }

  componentWillUnmount () {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
