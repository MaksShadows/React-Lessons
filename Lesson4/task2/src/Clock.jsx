import React, { Component } from 'react';
import './clock.scss';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};

class Clock extends Component{

  constructor(props) {
    super(props);
      this.state = {
        time = getTimeWithOffset(this.props.offset)
      };

      setInterval(() => {
        this.state({
          time: getTimeWithOffset(props.offset)
        });
      }, 1000);
    
  }

  render() {
    return (
      <>
        <div className="clock">
        <p className="clock__location">{this.props.location}</p>
        <p className="clock__time">{this.state.time}</p>
      </div>
      </>
    )
  }
};

export default Clock;
