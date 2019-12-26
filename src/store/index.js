import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: 1,
    sourcenameA: false,
    sourcenameB: false,
    sourcenameC: false,
    getusername: "123",
    purchaseDrugInfo: {}
  },
  getters: {},
  mutations: {
    activeAdd(state) {
      return state.active++;
    },
    activeReduce(state) {
      state.active > 1 ? state.active-- : state.active;
      return state.active;
    },
    userNameSet(state, payload) {
      return (state.getusername = payload);
    },
    purchaseDrugInfoModfiy(state, payload) {
      return (state.purchaseDrugInfo = payload);
    },
    sourcenameModify(state, payload) {
      if (payload == "供货商A") {
        return (state.sourcenameA = true);
      } else if (payload == "供货商B") {
        return (state.sourcenameB = true);
      } else if (payload == "供货商C") {
        return (state.sourcenameC = true);
      } else {
        return false;
      }
    },
    sourcenameRstroeA(state) {
      return (state.sourcenameA = false);
    },
    sourcenameRstroeB(state) {
      return (state.sourcenameB = false);
    },
    sourcenameRstroeC(state) {
      return (state.sourcenameC = false);
    }
  },
  actions: {},
  modules: {}
});
