import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';


import categoryAppReducer from '../reducers/category.js';
const store = createStore(categoryAppReducer);

import Dashboard from './Dashboard';
class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={Dashboard}/>
				</BrowserRouter>
			</Provider>
    )
  }
}

export default App
