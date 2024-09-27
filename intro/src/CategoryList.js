import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiment" }
      ]
    };
  }

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            this.state.categories.map((category) => (
              <ListGroupItem>{category.categoryName}</ListGroupItem>
            ))
          }
        </ListGroup>
      </div>
    )
  }
}
