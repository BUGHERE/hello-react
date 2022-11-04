import React, {Component} from 'react';
import './index.css'

export default class Footer extends Component {
  render() {
    const {todos} = this.props
    const total = todos.length
    const doneCount = todos.reduce(
      (pre, cur)=>{return pre + (cur.done ? 1 : 0)}, 0)
    return (
      <div>
        <div className="todo-footer">
          <label>
            <input
              type="checkbox" checked={doneCount === total && total !== 0}
              onChange={this.handleCheckAll}
            />
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{total}
          </span>
          <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
        </div>
      </div>
    );
  }

  handleCheckAll = (event)=>{
    this.props.checkAllTodos(event.target.checked)
  }

  handleClearAllDone = ()=>{
    this.props.clearAllDone()
  }
}