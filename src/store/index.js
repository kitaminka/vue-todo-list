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
      },
    ],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
})
