<template>
  <task-list :tasks="sortedTasks"/>
	<app-input></app-input>
</template>

<script>
import {mapGetters} from 'vuex';
import TaskList from '@/components/TaskList';
import AppInput from '@/components/AppInput';

export default {
  name: 'HomeView',
  components: {
		AppInput,
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