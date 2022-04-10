<template>
  <div class="control-panel">
    <primary-button>Create task</primary-button>
    <primary-button>Find task</primary-button>
    <primary-button>Select tasks</primary-button>
  </div>
</template>

<script>
import PrimaryButton from '@/components/PrimaryButton';

export default {
  name: 'ControlPanel',
  components: {
    PrimaryButton,
  }
}
</script>

<style scoped>
.control-panel {
  width: 400px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
}
</style>