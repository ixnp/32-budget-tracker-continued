'use strict';
import React from 'react';
import CategoryForm from './category-form.js';
import CategoryList from './category-list.js';

export default class ExpensesList extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      timestampsTest: [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        
      ]
    }
    this.addTimestamp = this.addTimestamp.bind(this);
  }

  addTimestamp() {
    let state = {timestampsTest: [...this.state.timestampsTest, Date.now()]}
    this.setState(state);
  }
  
  render() { 
    return <React.Fragment>
      <h1>Timestamps</h1>
      <button onClick={this.addTimestamp}>Add Expense</button>
      {this.state.timestampsTest.map(timestamp => {
     return <div>{timestamp.toString()}</div>
      })}
    </React.Fragment>
  }
}

