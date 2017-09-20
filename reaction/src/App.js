import React, { Component, PureComponent } from 'react';


class Todo extends PureComponent {
  render() {
    const props = this.props
    return (
      <div>
        <form onSubmit={
          (e) => {
            e.preventDefault()
            if (!props.localTodo.value) {
              return
            }
            props.onSubmit(props.localTodo)
          }
        }>
          <input
            type="text"
            onChange={(e) => props.onLocalUpdate({ value: e.target.value })}
            value={props.localTodo.value}
          />
          <button>Submit</button>
        </form>
        <div>
          <ul>
            {props.todos.map((todo, i) => {
                return (
                  <li key={todo.id}>
                    { todo.value }{ ' ' }
                    <button onClick={ (e) => {
                      e.preventDefault()
                      props.onDelete(todo.id)
                    }}>
                      [X]
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

Todo.defaultProps = {
  todos: [],
  localTodo: { value: '' },
  onDelete: () => {},
  onSubmit: () => {},
  onLocalUpdate: () => {}
};



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
      <div>
        <Todo
          localTodo={this.state.localTodo}
          onLocalUpdate={this.onLocalUpdate.bind(this)}
          onSubmit={this.onSubmit.bind(this)}
          onDelete={this.onDelete.bind(this)}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default Root;
