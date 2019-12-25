<template>
  <div id="home">
    <div class="main">
      <!-- <div id="main_aside"></div> -->
      <div id="main_center">
        <div id="main_center_son">
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username" placeholder="输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" show-password placeholder="输入密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:40%;" plain>
                <router-link to="/userReg" tag="span">注册</router-link>
              </el-button>
              <el-button
                type="primary"
                style="margin-left:20%; width:40%;"
                @click="submit('form')"
              >登录</el-button>
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
        this.axios
          .get("http://192.168.43.6:8088/usercontroller/selectalluserinfo")
          .then(res => {
            console.log(value);
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
              if (res.data[i].username == value) {
                console.log("get name");
                this.$store.commit("userNameSet",value);
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
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
        username: [{ validator: input1Validate, change: "blur" }],
        password: [{ validator: input2Validate, trigger: "blur" }]
      },
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    submit: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("success");
        } else {
          alert("ERROR");
        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
@import "../assets/css/signin.less";
</style>
