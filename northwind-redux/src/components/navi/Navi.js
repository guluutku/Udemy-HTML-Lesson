import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from "react-router-dom";

import CartSummary from '../cart/CartSummary';

export default class Navi extends Component {



  render() {
    return (
      <div>
        <Navbar >
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to={"/saveproduct"}>reactstrap</Link>
            </NavItem>
            <CartSummary />
          </Nav>
        </Navbar>
      </div>
    );
  }

}
