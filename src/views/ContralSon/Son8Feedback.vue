<template>
  <div id="test">
    <div id="main">
      <div style="margin:40px 0 -48px 0;"><el-tag type="primary" effect="dark">客服</el-tag></div>
      <div class="msg-box">
        <div
          class="msg"
          v-for="(item,index) in list"
          :key="index"
          :style="item.postname == '管理员'?'':'flex-direction: row-reverse'"
        >
          <div class="user-head">
            <img src="../../assets/img/feedbackget.png" />
          </div>
          <div class="user-msg">
            <span :class="item.postname=='管理员'?'left':'right'" :style="item.postname=='管理员'?'':'float:right'">{{item.postmess}}</span>
          </div>
        </div>
      </div>
      <div id="postmess">
        <el-form :model="postform">
          <el-form-item label>
            <el-input v-model="postform.postmess" @keyup.enter="postMess" placeholder="输入消息"></el-input>
            <el-button type="primary" @click="postMess">发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      postform: { postmess: "" },
      name: "",
      mess: "",
      list: [],
      contentText: ""
    };
  },
  mounted() {
    this.initWs();
  },
  methods: {
    postMess() {
      let _this = this;
      console.log(_this.postform.postmess);
      var data = {
        postname: _this.$store.state.getusername,
        postmess: _this.postform.postmess
      };
      //保存多次聊天记录
      _this.list = [..._this.list,{postname:data.postname,postmess:data.postmess}];
      _this.ws.send(JSON.stringify(data)); //调用WebSocket send()发送信息的方法
      _this.postform.postmess = "";
    },
    initWs() {
      let _this = this;
      //判断是否支持websocket，并连接
      if (window.WebSocket) {
        var serverHot = "192.168.43.6:8088";
        var url =
          "ws://192.168.43.6:8088/hello/postname=" +
          _this.$store.state.getusername;
        let ws = new WebSocket(url);
        _this.ws = ws;
        //发送连接
        ws.onopen = function(e) {
          console.log("服务器连接成功: " + url);
          var data = {
            postname: _this.$store.state.getusername
          };
          _this.ws.send(JSON.stringify(data)); //调用WebSocket send()发送信息的方法
        };
        ws.onerror = function() {
          console.log("服务器连接出错: " + url);
        };
        ws.onmessage = function(e) {
          //接收服务器返回的数据
          let getData = JSON.parse(e.data);
          //需要将获得json字符串两次转换
          var name = JSON.parse(getData).postname;
          var message = JSON.parse(getData).postmess;
          console.log("消息" + message);
          _this.list = [..._this.list,{postname:name,postmess: message}];
          console.log("接收后台" + getData);
          // console.log(JSON.parse(getData).postname);
          // console.log(JSON.parse(getData).postmess);
          console.log(_this.list);
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son8test.less";
</style>