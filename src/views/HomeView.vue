<template>
	<control-panel @showDialog="this.createTaskDialogShow = true"/>
  <task-list :tasks="sortedTasks"/>
	<app-dialog v-model:show="createTaskDialogShow">
		<task-create-form @createTask="createTaskForm"/>
	</app-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TaskList from '@/components/TaskList';
import AppDialog from '@/components/AppDialog';
import TaskCreateForm from '@/components/TaskCreateForm';
import ControlPanel from '@/components/ControlPanel';

export default {
  name: 'HomeView',
  components: {
		ControlPanel,
		AppDialog,
		TaskList,
		TaskCreateForm
	},
	data() {
		return {
			createTaskDialogShow: false,
		}
	},
	methods: {
		...mapActions({
			createTask: 'createTask'
		}),
		createTaskForm(task) {
			this.createTask(task);
			this.createTaskDialogShow = false;
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