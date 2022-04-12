<template>
  <div class="list-item">
		<div class="list-item__description">
			<p v-if="task.completed">
				<s>
					{{task.description}}
				</s>
			</p>
			<p v-else>
				{{task.description}}
			</p>
		</div>
		<div class="list-item__btns">
			<app-button @click="$emit('complete', task)">
				<img src="../assets/complete.svg" alt="Complete">
			</app-button>
			<app-button>
				<img src="../assets/edit.svg" alt="Edit">
			</app-button>
			<app-button>
				<img src="../assets/delete.svg" alt="Delete">
			</app-button>
		</div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';

export default {
  name: 'TaskListItem',
	components: {
		AppButton,
	},
  props: {
    task: {
      type: Object,
      required: true,
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
	justify-content: center;
}
.list-item__description {
	color: #002493;
	text-align: left;
	width: 90%;
}
.list-item__btns {
	width: 10%;
	min-width: 150px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

@media (max-width: 900px) {
	.list-item {
		margin: 20px 10px;
		flex-direction: column;
	}
	.list-item__description {
		text-align: center;
		font-size: 15px;
	}
}
</style>