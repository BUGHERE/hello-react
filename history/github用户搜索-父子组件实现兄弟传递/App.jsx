import React, {Component} from 'react';
import Search from './components/Search'
import List from './components/List'

export default class App extends Component {

  state = {
    users: [],
    isFirst: true,  // open page at first time
    isLoading: false,
    err: ''  // error message
  }

  updAppState = (stateObj)=> {
    this.setState(stateObj)
  }

  render() {
    return (
      <div className="container">
        <Search updAppState={this.updAppState}/>
        <List {...this.state}/>
      </div>
    );
  }
}

