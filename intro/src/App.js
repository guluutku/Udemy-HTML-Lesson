import React, { Component } from "react";

import Navi from "./Navi";
import Category from "./CategoryList";
import Product from "./ProductList";
import NotFound from "./NotFound";
import CartList from "./CartList";

import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
    this.getProducts(category.id);
  };

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(res => res.json())
      .then(data => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });

    alertify.success(product.productName + " added to cart", 2);
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart", 2);
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = {
      title: "Product List",
    };

    return (
      <div >
        <Container>
          <Navi
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
          />

          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <Routes>
                <Route
                  exact
                  path="/"
                  element={
                    <Product
                      addToCart={this.addToCart}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                      products={this.state.products}
                    />
                  }
                />

                <Route
                  exact
                  path="/cart"
                  element={
                    <CartList
                      {...this.props}
                      removeFromCart={this.removeFromCart}
                      cart={this.state.cart}
                    />
                  }
                />

                <Route element={<NotFound />} />
              </Routes>


            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}
