<template>
 <div class="task-list">
   <task-info>Test task</task-info>
 </div>
</template>

<script>
import TaskInfo from '@/components/TaskInfo';

export default {
  name: 'TaskList',
  components: {
    TaskInfo,
  }
}
</script>

<style scoped>
.task-list {
  width: 50%;
}
</style>