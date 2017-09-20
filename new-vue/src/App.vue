<template>
  <div class="todo-app">
    <h1>VUE</h1>
    <TodoForm
      :localTodo="localTodo"
      :onLocalUpdate="onLocalUpdate"
      :onSubmit="onSubmit"
    />
    <TodoList
      :todos="todos"
      :onDelete="onDelete"
    />
  </div>
</template>

<script>
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

export default {
  components: {
    TodoForm,
    TodoList
  },
  methods: {
    onLocalUpdate(e) {
      this.localTodo.value = e.target.value
    },
    onSubmit() {
      const id = this.todos.length

      this.todos.push({id, value: this.localTodo.value})
      this.localTodo = {value: '', id: ''}
    },
    onDelete(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  },
  data() {
    return {
      todos: [],
      localTodo: {
        value: '',
        id: 0
      }
    }
  }
}
</script>

<style lang="stylus">
  html
    font-family: Lato
    box-sizing: border-box
    padding: 3rem 10rem
</style>
