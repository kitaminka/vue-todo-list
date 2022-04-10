<template>
  <div class="task">
    <h3 class="task__description">
      <slot/>
    </h3>
    <div class="task__btns">
      <primary-button>Btn</primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';

export default {
  name: 'TaskInfo',
  components: {
    PrimaryButton
  },
}
</script>

<style scoped>
.task {
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  border: #056e57 2px solid;
  padding: 10px;
  background-color: #1abc9c;
}
.task__description {
  color: #056e57;
  font-size: 25px;
}
</style>