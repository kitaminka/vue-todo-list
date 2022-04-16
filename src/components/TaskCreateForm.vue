<template>
	<form class="form" @submit.prevent>
		<h3 class="form__header">Create task</h3>
		<app-input class="form__input" v-model="task.description" placeholder="Task description" @focus="clearError"></app-input>
		<p v-if="error" class="form__error">{{error}}</p>
		<app-button type="submit" @click="createTask">Create</app-button>
	</form>
</template>

<script>
import AppInput from '@/components/AppInput';
import AppButton from '@/components/AppButton';

export default {
	name: 'TaskForm',
	components: {
		AppButton,
		AppInput
	},
	data() {
		return {
			task: {
				description: ''
			},
			error: ''
		}
	},
	methods: {
		createTask() {
			if (this.task.description !== '') {
				this.task.id = Date.now();
				this.$emit('createTask', this.task);
				this.task = {
					description: ''
				}
			} else {
				this.error = 'Task description must not be empty'
			}
		},
		clearError() {
			this.error = '';
		}
	}
}
</script>

<style scoped>
.form {
	width: 250px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	align-items: center;
}
.form__header {
	color: #002493;
}
.form__input {
	margin: 10px 0;
}
.form__error {
	color: red;
	margin-bottom: 10px;
}
</style>