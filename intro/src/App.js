import React from "react";
import Navi from "./Navi";
import Category from "./CategoryList";
import Product from "./ProductList";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div >
      <Container>
        <Row>
          <Navi></Navi>
        </Row>

        <Row>
          <Col xs="3">
            <Category></Category>
          </Col>

          <Col xs="9">
            <Product></Product>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
