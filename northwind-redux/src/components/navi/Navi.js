import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';

import CartSummary from '../cart/CartSummary';

export default class Navi extends Component {

  

  render() {
    return (
      <div>
        <Navbar >
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="me-auto" navbar>
            <CartSummary />
          </Nav>
        </Navbar>
      </div>
    );
  }

}
