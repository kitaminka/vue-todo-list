<template>
  <div class="list-item">
		<app-input
				class="list-item__input"
				v-if="editing"
				v-model="inputDescription"
				@focusout="editDescriptionInput"
				@keydown.enter="editDescriptionInput"
				placeholder="Task description"
		/>
		<div
				v-else class="list-item__description"
				:class="{completed: task.completed}"
		>
			{{task.description}}
		</div>
		<div class="list-item__control-btns">
			<app-button
					@click="toggleTaskStatus(task)"
					variant="success"
					class="control-btns__btn"
			>
				<img src="../assets/complete.svg" alt="Complete">
			</app-button>
			<app-button
					class="control-btns__btn"
					@click="this.editing = true"
			>
				<img src="../assets/edit.svg" alt="Edit">
			</app-button>
			<app-button
					variant="delete"
					class="control-btns__btn"
					@click="deleteTask(task)"
			>
				<img src="../assets/delete.svg" alt="Delete">
			</app-button>
		</div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions } from 'vuex';
import AppInput from '@/components/AppInput';

export default {
  name: 'TaskListItem',
	components: {
		AppInput,
		AppButton
	},
	data() {
		return {
			editing: false,
			inputDescription: this.task.description
		}
	},
  props: {
    task: {
      type: Object,
      required: true
    }
  },
	methods: {
		...mapActions({
			editTaskDescription: 'editTaskDescription',
			toggleTaskStatus: 'toggleTaskStatus',
			deleteTask: 'deleteTask'
		}),
		editDescriptionInput() {
			if (this.inputDescription.length > 0) {
				this.editTaskDescription({
					task: this.task,
					description: this.inputDescription
				});
			} else {
				this.inputDescription = this.task.description
			}
			this.editing = false;
		}
	}
}
</script>

<style scoped>
.list-item {
	margin: 5px 10px;
	border-radius: 5px;
	padding: 5px 10px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}
.list-item__input {
	width: 100%;
	font-size: 16px;
}
.list-item__description {
	color: #002493;
	text-align: left;
}
.completed {
	color: green;
}
.list-item__control-btns{
	width: 10%;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}
.control-btns__btn {
	margin: 5px;
}

@media (max-width: 900px) {
	.list-item {
		margin: 20px 10px;
		flex-direction: column;
	}
}
</style>