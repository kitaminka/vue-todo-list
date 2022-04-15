<template>
  <task-list :tasks="sortedTasks"/>
	<app-dialog>
		<task-form />
	</app-dialog>
</template>

<script>
import {mapGetters} from 'vuex';
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
  computed: {
    ...mapGetters({
			sortedTasks: 'getSortedTasks'
		})
  }
}
</script>

<style scoped>

</style>