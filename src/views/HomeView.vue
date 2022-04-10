<template>
  <nav class="nav">
    <h1 class="nav__header">TO-DO List</h1>
  </nav>
  <task-list/>
</template>

<script>
import TaskList from '@/components/TaskList';

export default {
  name: 'HomeView',
  components: {
    TaskList,
  }
}
</script>

<style scoped>
  .nav {

  }
  .nav__header {

  }
</style>