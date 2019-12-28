<template>
  <div id="feedback">
    <div id="main">
      <el-tag type="primary" effect="dark">客服</el-tag>
      <div id="chatborder">
        <div id="chatborder_son">
          <div id="avatar">
            <img src="../../assets/img/feedbackpost.png" id="avatarImg" />
          </div>
          <div id="mess">
            <span></span>
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
  methods: {
    feedbackmess() {
      var data = { postname: this.postform.postmess,
      postmess:this.$store.state.getusername };
      this.axios
        .post(
          "http://192.168.43.6:8088//",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.listInfo = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son7feedback.less";
</style>