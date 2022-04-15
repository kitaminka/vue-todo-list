<template>
  <div class="task-list">
		<transition-group name="task-list">
			<task-list-item
					v-for="task in tasks"
					:task="task"
					:key="task.id"
			/>
		</transition-group>
  </div>
</template>

<script>
import TaskListItem from '@/components/TaskListItem';

export default {
  name: 'TaskList',
  components: {
    TaskListItem,
  },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.task-list {
	width: 100%;
	max-width: 1000px;
	margin-top: 10px;
}
.task-list-move {
	transition: transform 0.4s ease;
}
</style>