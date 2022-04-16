<template>
	<div class="dialog" v-if="show">
		<div class="dialog__window">
			<div class="window__close" @click="hideDialog">
				<img src="../assets/close.svg" alt="Close">
			</div>
			<div class="window__content">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'AppDialog',
	props: {
		show: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		hideDialog() {
			this.$emit('update:show', false)
		}
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
	background: rgba(0, 0, 0, 0.3);
	display: flex;
}
.dialog__window {
	margin: auto;
	display: flex;
	flex-direction: column;
	padding: 10px 20px;
	background-color: #eeffff;
	border: 2px #002493 solid;
	border-radius: 5px;
}
.window__close {
	border: none;
	align-self: flex-end;
	cursor: pointer;
	margin-bottom: 10px;
}
.window__content {
	margin-bottom: 10px;
}
</style>