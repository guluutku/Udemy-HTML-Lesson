import React, { Component } from "react";
import Navi from "./Navi";
import Category from "./CategoryList";
import Product from "./ProductList";
import { Container, Row, Col } from "reactstrap";

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
    // var addedItem = newCart.find(c => c.id === product.id);
    newCart.push({ product: product, quantity: 1 });
    this.setState({ cart: newCart });
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = {
      title: "Product List",
      currentCategory: this.state.currentCategory
    };

    return (
      <div >
        <Container>
          <Navi cart={this.state.cart} />

          <Row>
            <Col xs="3">
              <Category
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              />
            </Col>

            <Col xs="9">
              <Product
                addToCart={this.addToCart}
                info={productInfo}
                products={this.state.products}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
