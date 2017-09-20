import React from 'react'
import pt from 'prop-types'

export const TodoForm = (props) => (
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
)


TodoForm.defaultProps = {
  localTodo: {},
  onSubmit() {},
  onLocalUpdate() {}
}

TodoForm.propTypes = {
  localTodo: pt.shape({value: pt.string, id: pt.string}),
  onSubmit: pt.func,
  onLocalUpdate: pt.func
}
