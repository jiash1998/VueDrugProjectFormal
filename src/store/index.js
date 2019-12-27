import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    active: 1,
    sourcenameA: false,
    sourcenameB: false,
    sourcenameC: false,
    postname: "truename",
    postpass: true,
    postpasscheck: true,
    postemail: "trueemail",
    standrdemail: "^w{6,}@[a-z0-9]{2,3}.[a-z]+$|,$",
    posttel: "truetel",
    posttidcode: true,
    getusername: "1",
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
    },
    postnamemodify(state, payload) {
      state.postname = payload;
      if (
        state.postname == "truename" ||
        state.postname.indexOf("email") != -1 ||
        state.postname.indexOf("tel") != -1
      ) {
        return (state.postname = "truename");
      }
      return (state.postname = "falsename");
    },
    postemailmodify(state, payload) {
      state.postemail = payload;
      // console.log(state.standrdemail.test(state.postemail));
      if (
        state.postemail == "trueemail" ||
        state.postemail.indexOf("name") != -1 ||
        state.postemail.indexOf("tel") != -1
      ) {
        return (state.postemail = "trueemail");
      }
      return (state.postemail = "falseemail");
    },
    posttelmodify(state, payload) {
      state.posttel = payload;
      if (
        state.posttel == "truetel" ||
        state.posttel.indexOf("email") != -1 ||
        state.posttel.indexOf("name") != -1
      ) {
        return (state.posttel = "truetel");
      }
      return (state.posttel = "falsetel");
    }
  },
  actions: {},
  modules: {}
});
