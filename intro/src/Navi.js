import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarText,
} from 'reactstrap';
import CartSummary from './CartSummary';

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

          <NavbarText>Simple Text</NavbarText>
        </Navbar>
      </div>
    );
  };
}
