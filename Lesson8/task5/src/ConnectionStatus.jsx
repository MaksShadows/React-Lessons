import React, { Component } from "react";

class ConnectionStatus extends Component {
  
  state = {
    isOnline: true
  };

  componentDidMount() {
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.offlineStatus);
  };

  componentWillMount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.offlineStatus);
  };

  onlineStatus =() => {
    this.setState({
      isOnline: true
    })
  };

  offlineStatus =() =>{
    this.setState({
      isOnline: false
    })
  };
    render() {
      return (
        this.state.isOnline 
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>

      )
    }
}

export default ConnectionStatus;
