import React, { Component } from 'react';
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

class Root extends Component {
  constructor(props) {
    super(props)
    this.state = {
      localTodo: { value: '' },
      todos: []
    }
  }

  onLocalUpdate(newTodo) {
    this.setState({
      ...this.state,
      localTodo: { ...newTodo }
    })
  }

  onSubmit(newTodo) {
    const currentTodos = this.state.todos
    const id = currentTodos.length;
    const newState = {
      ...this.state,
      localTodo: { value: '' },
      todos: [
        ...currentTodos,
        { id, ...newTodo }
      ]
    }
    this.setState(newState)
  }

  onDelete(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id)
    this.setState({ ...this.state, todos })
  }

  render() {
    return (
      <div className="todo-app">
        <h1>REACT</h1>
        <TodoForm
          localTodo={this.state.localTodo}
          onSubmit={this.onSubmit.bind(this)}
          onLocalUpdate={this.onLocalUpdate.bind(this)}
        />
        <TodoList
          todos={this.state.todos}
          onDelete={this.onDelete.bind(this)}
        />
      </div>
    );
  }
}

export default Root
