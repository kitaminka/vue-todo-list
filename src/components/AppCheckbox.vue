<template>
	<input type="checkbox" class="checkbox" :checked="modelValue" @click="updateCheckbox" />
</template>

<script>
export default {
	name: 'AppCheckbox',
	props: {
		modelValue: Boolean
	},
	methods: {
		updateCheckbox(event) {
			this.$emit('update:modelValue', event.target.checked);
		}
	}
}
</script>

<style scoped>

.checkbox {
	min-width: 30px;
	min-height: 30px;
	border: 2px #002493 solid;
	border-radius: 5px;
	user-select: none;
	appearance: none;
	cursor: pointer;
	background-position: center;
}
.checkbox:checked {
	background-image: url("/src/assets/complete.svg");
}
</style>