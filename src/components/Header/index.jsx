import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {
  forward = ()=>{
    this.props.history.goForward()
  }
  back = ()=>{
    this.props.history.goBack()
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
            <button onClick={this.forward}>forward</button>
            <button onClick={this.back}>back</button>
          </div>
        </div>
      </div>
    );
  }
}
// withRouter让这个普通组件也带有了路由组件的props
export default withRouter(Header);