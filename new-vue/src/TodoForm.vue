<template >
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      :value="localTodo.value"
      @input.prevent="onLocalUpdate"/>
    <button>submit</button>
  </form>
</template>

<script>
export default {
  props: {
    onSubmit: {
      type: Function,
      default() {}
    },
    onLocalUpdate: {
      type: Function,
      default() {}
    },
    localTodo: {
      type: Object,
      default() {
        return {value: '', id: 0}
      }
    }
  }
}
</script>

<style lang="stylus">
</style>
