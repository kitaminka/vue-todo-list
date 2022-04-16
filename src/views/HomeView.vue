<template>

  <task-list :tasks="sortedTasks"/>
	<app-dialog v-model:show="dialogShow">
		<task-form @createTask="createTaskForm"/>
	</app-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskList from '@/components/TaskList';
import AppDialog from '@/components/AppDialog';
import TaskForm from '@/components/TaskForm';

export default {
  name: 'HomeView',
  components: {
		AppDialog,
		TaskList,
		TaskForm
	},
	data() {
		return {
			dialogShow : true,
		}
	},
	methods: {
		...mapActions({
			createTask: 'createTask'
		}),
		createTaskForm(task) {
			this.createTask(task);
			this.dialogShow = false;
		}
	},
  computed: {
    ...mapGetters({
			sortedTasks: 'getSortedTasks'
		})
  }
}
</script>

<style scoped>

</style>