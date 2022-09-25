import {createStore} from 'vuex'

const store = createStore({
  state: {
    counter: 0,
  },
  actions: {
    add(context) {
      context.commit('add')
    }
  },
  mutations: {
    add (state) {
      state.counter++
    }
  }
})

export default store