<template>
  <div class="task">
    <p class="task__description">
      {{$props.task.description}}
    </p>
    <div class="task__btns">
      <primary-button>Edit</primary-button>
      <primary-button>Delete</primary-button>
    </div>
  </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';

export default {
  name: 'TaskItem',
  components: {
    PrimaryButton
  },
  props: {
    task: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.task {
  font-family: 'Libre Franklin', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  text-align: left;
  padding: 10px 20px;
  border-radius: 5px;
  border: #056e57 2px solid;
  margin-top: 15px;
}
.task__description {
  color: #056e57;
  font-size: 20px;
  width: 80%;
}
.task__btns {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 180px;
  height: 100px;
}
@media (max-width: 900px) {
  .task__btns {
    flex-direction: column;
  }
}
</style>