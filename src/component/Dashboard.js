'use strict';
import React from 'react';
import CategoryForm from './category-form.js';
import CategoryList from './category-list.js';
import ExpensesList from './expense-list.js';

class Dashboard extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {};
    console.log('9 hi')
  }

  
  render() {
    
    return <React.Fragment>
    <CategoryForm></CategoryForm>
    <CategoryList></CategoryList>
    <ExpensesList></ExpensesList>
    
    </React.Fragment>
  }
}

export default Dashboard;