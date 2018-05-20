'use strict';

import React from 'react';
import {
  categoryCreate,
  categoryUpdate
} from '../actions/category-actions.js';

import CategoryForm from './category-form.js';

class CategoryItem extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isUpdating: false
    }
    this.toogleUpdate = this.toogleUpdate.bind(this);
  }

    toogleUpdate(e, id) {
     return this.setState({isUpdating: !this.state.isUpdating});
    }

     saveUpdate(e, id){
    }

    handleDelete(e, id){
      e.preventDefault();
      this.props.categoryDestroy(id);      
    }

  list() {
    if (this.state.isUpdating) {
      console.log('38 click update', this.state.isUpdating);
      return<li>  
      <CategoryForm categoryUpdate={this.props.categoryUpdate} isUpdating={true} categoryId={this.props.id} />
      <button onClick={(e)=>this.toogleUpdate(e, this.props.id)}>Cancle</button> 
      </li>
    }else {
    console.log('26  items', this.props);
      return <li key={this.props.category.id}>{this.props.category.name} : ${this.props.category.budget}  
      <button onClick={(e)=>this.toogleUpdate(e, this.props.category.id)}>Update</button> 
      <button onClick={(e)=>this.handleDelete(e, this.props.category.id)}>Delete</button>
      </li>
      // return <categoryItem id={item.id} budget={item.budget} name={item.name} timestamp={item.timestamp}  isUpdating={item.}
      // key={index} index={index} 
      // removeItem={this.props.removeItem}  
    }
  }

  render(){
    return <div>
        <ul>
          {this.list()}

        </ul>
    </div>
  }
}

//will need this for update later 
// const mapDispatchToProps = (dispatch, getState) => {
//   return {
//     categoryUpdate: val => dispatch(categoryUpdate(val)),
//     categoryDestroy: id => dispatch(categoryDestroy(id))
//   }
// }

// export default connect(mapDispatchToProps, null)(categoryItem);
export default CategoryItem;