<template>
	<div class="dialog">
		<div class="dialog__content">
			<div class="dialog__close">
				<img src="../assets/close.svg" alt="Close">
			</div>
			<slot />
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppDialog',
	components: {

	}
}
</script>

<style scoped>
.dialog {
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	position: absolute;
	display: flex;
}
.dialog__content {
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 50px;
	background-color: #eeffff;
	border: 2px #002493 solid;
	border-radius: 5px;
}
.dialog__close {
	position: fixed;
	border: none;
	cursor: pointer;
}
</style>