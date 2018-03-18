import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import MerchantList from './scenes/MerchantList'
import MerchantItem from './scenes/MerchantItem'
import MerchantAddEdit from './scenes/MerchantAddEdit'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MerchantList} />
          <Route path="/view/:id" component={MerchantItem} />
          <Route path="/edit/:id" component={MerchantAddEdit} />
          <Route path="/add" component={MerchantAddEdit} />
        </div>
      </Router>
    );
  }
}

export default App;
