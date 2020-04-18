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
      isSpinner: true,
    });
    setTimeout(() => {
      this.setState({
         isLoggedIn: true,
          isSpinner: false
      })
  }, 2000)

    
  }

  handleLogOut= () => {
    this.setState({
        isLoggedIn: false,
    })
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
