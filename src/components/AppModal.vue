<template>
	<div class="modal">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'AppModal'
}
</script>

<style scoped>
.modal {
	position: absolute;
	top: 50%;
	left: 50%;
	background-color: #eeffff;
	border: 2px #002493 solid;
	border-radius: 5px;
}
</style>