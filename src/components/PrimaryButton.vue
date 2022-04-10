<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PrimaryButton',
  methods: {

  },
}
</script>

<style scoped>
.btn {
  padding: 3px 10px;
  background: none;
  color: #056e57;
  border: #056e57 2px solid;
  font-size: 20px;
  font-family: 'Righteous', cursive;
  border-radius: 6px;
  transition: all 0.2s;
}
.btn:hover {
  background-color: #c8f7c5;
}
</style>