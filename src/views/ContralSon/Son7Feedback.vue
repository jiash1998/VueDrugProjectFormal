<template>
  <div id="feedback">
    <div id="main">
      <el-tag type="primary" effect="dark">客服</el-tag>
      <div id="chatborder" ref="chatborder">
        <!-- <div id="chatborder_son" v-for="(item,index) in getMessage" :key="index"> -->
        <!-- <div id="chatborder_son">
          <div id="avatar">
            <img src="../../assets/img/feedbackpost.png" id="avatarImg1" />
          </div>
        <div id="mess">-->
        <!-- <span id="messSpan1" style>{{item.data}}</span> -->
        <!-- <span id="messSpan1" style>{{this.getMessage}}</span>
        </div>-->
        <!-- </div> 
        <div id="chatborder_son" style>
          <div id="avatar">
            <img src="../../assets/img/feedbackget.png" id="avatarImg2" />
          </div>
          <div id="mess">
            <span id="messSpan2" style>{{this.postMessage}}</span>
          </div>
        </div>-->
        <div
          v-for="(i,index) in list"
          :key="index"
          class="msg"
          :style="i.userId == userId?'flex-direction:row-reverse':''"
        >
          <div class="user-head">
            <img :src="i.avatar" height="30" width="30" :title="i.username" />
          </div>
          <div class="user-msg">
            <span
              :style="i.userId == userId?' float: right;':''"
              :class="i.userId == userId?'right':'left'"
            >{{i.content}}</span>
          </div>
        </div>
      </div>
      <div id="postmess">
        <el-form :model="postform">
          <el-form-item label>
            <el-input v-model="postform.postmess" placeholder="输入消息"></el-input>
            <el-button type="primary" @click="feedbackmess" plain>发送</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  name: "feedback",
  data() {
    return {
      list:[{
        avatar:''
      }],
      getMessage: [],
      postMessage: [],
      postform: {
        postmess: ""
      },
      avatorSrc: [
        {
          src: "../../assets/img/feedbackpost.png"
        },
        {
          src: "../../assets/img/feedbackget.png"
        }
      ]
    };
  },
  mounted() {
    this.initWebSocket();
  },
  methods: {
    feedbackmess() {
      let _this = this;
      console.log(_this.postform.postmess);
      _this.postMessage = _this.postform.postmess;
      var data = {
        postname: _this.$store.state.getusername,
        postmess: _this.postform.postmess
      };
      _this.ws.send(JSON.stringify(data)); //调用WebSocket send()发送信息的方法
      _this.postform.postmess = "";
      // setTimeout(() => {
      //   _this.scrollBottm();
      // }, 500);
    },
    // 进入页面创建websocket连接
    initWebSocket() {
      let _this = this;
      // 判断页面有没有存在websocket连接
      if (window.WebSocket) {
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
          console.log(e);
          // _this.getMessage = e.data;
        };
      }
    },
    // 滚动条到底部
    scrollBottm() {
      let el = this.$refs["chatborder"];
      el.scrollTop = el.scrollHeight;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son7feedback.less";
</style>