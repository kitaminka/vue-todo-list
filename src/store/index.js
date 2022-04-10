import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [
      {
        id: 1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae deleniti esse est exercitationem ipsam, molestiae nisi numquam perspiciatis vero. Ab aut cum eius libero magni nulla officia soluta ullam? '
      }
    ],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
  },
})
