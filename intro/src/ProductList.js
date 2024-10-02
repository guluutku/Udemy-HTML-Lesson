import React, { Component } from 'react';
import { Table } from 'reactstrap';


export default class Product extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                ProductName
              </th>
              <th>
                UnitPrice
              </th>
              <th>
                Quantity
              </th>
              <th>
                Stock
              </th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">
                    {product.id}
                  </th>
                  <td>
                    {product.productName}
                  </td>
                  <td>
                    {product.unitPrice}
                  </td>
                  <td>
                    {product.quantityPerUnit}
                  </td>
                  <td>
                    {product.unitsInStock}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    )
  }
}
