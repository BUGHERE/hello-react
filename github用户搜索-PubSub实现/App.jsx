import React, {Component} from 'react';
import Search from './pages/Search'
import List from './pages/List'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}

