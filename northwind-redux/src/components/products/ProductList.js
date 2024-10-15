import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Badge, Table } from 'reactstrap';

import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {

  componentDidMount() {
    this.props.actions.getProducts();
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h3>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price </th>
              <th>Quantity Per Unit</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope='row'>{product.id}</th>
                  <td>{product.productName}</td>
                  <td>{product.unitPrice}</td>
                  <td>{product.quantityPerUnit}</td>
                  <td>{product.unitsInStock}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
