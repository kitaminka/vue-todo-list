<template>
  <task-list
			:tasks="sortedTasks"
			@complete="completeTask"
	/>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
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
		...mapMutations({
			setTasks: 'setTasks',
		}),
		completeTask(task) {
			this.setTasks(this.tasks.map(t => t.id === task.id ? {...task, completed: true} : t));
		},
	},
}
</script>

<style scoped>

</style>