<template >
  <div>
    <Todo
      v-for="todo in todos"
      :todo="todo"
      :onDelete="onDelete"
      :key="todo.id"
    />
  </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
  components: {
    Todo
  },
  props: {
    onDelete: {
      type: Function,
      default() {}
    },
    todos: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>
