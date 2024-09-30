import React, { Component } from "react";
import Navi from "./Navi";
import Category from "./CategoryList";
import Product from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    currentCategory: ""
  };

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  };

  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List", currentCategory: this.state.currentCategory};

    return (
      <div >
        <Container>
          <Row>
            <Navi />
          </Row>

          <Row>
            <Col xs="3">
              <Category currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>

            <Col xs="9">
              <Product info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
