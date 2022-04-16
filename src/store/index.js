import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: []
  },
  getters: {
    getSortedTasks(state) {
      return [...state.tasks].sort((task) => task.completed ? -1 : 1);
    }
  },
  mutations: {
    createTask(state, payload) {
      state.tasks.push(payload);
    },
    editTaskDescription(state, payload) {
      state.tasks.find((t) => t.id === payload?.id).description = payload.description;
    },
    changeTaskStatus(state, payload) {
      state.tasks.find((t) => t.id === payload?.task.id).completed = payload?.completed;
    },
    clearList(state) {
      state.tasks = [];
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
    },
    editTaskDescription({commit}, task) {
      commit('editTaskDescription', task);
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
    clearList({commit}) {
      commit('clearList');
    }
  }
})
