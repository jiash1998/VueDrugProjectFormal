import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active:1
  },
  getters:{
   
  },
  mutations: {
    activeAdd(state){
      return state.active++
    },
    activeReduce(state){
      state.active > 1 ? state.active-- : state.active;
      return state.active
    }
  },
  actions: {
  },
  modules: {
  }
})
