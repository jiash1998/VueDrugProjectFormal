<template>
  <div id="app">
    <public-header>
      <img slot="headerImg" src="./assets/img/sunrise.png" />
      <div slot="headerName">
        <router-link to="/home" tag="div">海秀医疗药品管理</router-link>
      </div>
      <div slot="headerTabs">
        <el-button type="primary" size="small" plain>
          <router-link to="/userReg" tag="span">注 册</router-link>
        </el-button>
        <el-button
          type="primary"
          size="small"
          :disabled="$store.state.btnstate == -1 ? true : false"
          plain
        >
          <router-link to="/contral" tag="span">控 制</router-link>
        </el-button>
      </div>
      <div slot="headerAvatar">
        <div id="header_userDiv">
          <div id="header_usernameDiv">
            <span>{{$store.state.getusername}}</span>
          </div>
          <div id="headerAvatar_img">
            <router-link to="/signin" tag="span">
              <!-- https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png -->
              <img id="avatar" src="./assets/img/avatar.png" />
            </router-link>
          </div>
        </div>
      </div>
    </public-header>
    <router-view />
    <!-- <test></test> -->
  </div>
</template>

<script>
import SignIn from "./views/SignIn.vue";
import UserReg from "./views/UserReg.vue";
import Home from "./views/Home.vue";
import Contral from "./views/Contral.vue";
import Test from "./views/test.vue";
import PublicHeader from "./components/PublicHeader.vue";
import PublicFooterAdd1 from "./components/PublicFooterAdd1.vue";
import PublicFooterAdd2 from "./components/PublicFooterAdd2.vue";

export default {
  name: "app",
  components: {
    UserReg,
    // SignIn,
    Test,
    Contral,
    Home,
    PublicHeader,
    PublicFooterAdd1,
    PublicFooterAdd2
  },
  data() {
    return {
      // btnstate: -1
    };
  },
  mounted() {
    // this.initWebSocket();
  },
  methods: {
    initWebSocket() {
      let _this = this;
      // 判断页面有没有存在websocket连接
      if (window.WebSocket) {
        // var serverHot = window.location.hostname;
        var serverHot = "192.168.43.6:8088";
        var url = "ws://192.168.43.6:8088/hello";
        let ws = new WebSocket(url);
        _this.ws = ws;
        ws.onopen = function(e) {
          console.log("服务器连接成功: " + url);
        };
        // ws.onclose = function(e) {
        //   console.log("服务器连接关闭: " + url);
        // };
        ws.onerror = function() {
          console.log("服务器连接出错: " + url);
        };
        ws.onmessage = function(e) {
          //接收服务器返回的数据
          let resData = JSON.parse(e.data);
          // _this.count = resData.count;
          console.log(resData);
        };
      }
    }
  }
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  cursor: pointer;

  #header_userDiv {
    width: 100px;
    height: 80px;
    // background-color: pink;
    #headerAvatar_img {
      width: 50%;
      float: right;
      // background-color: aqua;
      #avatar {
        height: 40px;
        width: 40px;
        border-radius: 5px;
        margin-top: 40%;
      }
    }

    #header_usernameDiv {
      // background-color: pink;
      float: right;
      width: 50%;
      margin-top: 40%;
      // font-size: 1em;
    }
  }
}
</style>
