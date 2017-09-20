import React from 'react'
import pt from 'prop-types'
import { Todo } from './Todo'

export const TodoList = (props) => (
  <div>
    {props.todos.map(todo => (
      <Todo todo={todo} onDelete={props.onDelete} key={todo.id}/>
    ))}
  </div>
)

TodoList.propTypes = {
  todos: pt.arrayOf(
    pt.shape({value: pt.string, id: pt.string})
  ).isRequired,
  onDelete: pt.func
}

TodoList.defaultProps = {
  todos: [],
  onDelete() {}
}
