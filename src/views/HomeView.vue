<template>
	<control-panel />
  <task-list :tasks="sortedTasks"/>
</template>

<script>
import { mapGetters } from 'vuex';
import TaskList from '@/components/TaskList';
import ControlPanel from '@/components/ControlPanel';

export default {
  name: 'HomeView',
  components: {
		ControlPanel,
		TaskList
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