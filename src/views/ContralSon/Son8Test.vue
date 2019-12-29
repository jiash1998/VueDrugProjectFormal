<template>
  <div id="test">
    <h3>测试</h3>
    <div id="main">
      <div class="msg-box">
        <!-- <div class="msg" style="flex-direction: row-reverse"> -->
        <!-- <div class="msg" v-for="(item,index) in list" :key="index"> -->
        <div class="msg">
          <div class="user-head">
            <img src="../../assets/img/feedbackget.png" />
          </div>
          <div class="user-msg">
            <span class="left">12323</span>
            <!-- <span class="left">{{item.data}}</span> -->
            <!-- <span class="right" style="float:right;">12313212312</span> -->
          </div>
        </div>
      </div>
      <div id="postmess">
        <el-form :model="postform">
          <el-form-item label>
            <el-input v-model="postform.postmess" placeholder="输入消息"></el-input>
            <el-button type="primary" @click="postMess" plain>发送</el-button>
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
      list: []
    };
  },
  mounted() {
    this.initWs();
  },
  methods: {
    postMess() {
      let _this = this;
      console.log(_this.postform.postmess);
      _this.postMessage = _this.postform.postmess;
      var data = {
        postname: _this.$store.state.getusername,
        postmess: _this.postform.postmess
      };
      _this.ws.send(JSON.stringify(data)); //调用WebSocket send()发送信息的方法
      _this.postform.postmess = "";
    },
    initWs() {
      let _this = this;
      if (window.WebSocket) {
        var serverHot = "192.168.43.6:8088";
        var url =
          "ws://192.168.43.6:8088/hello/postname=" +
          _this.$store.state.getusername;
        let ws = new WebSocket(url);
        _this.ws = ws;
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
        // var self
        //   _this.list = e.data;
        console.log(_this.postform.postmess);
          _this.list = [_this.postform.postmess,e.data];
          console.log("接收后台"+e.data);
          console.log("聊天记录："+_this.list);
        };
      }
    }
  }
};
</script>

<style lang="less" scoped>
#main {
  height: 620px;
  width: 90%;
  background-color: pink;
  margin: 10px 5% 0 5%;

  .msg-box {
    position: absolute;
    height: 80%;
    width: 76%;
    margin-top: 3rem;
    overflow-y: auto;
    border: 2px solid red;
    .msg {
      width: 95%;
      min-height: 2.5rem;
      margin: 1rem 0.5rem;
      position: relative;
      display: flex;
      justify-content: flex-start !important;
      .user-head {
        min-width: 2.5rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .user-msg {
        width: 80%;
        word-break: break-all;
        position: relative;
        z-index: 5;
        span {
          display: inline-block;
          padding: 0.5rem 0.7rem;
          border-radius: 0.5rem;
          margin-top: 0.2rem;
          font-size: 0.88rem;
        }
        .left {
          background: white;
          animation: toLeft 0.5s ease both 1;
        }
        .right {
          background: #53a8ff;
          color: white;
          animation: toright 0.5s ease both 1;
        }
        @keyframes toLeft {
          0% {
            opacity: 0;
            transform: translateX(-10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
        @keyframes toright {
          0% {
            opacity: 0;
            transform: translateX(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0px);
          }
        }
      }
    }
  }

  #postmess {
    width: 100%;
    height: 80px;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;

    .el-input {
      width: 90%;
      margin-top: 10px;
    }

    .el-button {
      width: 10%;
      margin-top: 10px;
    }
  }
}
</style>