import React, { Component } from "react";
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';



class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
          firstName: "John",
          lastName: "Doe"
      }
  };

  handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
          ...this.state,
          [name]: value
      });
  };

  render() {
      const { userData } = this.state
      return (
          <div className="page">
              <h1 className="title">Hello, {userData.firstName} {userData.lastName}</h1>
              <main className="content">
                  <ShoppingCart userName={userData.firstName} />
                  <Profile userData={this.state} handleChange={this.handleChange} />
              </main>
          </div>
      );
  }
}

export default App;
