import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //路径封装
    path:"10.200.75.137",
    active: 1,//控制购买步骤条
    btnstate: -1,
    //购买界面根据进货商的药品库存来决定是否显示有药品
    sourcenameA: false,
    sourcenameB: false,
    sourcenameC: false,
    //注册表单，判定是否通过的标记
    postname: "truename",
    postpass: true,
    postpasscheck: true,
    postemail: "trueemail",
    posttel: "truetel",
    posttidcode: true,
    //聊天室标识
    socketsign:'客户端',
    //传给后台，登录管理员的姓名
    getusername: "",
    //购买界面，存放查询到的药品信息
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
    modifybtnstate(state) {
      return (state.btnstate = 1);
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
    postmessmodify(state, payload) {
      return (state.postpass = payload);
    },
    postmesscheckmodify(state, payload) {
      return (state.postpasscheck = payload);
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
