<template>
	<app-input placeholder="Task description"></app-input>
	<app-button>Create</app-button>
</template>

<script>
import AppInput from '@/components/AppInput';
import AppButton from '@/components/AppButton';

export default {
	name: 'TaskForm',
	components: {
		AppButton,
		AppInput
	}
}
</script>

<style scoped>

</style>