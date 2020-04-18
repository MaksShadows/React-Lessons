import React, { Component } from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

class Auth extends Component {

  constructor(proms) {
    super(proms);
    this.state ={
      isLoggedIn: false,
      isSpinner: false
    }
  }

   handleLogIn = () => {
    this.setState({
        isLoggedIn: true,
    });
    this.showSpinner();

  }

  handleLogOut= () => {
    this.setState({
        isLoggedIn: false,
    })
  }
  showSpinner = () => {
    this.setState({
        isSpinner: true,
    });

    setTimeout(() => {
        this.setState({
            isSpinner:false,
        });
    }, 2000)
}

  render() {
    let button = (!this.state.isLoggedIn) ?
    <Login onLogin={this.handleLogIn} /> :
    <Logout onLogout={this.handleLogOut} />

    return (
      <div>
         {this.state.isSpinner ? 
         <Spinner size={30} /> : button}
      </div>
    )
  }
};


export default Auth;
