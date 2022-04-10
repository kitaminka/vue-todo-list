<template>
  <nav-menu/>
  <task-list :tasks="tasks"/>
</template>

<script>
import TaskList from '@/components/TaskList';
import NavMenu from '@/components/NavMenu';
import {mapState} from 'vuex';

export default {
  name: 'HomeView',
  components: {
    NavMenu,
    TaskList,
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks
    })
  }
}
</script>

<style scoped>

</style>