import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        completed: false,
        description: 'Test task: create To-Do list'
      },
      {
        id: 2,
        completed: true,
        description: 'Learn Vue.js'
      },
      {
        id: 3,
        completed: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae deleniti esse est exercitationem ipsam, molestiae nisi numquam perspiciatis vero. Ab aut cum eius libero magni nulla officia soluta ullam? '
      },
      {
        id: 4,
        completed: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae deleniti esse est exercitationem ipsam, molestiae nisi numquam perspiciatis vero. Ab aut cum eius libero magni nulla officia soluta ullam? '
      },
      {
        id: 5,
        completed: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae deleniti esse est exercitationem ipsam, molestiae nisi numquam perspiciatis vero. Ab aut cum eius libero magni nulla officia soluta ullam? '
      },
      {
        id: 6,
        completed: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae deleniti esse est exercitationem ipsam, molestiae nisi numquam perspiciatis vero. Ab aut cum eius libero magni nulla officia soluta ullam? '
      }
    ]
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
    changeTaskStatus(state, payload) {
      state.tasks.find((t) => t.id === payload?.task.id).completed = payload?.completed;
    }
  },
  actions: {
    createTask({commit}, task) {
      commit('createTask', task);
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
    }
  }
})
