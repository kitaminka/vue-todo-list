<template>
  <button class="btn">
		<slot/>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
}
</script>

<style scoped>
.btn {
	margin: 5px;
	background: none;
	border: 2px #002493 solid;
	border-radius: 5px;
	padding: 5px;
	transition: background-color 0.2s;
	color: #002493;
}
.btn:hover {
	cursor: pointer;
	background-color: rgba(0, 36, 147, 0.1);
}
.btn:active {
	background-color: rgba(0, 36, 147, 0.3);
}
</style>