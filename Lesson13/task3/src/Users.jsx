import React, { Component } from "react";
import User from "./User.jsx";
import { Route, Link, Switch } from "react-router-dom";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: "",
      name: "",
      location: "",
    };
  }

  fetchUserData = (userId) => {
    const baseUrl = `https://api.github.com/users/${userId}`;
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          avatar_url: data.avatar_url,
          name: data.name,
          location: data.location,
        })
      );
  };

  render() {
    return (
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link
              to={`${this.props.match.url}/github`}
              onClick={() => this.fetchUserData("github")}
            >
              Github
            </Link>
          </li>
          <li className="navigation__item">
            <Link
              to={`${this.props.match.url}/facebook`}
              onClick={() => this.fetchUserData("facebook")}
            >
              Facebook
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/users">
            <span>Select a user please</span>
          </Route>
          <Route path="/users/:userId">
            <User userData={this.state} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Users;
