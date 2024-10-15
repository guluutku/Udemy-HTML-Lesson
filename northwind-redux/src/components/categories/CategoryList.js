import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ListGroup, ListGroupItem } from 'reactstrap';

import * as categoryActions from "../../redux/actions/categoryActions";

class CategoryList extends Component {

  componentDidMount() {
    this.props.actions.getCategories();
  }

  render() {
    return (
      <div>
        <h3>Categories {this.props.categories.length}</h3>
        <ListGroup>
          {
            this.props.categories.map((category) => (
              <ListGroupItem
                active={
                  category.categoryName === this.props.currentCategory ? true : false
                }
                onClick={() => this.props.changeCategory(category)}
                key={category.id}>{category.categoryName}
              </ListGroupItem>
            ))
          }
        </ListGroup>
        <h5>Seçili Kategori: {this.props.currentCategory.categoryName}</h5>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
