import React from 'react'
import pt from 'prop-types'

export const Todo = (props) => (
  <div>
    { props.todo.value }{ ' ' }
    <button onClick={ (e) => {
      e.preventDefault()
      props.onDelete(props.todo.id)
    }}>
      [X]
    </button>
  </div>
)

Todo.defaultProps = {
  todo: {},
  onDelete() {}
}

Todo.propTypes = {
  todo: pt.shape({value: pt.string, id: pt.string}),
  onDelete: pt.func
}
