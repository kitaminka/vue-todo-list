<template>
  <header class="header">
		<h1>To-Do List</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50px;
	background-color: #dfedff;
	color: #002493;
}

@media (max-width: 900px) {
	.header {
		height: 40px;
	}
	.header h1 {
		font-size: 30px;
	}
}
</style>