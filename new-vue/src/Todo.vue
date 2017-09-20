<template >
  <div>
    {{ todo.value }} {{ ' ' }}
    <button @click.prevent="onDelete(todo.id)">
      [X]
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onDelete: {
      type: Function,
      default() {}
    },
    todo: {
      type: Object,
      default() {
        return {
          value: '',
          id: 0
        }
      }
    }
  }
}
</script>
