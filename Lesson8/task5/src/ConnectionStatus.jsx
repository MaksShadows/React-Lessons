import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);
    state = {
      isOnline: true
    };
  }

  componentDidMount() {
    window.addEventListener('online', this.onlineStatus);
    window.addEventListener('offline', this.offlineStatus);
  };

  componentWillMount() {
    window.removeEventListener('online', this.onlineStatus);
    window.removeEventListener('offline', this.offlineStatus);
  };

  onlineStatus = () => {
    this.setState({
       state: true
    });
}                                 

offlineStatus = () => {
    this.setState({
      state: false
    });
}

    render() {
      return (
        this.state.isOnline 
        ? <div className="status">online</div>
        : <div className="status status_offline">offline</div>

      )
    }
}

export default ConnectionStatus;
