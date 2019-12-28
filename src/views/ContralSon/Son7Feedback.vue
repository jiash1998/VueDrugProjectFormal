<template>
  <div id="feedback">
    <div id="main">
      <el-tag type="primary" effect="dark">客服</el-tag>
      <div id="chatborder">
        <div id="chatborder_son">
          <div id="avatar">
            <img src="../../assets/img/feedbackpost.png" id="avatarImg">
          </div>
          <div id="mess"></div>
        </div>
      </div>
      <div id="postmess">
        <el-form :model="postform">
          <el-form-item label>
            <el-input v-model="postform.postmess" placeholder="输入消息"></el-input>
            <el-button type="primary" plain>发送</el-button>
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
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son7feedback.less";
</style>