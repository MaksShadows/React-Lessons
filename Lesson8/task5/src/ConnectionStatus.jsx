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
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.offlineStatus);
  };

  onlineStatus(){
    this.setState({
      state: true
    })
  };

  offlineStatus(){
    this.setState({
      state: false
    })
  };
    render() {
      return (
        this.state.state 
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>

      )
    }
}

export default ConnectionStatus;
