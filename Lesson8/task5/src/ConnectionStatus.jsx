class ConnectionStatus extends Component {
  
  state = {
    isOnline: true
  };

  componentDidMount() {
    window.addEventListener("online", this.onlineStatus);
    window.addEventListener("offline", this.offlineStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.onlineStatus);
    window.removeEventListener("offline", this.offlineStatus);
  }

  onlineStatus  = () => {
    this.setState({
      isOnline: true
    });
  };

  offlineStatus = () => {
    this.setState({
      isOnline: false
    });
  };

  render() {
    if (this.state.isOnline) {
      return <div className="status">online</div>;
    } else {
      return <div className="status status_offline">offline</div>;
    }
  }
}