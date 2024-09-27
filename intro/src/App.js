import React from "react";
import Navi from "./Navi";
import Category from "./CategoryList";
import Product from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  /*
  let titleProduct = "Product List";
  let titleCategory = "Category List";
  */

  // Encapsulation
  let categoryInfo = { title: "Category List" };
  let productInfo = { title: "Product List" };
  
  return (
    <div >
      <Container>
        <Row>
          <Navi />
        </Row>

        <Row>
          <Col xs="3">
            <Category info={categoryInfo} />
          </Col>

          <Col xs="9">
            <Product info={productInfo} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
