import React, {Component} from 'react';
import './index.css'

export default class Item extends Component {

  state = {mouse: false}

  handleMouse = (flag)=>{
    return ()=>{
      this.setState({mouse: flag})
    }
  }

  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <div>
        <li
          onMouseEnter={this.handleMouse(true)}
          onMouseLeave={this.handleMouse(false)}
          style={{backgroundColor: mouse ? '#ddd' : 'white'}}
        >
          <label>
            <input
              type="checkbox" defaultChecked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{display: mouse? 'block' : 'none'}}
            onClick={()=>{this.handleDelete(id)}}
          >删除</button>
        </li>
      </div>
    );
  }

  handleCheck = (id)=>{
    return (event)=>{
      const {checked} = event.target
      this.props.updTodo(id, checked)
    }
  }

  handleDelete = (id)=>{
    this.props.delTodo(id)
  }
}