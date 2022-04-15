<template>
  <task-list
			:tasks="sortedTasks"
	/>
</template>

<script>
import {mapGetters} from 'vuex';
import TaskList from '@/components/TaskList';

export default {
  name: 'HomeView',
  components: {
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