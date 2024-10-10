import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {

  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand href="/">Northwind App</NavbarBrand>

          <Nav className="me-auto" navbar>
            <CartSummary
              cart={this.props.cart}
              removeFromCart={this.props.removeFromCart}
            />
          </Nav>

          <NavItem>
            <Link to="/form1">Form1 Demo</Link>
          </NavItem>

          <NavItem>
            <Link to="/form2">Form2 Demo</Link>
          </NavItem>
        </Navbar>
      </div>
    );
  };
}
