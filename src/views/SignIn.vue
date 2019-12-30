<template>
  <div id="home">
    <div class="main">
      <div id="main_center">
        <div id="main_center_son1">
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item label="用户名/手机" prop="usertest">
              <el-input v-model="form.usertest" placeholder="用户名/手机"></el-input>
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
import qs from "querystring";
export default {
  name: "home",
  components: {
    PublicHeader,
    PublicFooterAdd1
  },
  data() {
    var input1Validate = (rule, value, callback) => {
      const standrd = /^1[0-9]{10}$/;
      if (!value) {
        return new callback("用户名为空");
      }else if(!standrd.test(value) || value.length < 2){
        return new callback("格式错误");
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
        usertest: [{ validator: input1Validate, trigger: "blur" }],
        password: [{ validator: input2Validate, trigger: "blur" }]
      },
      form: {
        usertest: "",
        password: ""
      }
    };
  },
  methods: {
    submit: function(formName) {
      console.log(this.form);
      //使用validate进行校验
      this.$refs[formName].validate(val => {
        console.log("enter");
        if (val) {
          var data = this.form;
          console.log(data);
          //axios连接，设置连接头，并使用qs
          this.axios
            .post(
              "http://192.168.43.6:8088/usercontroller/selectalluserinfo",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              if (res.data == "") {
                alert("post error");
              } else {
                alert("post success");
                this.$router.replace("/contral");
                this.$store.commit("modifybtnstate");
                this.$store.commit("userNameSet", res.data.username);
              }
              console.log(res);
            })
            .catch(err => {
              alert("POST ERROR");
            });
        } else {
          alert("post error");
          return false;
        }
      });
    }
  }
};
</script>


<style lang="less" scoped>
@import "../assets/css/signin.less";
</style>
