'use strict';


import React from 'react';
import { connect } from 'react-redux';
import CategoryItem from './categoryItem.js';
import { 
  categoryCreate,
  categoryUpdate,
  categoryDestroy

} from '../actions/category-actions.js';

class CategoryList extends React.Component {
  constructor(props){
    super(props);
    this.displayCats = this.displayCats.bind(this);
  
}

  render() {
    return <div>
      <h1>Category List</h1>
      <ul>{this.displayCats()}</ul>
      </div>
  }

  displayCats() {
    return this.props.categories.map(category => {
        return <CategoryItem key={category.id} id={category.id} budget={category.budget} name={category.name} timestamp={category.timestamp}
        category={category}
        categoryUpdate={this.props.categoryUpdate}  
        categoryDestroy={this.props.categoryDestroy}  
        ></CategoryItem> 
  
    })
  }

}
const mapStateToProps = state => ({
  categories: state.categories
});

//will need this for update later 
const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val)),
    categoryUpdate: val => dispatch(categoryUpdate(val)),
    categoryDestroy: id => dispatch(categoryDestroy(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
