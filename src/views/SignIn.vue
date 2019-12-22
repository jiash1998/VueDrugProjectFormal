<template>
  <div id="home">
    <div class="main">
      <!-- <div id="main_aside"></div> -->
      <div id="main_center">
        <div id="main_center_son">
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="用户名" prop="input1">
              <el-input v-model="form.input1" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="input2">
              <el-input v-model="form.input2" show-password placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:40%;" plain>注册</el-button>
              <el-button type="primary" style="margin-left:20%; width:40%;" @click="submit('form')">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <public-footer-add1></public-footer-add1>
  </div>
</template>

<script>
import PublicHeader from "../components/PublicHeader.vue";
import PublicFooterAdd1 from "../components/PublicFooterAdd1.vue";
export default {
  name: "home",
  components: {
    PublicHeader,
    PublicFooterAdd1
  },
  data() {
    var input1Validate = (rule, value, callback) => {
      if (!value) {
        return new callback("用户名为空");
      } else {
        callback();
      }
    };
    var input2Validate = (rule, value, callback) => {
      if (!value) {
        return new callback("密码为空");
      } else {
        callback();
      }
    };
    return {
      rules: {
        input1: [{ validator: input1Validate, trigger: "blur" }],
        input2: [{ validator: input2Validate, trigger: "blur" }]
      },
      form: {
        input1: "",
        input2: ""
      }
    };
  },
  methods: {
    submit:function (formName) {
      this.$refs[formName].validate(valid =>{
        if(valid){
          alert("success");
        }else{
          alert("ERROR");
        }
      })
    }
  },
};
</script>


<style lang="less" scoped>
@import "../assets/css/signin.less";
</style>
