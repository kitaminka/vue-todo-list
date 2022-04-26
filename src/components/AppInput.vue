<template>
	<input
			class="input"
			@input="updateInput"
			:value="modelValue"
			type="text"
	>
</template>

<script>
export default {
	name: 'AppInput',
	props: {
		modelValue: String
	},
	methods: {
		updateInput(event) {
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style scoped>
.input {
	background: none;
	border: 2px #002493 solid;
	border-radius: 5px;
	padding: 5px;
	transition: background-color 0.2s;
	font-size: 15px;
	font-family: "Libre Franklin", sans-serif;
	color: #002493;
	outline: none;

}
.input:focus {
	background-color: rgba(0, 36, 147, 0.1);
}
</style>