<template>
 <div class="task-list">
   <task-item :task="task" :key="task.id" v-for="task in $props.tasks"/>
 </div>
</template>

<script>
import TaskItem from '@/components/TaskItem';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
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
  width: 70%;
}
</style>