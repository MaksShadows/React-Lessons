import React from "react";
import Product from "./Product.jsx";
import { Route, Link, Switch } from "react-router-dom";

const Products = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/products">
          <span>Select a product please</span>
        </Route>
        <Route path="/products/:productId" component={Product} />
      </Switch>
    </div>
  );
};

export default Products;
