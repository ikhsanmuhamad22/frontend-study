export const state = () => ({
  tasks: [{
    id: 1,
    title: 'title 1',
    desc: 'ini contoh',
    kategori: 'berat',
    isDone: false,
  }],
})

export const mutations = {
  ADD_TASK(state, task) {
    state.tasks.push(task)
  },
  TOGGLE_DONE(state, id) {
    const task = state.tasks.find((task) => task.id === id)
    task.isDone = !task.isDone;
  }
}

export const actions = {
  addTask(context, task) {
    context.commit('ADD_TASK', task)
  },
}

export const getters = {
  getTasks: (state) => {
      return state.tasks
  },
  getTasksById: (state) => (id) => {
    return state.tasks.find(task => task.id === id)
  },
}