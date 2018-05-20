

'use strict';

import React from 'react';
import uuidv4 from 'uuid/v4';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate
} from '../actions/category-actions.js';

class CategoryForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      budget: 0,
      id: uuidv4(),
      timestamp: null,
      isUpdating: false

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value,
      [e.target.budget] : e.target.value
    })
    console.log('24 this is the state',this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.categoryCreate(this.state);

  }



  render(){
    return <form onSubmit={this.handleSubmit}>

      <input name='name' onChange={this.handleChange} placeholder='name'></input>
      <input name='budget' onChange={this.handleChange} placeholder='budget' type='number'></input>
     
      <button>create</button>
      </form>  
    
  }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: val => dispatch(categoryCreate(val))
  }
}

export default connect(null, mapDispatchToProps)(CategoryForm);