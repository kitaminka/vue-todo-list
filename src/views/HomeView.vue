<template>
  <task-list
			:tasks="sortedTasks"
			@complete="completeTask"
	/>
</template>

<script>
import {mapState} from 'vuex';
import TaskList from '@/components/TaskList';

export default {
  name: 'HomeView',
  components: {
		TaskList
	},
  computed: {
    ...mapState({
      tasks: state => state.tasks
    }),
		sortedTasks() {
			return [...this.tasks].sort((task) => task.completed ? -1 : 1);
		}
  },
	methods: {
	},
}
</script>

<style scoped>

</style>