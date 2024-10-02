import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'

export default class Category extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "Beverages" },
      { categoryId: 2, categoryName: "Condiment" }
    ]
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(res => res.json())
      .then(data => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {
            this.state.categories.map((category) => (
              <ListGroupItem
                active={
                  category.categoryName === this.props.currentCategory?true:false
                }
                onClick={() => this.props.changeCategory(category)}
                key={category.id}>{category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    )
  }
}
