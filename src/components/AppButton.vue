<template>
	<button class="btn" :class="variant">
		<slot/>
	</button>
</template>

<script>
export default {
  name: 'AppButton',
	props: {
		variant: {
			type: String,
			default: 'default'
		}
	}
}
</script>

<style scoped>
.btn {
	background: none;
	border: 2px #002493 solid;
	border-radius: 5px;
	padding: 5px;
	transition: background-color 0.2s;
	color: #002493;
	font-size: 15px;
	font-family: "Libre Franklin", sans-serif;
	cursor: pointer;
}

.default:hover {
	background-color: rgba(0, 36, 147, 0.1);
}
.default:active {
	background-color: rgba(0, 36, 147, 0.3);
}
.success:hover {
	background-color: rgba(20, 147, 0, 0.1);
}
.success:active {
	background-color: rgba(20, 147, 0, 0.3);
}
.delete:hover {
	background-color: rgba(147, 0, 0, 0.10);
}
.delete:active {
	background-color: rgba(147, 0, 0, 0.30);
}
</style>