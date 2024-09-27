import React, { Component } from 'react'
import { ListGroupItem, ListGroup } from 'reactstrap'

export default class Category extends Component {
  /* New versions do not need constructors for "<h3>{this.props.title}</h3>"
  constructor(props) {
    super(props);
    state: { }
  }
  */

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          <ListGroupItem>Item 1</ListGroupItem>
          <ListGroupItem>Item 2</ListGroupItem>
          <ListGroupItem>Item 3</ListGroupItem>
          <ListGroupItem>Item 4</ListGroupItem>
          <ListGroupItem>Item 5</ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}
