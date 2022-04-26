<template>
  <div class="list-item">
		<app-checkbox
				class="list-item__checkbox"
				v-model="taskCompleted"
		/>
		<app-input
				ref="editInput"
				class="list-item__input"
				v-if="editableTask === task.id"
				v-model="inputDescription"
				@keydown.enter="toggleEditing"
				placeholder="Task description"
		/>
		<div
				v-else
				class="list-item__description"
				:class="{completed: taskCompleted}"
		>
			{{task.description}}
		</div>
		<div class="list-item__control-btns">
			<app-button
					class="control-btns__btn"
					@click="toggleEditing"
			>
				<img src="../assets/edit.svg" alt="Edit">
			</app-button>
			<app-button
					variant="delete"
					class="control-btns__btn"
					@click="deleteTaskButton"
			>
				<img src="../assets/delete.svg" alt="Delete">
			</app-button>
		</div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';
import { mapActions, mapGetters } from 'vuex';
import { nextTick } from 'vue';
import AppInput from '@/components/AppInput';
import AppCheckbox from '@/components/AppCheckbox';

export default {
  name: 'TaskListItem',
	components: {
		AppCheckbox,
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
    task: Object
  },
	computed: {
		...mapGetters({
			editableTask: 'getEditableTask'
		}),
		taskCompleted: {
			get() {
				return this.task.completed;
			},
			set(newValue) {
				this.setTaskStatus({
					task: this.task,
					completed: newValue
				});
			}
		}
	},
	watch: {
		inputDescription(newInputDescription) {
			if (newInputDescription.length > 0) {
				this.setTaskDescription({
					task: this.task,
					description: this.inputDescription
				});
			}
		}
	},
	methods: {
		...mapActions({
			setTaskDescription: 'setTaskDescription',
			setTaskStatus: 'setTaskStatus',
			deleteTask: 'deleteTask',
			setEditableTask: 'setEditableTask',
			clearEditableTask: 'clearEditableTask'
		}),
		toggleEditing() {
			if (this.editableTask === this.task.id) {
				this.clearEditableTask();
			} else {
				this.inputDescription = this.task.description;
				this.setEditableTask(this.task.id);
				nextTick(() => {
					this.$refs.editInput.$el.focus();
				});
			}
		},
		deleteTaskButton() {
			this.clearEditableTask();
			this.deleteTask(this.task);
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
.list-item__checkbox {
	margin: 5px;
}
.list-item__input {
	width: 80%;
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
	width: 100px;
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