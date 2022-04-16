<template>
	<control-panel @showDialog="showDialog"/>
  <task-list :tasks="sortedTasks"/>
	<app-dialog v-model:show="dialogShow">
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
			dialogShow : false,
		}
	},
	methods: {
		...mapActions({
			createTask: 'createTask'
		}),
		showDialog() {
			this.dialogShow = true;
		},
		hideDialog() {
			this.dialogShow = false;
		},
		createTaskForm(task) {
			this.createTask(task);
			this.hideDialog();
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