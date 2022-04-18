<template>
  <div class="task-list">
		<transition-group name="task-list" v-if="tasks.length > 0">
			<task-list-item
					v-for="task in tasks"
					:task="task"
					:key="task.id"
			/>
		</transition-group>
		<h3 class="task-list__message" v-else>
			Your To-Do list is empty. Create first task!
		</h3>
  </div>
</template>

<script>
import TaskListItem from '@/components/TaskListItem';

export default {
  name: 'TaskList',
  components: {
    TaskListItem
  },
  props: {
    tasks: Array
  }
}
</script>

<style scoped>
.task-list {
	width: 100%;
	max-width: 1000px;
	margin-top: 20px;
}
.task-list__message {
	color: #002493;
	text-align: center;
}
.task-list-enter-active,
.task-list-leave-active {
	transition: all 0.5s ease;
}
.task-list-enter-from,
.task-list-leave-to {
	opacity: 0;
	transform: translateX(20px);
}
.task-list-move {
	transition: transform 0.5s ease;
}
</style>