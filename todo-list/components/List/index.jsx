import React, {Component} from 'react';
import Item from '../Item'
import PropTypes from "prop-types";
import './index.css'

export default class List extends Component {

  static propTypes = {
    todos: PropTypes.array.isRequired,
    updTodo: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
  }

  render() {
    const {todos, updTodo, delTodo} = this.props
    return (
      <div>
        <ul className="todo-main">
          {
            todos.map(todo => {
              return <Item
                key={todo.id}
                {...todo}
                updTodo={updTodo}
                delTodo={delTodo}
              />
            })
          }
        </ul>
      </div>
    );
  }
}