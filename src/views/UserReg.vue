<template>
  <div id="app">
    <div class="main">
      <div class="main_son">
        <el-form :model="formModel" :rules="rules" ref="formModel">
          <el-form-item label="用户名" prop="username" @input.native="postname">
            <el-input v-model="formModel.username" placeholder="输入姓名">
              <i v-if="$store.state.postname == 'truename'" slot="suffix" class="el-icon-success"></i>
              <i v-else slot="suffix" class="el-icon-success" style="color:#67C23A;"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formModel.password" placeholder="输入密码" type="password" show-password>
              <i v-if="$store.state.postpass" slot="suffix" class="el-icon-success"></i>
              <i v-else slot="suffix" class="el-icon-success" style="color:#67C23A;"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="passwordcheck">
            <el-input
              v-model="formModel.passwordcheck"
              placeholder="再次确认"
              type="password"
              show-password
            >
              <i v-if="$store.state.postpasscheck" slot="suffix" class="el-icon-success"></i>
              <i v-else slot="suffix" class="el-icon-success" style="color:#67C23A;"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="useremail" @input.native="postemail">
            <el-input v-model="formModel.useremail" placeholder="输入邮箱">
              <i v-if="$store.state.postemail == 'trueemail'" slot="suffix" class="el-icon-success"></i>
              <i v-else slot="suffix" class="el-icon-success" style="color:#67C23A;"></i>
            </el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="usertel" @input.native="posttel">
            <el-input v-model="formModel.usertel" placeholder="输入手机号">
              <i v-if="$store.state.posttel == 'truetel'" slot="suffix" class="el-icon-success"></i>
              <i v-else slot="suffix" class="el-icon-success" style="color:#67C23A;"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="idcode">
            <el-button type="primary" style="width:40%;" @click="getidcode" plain>获取验证码</el-button>
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
      const standrd = /^[a-zA-Z][0-9]{5,14}$/;
      if (!value) {
        this.$store.commit("postmessmodify", true);
        return new callback("密码为空");
      } else if (!standrd.test(value)) {
        this.$store.commit("postmessmodify", true);
        return new callback("密码以字母开头,长度在6-15位,只能包含字母和数字");
      } else if (this.formModel.passwordcheck !== "") {
        this.$refs.formModel.validateField("passwordcheck");
      } else {
        this.$store.commit("postmessmodify", false);
        callback();
      }
    };
    var validatePassCheck = (rule, value, callback) => {
      const standrd = /^[a-zA-Z][0-9]{5,14}$/;
      if (!value) {
        this.$store.commit("postmesscheckmodify", true);
        return new callback("密码为空");
      } else if (value !== this.formModel.password) {
        this.$store.commit("postmesscheckmodify", true);
        callback(new Error("密码不一致"));
      } else if (!standrd.test(value)) {
        this.$store.commit("postmesscheckmodify", true);
      } else {
        this.$store.commit("postmesscheckmodify", false);
        callback();
      }
    };
    var validateEmailCheck = (rule, value, callback) => {
      const standrd = /^\w{6,}@[a-z0-9]{2,3}\.com+$|\,$/;
      if (!value) {
        this.$store.commit("postemailmodify", "trueemail");
        return new callback("邮箱为空");
      } else if (!standrd.test(value)) {
        this.$store.commit("postemailmodify", "trueemail");
        callback(new Error("邮箱格式错误"));
      } else {
        this.$store.commit("postemailmodify", "falseemail");
        callback();
      }
    };
    var validatePhoneCheck = (rule, value, callback) => {
      const standrd = /^1[0-9]{10}$/;
      if (!value) {
        this.$store.commit("posttelmodify", "truetel");
        return new callback("手机号为空");
      } else if (!standrd.test(value)) {
        this.$store.commit("posttellmodify", "truetel");
        callback(new Error("手机格式错误"));
      } else {
        this.$store.commit("posttelmodify", "falsetel");
        callback();
      }
    };
    var validateCodeCheck = (rule, value, callback) => {
      const standrd = /^[0-9]{6}$/;
      if (!value) {
        return new callback("验证码为空");
      } else if (!standrd.test(value)) {
        callback(new Error("验证码格式错误"));
      } else {
        callback();
      }
    };
    return {
      rules: {
        username: [{ validator: validateName, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        passwordcheck: [{ validator: validatePassCheck, trigger: "blur" }],
        useremail: [{ validator: validateEmailCheck, trigger: "blur" }],
        usertel: [{ validator: validatePhoneCheck, trigger: "blur" }],
        idcode: [{ validator: validateCodeCheck, trigger: "blur" }]
      },
      formModel: {
        username: "",
        password: "",
        passwordcheck: "",
        useremail: "",
        usertel: "",
        idcode: ""
      }
    };
  },
  methods: {
    //实时根据后台数据判断注册信息是否通过
    postall(value, index) {
      switch (index) {
        case 0:
          var data = { username: value };
          var url = "http://"+this.$store.state.path+":8088/usercontroller/usernameisexsit";
          break;
        case 3:
          var data = { useremail: value };
          var url = "http://"+this.$store.state.path+":8088/usercontroller/useremailisexsit";
          break;
        case 4:
          var data = { usertel: value };
          var url = "http://"+this.$store.state.path+":8088/usercontroller/usertelisexsit";
          break;
        default:
          console.log("error");
          break;
      }
      this.axios
        .post(url, qs.stringify(data), {
          header: { "Content-Type": "application/x-www-form-urlencoded" }
        })
        .then(res => {
          //提交给store判断
          console.log(value);
          console.log(res.data);
          this.$store.commit("postnamemodify", res.data);
          this.$store.commit("postemailmodify", res.data);
          this.$store.commit("posttelmodify", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    postname(e) {
      this.postall(e.target.value, 0);
      console.log(e.target.form[0]);
    },
    postemail(e) {
      this.postall(e.target.value, 3);
      console.log(e.target.form[3]);
    },
    posttel(e) {
      this.postall(e.target.value, 4);
      console.log(e.target.form[4]);
    },
    getidcode() {
      console.log(this.formModel.usertel);
      var data2 = { usertel: this.formModel.usertel };
      this.axios
        .post(
          "http://"+this.$store.state.path+":8088/usercontroller/accepttel",
          qs.stringify(data2),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log("telephone success");
        });
    },
    //判断整个注册表是否能通过
    submitCheck(formName) {
      console.log("enter");
      this.$refs[formName].validate(val => {
        console.log(val);
        if (val) {
          var data = this.formModel;
          console.log(data);
          this.axios
            .post(
              "http://"+this.$store.state.path+":8088/usercontroller/userreginfo",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              alert("post success");
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
@import "../assets/css/register.less";
</style>
