import React, {Component} from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  state = {todos: [
    {id: '001', name: 'eat', done: true},
    {id: '002', name: 'sleep', done: true},
    {id: '003', name: 'code', done: false},
    {id: '004', name: 'walk', done: true},
  ]}
  addTodo = (todoObj)=>{
    const {todos} = this.state
    const newTodos = [todoObj, ...todos]
    this.setState({todos: newTodos})
  }
  updTodo = (id, done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      if (todoObj.id === id) return {...todoObj, done}
      else return todoObj
    })
    this.setState({todos: newTodos})
  }
  delTodo = (id)=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return todoObj.id !== id
    })
    this.setState({todos: newTodos})
  }
  checkAllTodos = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj, done: done}
    })
    this.setState({todos: newTodos})
  }
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>!todoObj.done)
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List
              todos={this.state.todos}
              updTodo={this.updTodo}
              delTodo={this.delTodo}
            />
            <Footer
              todos={this.state.todos}
              checkAllTodos={this.checkAllTodos}
              clearAllDone={this.clearAllDone}
            />
          </div>
        </div>
      </div>
    )
  }
}
