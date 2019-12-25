<template>
  <div id="app">
    <div class="main">
      <div class="main_son">
        <el-form :model="formModel" :rules="rules" ref="formModel">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="formModel.username" placeholder="输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formModel.password" placeholder="输入密码" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordcheck">
            <el-input
              v-model="formModel.passwordcheck"
              placeholder="再次确认"
              type="password"
              show-password
            ></el-input>
          </el-form-item>
          <!-- <el-form-item label="密码" prop="password">
            <el-input v-model="formModel.password" placeholder="输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passwordcheck">
            <el-input v-model="formModel.passwordcheck" placeholder="输入姓名"></el-input>
          </el-form-item> -->
          <el-form-item label="邮箱" prop="useremail">
            <el-input v-model="formModel.useremail" placeholder="输入邮箱"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="usertel">
            <el-input v-model="formModel.usertel" placeholder="输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="idcode">
            <el-button type="primary" style="width:40%;" plain>获取验证码</el-button>
            <el-input
              v-model="formModel.idcode"
              style="margin-left:20%; width:40%;"
              placeholder="输入验证码"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitCheck('formModel')" style="width:100%;">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <public-footer-add1></public-footer-add1>
    <public-footer-add2>
      <div slot="footer_son_div1">药犹兵也。兵能卫人之死，不能养人之生。无病而服药，犹不乱而设兵也。</div>
      <div
        slot="footer_son_div2"
      >Medicine is also a soldier. A soldier can save a man's death, but not his life. Taking medicine without a disease is like setting soldiers in disorder.</div>
      <div slot="footer_son_div3">版权所有 @医疗药品管理系统 Copyright@2019 All rigth 免责申明|技术支持 @JST/LMK</div>
    </public-footer-add2>
  </div>
</template>

<script>
import PublicHeader from "../components/PublicHeader.vue";
import PublicFooterAdd1 from "../components/PublicFooterAdd1.vue";
import PublicFooterAdd2 from "../components/PublicFooterAdd2.vue";
import qs from "querystring";

export default {
  name: "app",
  components: {
    PublicHeader,
    PublicFooterAdd1,
    PublicFooterAdd2
  },
  data() {
    var validateName = (rule, value, callback) => {
      if (!value) {
        return new callback("用户名格式错误");
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return new callback("密码为空");
      } else if (this.formModel.passwordcheck !== "") {
        this.$refs.formModel.validateField("passwordcheck");
      } else {
        callback();
      }
    };
    var validatePassCheck = (rule, value, callback) => {
      if (!value) {
        return new callback("密码为空");
      } else if (value !== this.formModel.password) {
        callback(new Error("密码不一致"));
      } else {
        callback();
      }
    };
    var validateEmailCheck = (rule, value, callback) => {
      const standrd = /^\w{6,}@[a-z0-9]{2,3}\.[a-z]+$|\,$/;
      if (!value) {
        return new callback("邮箱为空");
      }
      if (!standrd.test(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    var validatePhoneCheck = (rule, value, callback) => {
      const standrd = /^1[0-9]{10}$/;
      if (!value) {
        return new callback("手机号为空");
      } else if (!standrd.test(value)) {
        callback(new Error("手机格式错误"));
      } else {
        callback();
      }
    };
    var validateCodeCheck = (rule, value, callback) => {
      if (!value) {
        return new callback("验证码为空");
      } else {
        callback();
      }
    };
    return {
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validateName, trigger: "blur" }],
        passwordcheck: [{ validator: validateName, trigger: "blur" }],
        useremail: [{ validator: validateEmailCheck, trigger: "blur" }],
        usertel: [{ validator: validatePhoneCheck, trigger: "blur" }]
        // idcode: [{ validator: validateCodeCheck, trigger: "blur" }]
      },
      formModel: {
        username: "",
        password: "",
        passwordcheck: "",
        useremail: "",
        usertel: ""
        // idcode: ""
      }
    };
  },
  methods: {
    change: function(e, index) {
      // console.log(e.target.value);
      // console.log(index);
    },
    submitCheck(formName) {
      console.log("enter");
      this.$refs[formName].validate(val => {
        console.log(val);
        if (val) {
          // console.log(this.formModel);
          var data = this.formModel;
          console.log(data);
          this.axios
            .post(
              "http://192.168.43.6:8088/usercontroller/userreginfo",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              console.log("axios success");
            });
        } else {
          alert("ERROR");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/register.less";
</style>
