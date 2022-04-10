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
  border-radius: 5px;
  transition: box-shadow 0.1s, background-color 0.2s;
  font-family: 'Libre Franklin', sans-serif;
  box-shadow: 3px 3px 3px rgba(5, 110, 87, .5);
}
.btn:hover {
  background-color: rgba(5, 110, 87, .1);
}
.btn:active {
  box-shadow: 1px 1px 1px rgba(5, 110, 87, .5);
}
</style>