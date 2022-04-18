import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    editableTaskId: null
  },
  getters: {
    getSortedTasks(state) {
      return [...state.tasks].sort((task) => task.completed ? -1 : 1);
    },
    getEditableTaskId(state) {
      return state.editableTaskId;
    }
  },
  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
    },
    editTaskDescription(state, {task, description}) {
      state.tasks.find((t) => t.id === task.id).description = description;
    },
    changeTaskStatus(state, {task, completed}) {
      state.tasks.find((t) => t.id === task.id).completed = completed;
    },
    deleteTask(state, task) {
      state.tasks.splice(state.tasks.indexOf(task), 1);
    },
    clearList(state) {
      state.tasks = [];
    },
    setEditableTaskId(state, taskId) {
      state.editableTaskId = taskId;
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },
    editTaskDescription({commit}, {task, description}) {
      commit('editTaskDescription', {task, description});
    },
    toggleTaskStatus({commit}, task) {
      if (task.completed) {
        commit('changeTaskStatus', {
          task,
          completed: false
        });
      } else {
        commit('changeTaskStatus', {
          task,
          completed: true
        });
      }
    },
    deleteTask({commit}, task) {
      commit('deleteTask', task)
    },
    clearList({commit}) {
      commit('clearList');
    },
    setEditableTaskId({commit}, taskId) {
      commit('setEditableTaskId', taskId);
    }
  }
})
