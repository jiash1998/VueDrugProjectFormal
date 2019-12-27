<template>
  <div id="son3info">
    <div id="main">
      <el-form :model="InfoForm" ref="InfoForm" :rules="rules">
        <el-form-item label="批准文号" prop="drugId">
          <el-input v-model="InfoForm.drugId" placeholder="输入批准文号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="drugselect" plain>查询</el-button>
          <el-button type="primary" native-type="reset" plain>清空信息</el-button>
          <el-button
            type="primary"
            @click="submit('InfoForm')"
            v-loading.fullscreen.lock="loading"
          >提交修改</el-button>
        </el-form-item>
        <el-form-item label="药品名称">
          <el-input v-model="InfoForm.drugName" disabled></el-input>
        </el-form-item>
        <el-form-item label="药品库存">
          <el-input v-model="InfoForm.drugNum"></el-input>
        </el-form-item>
        <el-form-item label="药品价格">
          <el-input v-model="InfoForm.drugPrice"></el-input>
        </el-form-item>
        <!-- <el-form-item label="药品规格">
          <el-input v-model="InfoForm.drugSpe" disabled></el-input>
        </el-form-item>-->
        <el-form-item label="生产日期">
          <el-input v-model="InfoForm.drugProduct" disabled></el-input>
        </el-form-item>
        <el-form-item label="保质期">
          <el-input v-model="InfoForm.drugShelflife" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  name: "son3info",
  data() {
    var validateId = (rule, value, callback) => {
      var testZ = /^(H(11|32|33|37)|S(11|32|33|37))\d{6}$/;
      if (!value || !testZ.test(value)) {
        console.log(value);
        return callback(new Error("批准文号(H/S+2位厂家代码+6位数字)"));
      } else {
        callback();
      }
    };
    var validateName = (rule, value, callback) => {
      if (!value) {
        return new callback("用户名不合法");
      } else {
        callback();
      }
    };
    var validateNum = (rule, value, callback) => {
      var testZ = /^[1-9]\d*$/;
      if (!value || !testZ.test(value)) {
        return new callback("数据格式错误");
      } else {
        callback();
      }
    };

    return {
      InfoForm: {
        drugId: "",
        drugName: "",
        drugNum: "",
        drugPrice: "",
        drugSpe: "",
        drugProduct: "",
        drugShelflife: ""
      },
      rules: {
        drugId: [{ validator: validateId, change: "blur" }]
      },
      loading: false
    };
  },
  methods: {
    drugselect: function() {
      var self = this;
      var data = { drugId: this.InfoForm.drugId };
      this.axios
        .post(
          "http://192.168.43.6:8088/drugController/selectdrugnumfromdrugid",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data == "") {
            alert("不存在此文号,请重新输入");
          } else {
            self.InfoForm = res.data;
            self.InfoForm = JSON.parse(JSON.stringify(self.InfoForm));
          }
          console.log(self.InfoForm);
        });
    },
    handlechange: function(e) {
      this.$set(this.input, "drugName", "Listing is still available");
    },
    submit(formName) {
      // this.$refs[formName].validate(valid => {
      //   if (valid) {
      //     this.loading = true;
      //     setTimeout(() => {
      //       this.loading = false;
      //     }, 1000);
      //   } else {
      //   }
      // });
      var data = this.InfoForm;
      console.log(data);
      this.axios
        .post(
          "http://192.168.43.6:8088/drugController/updatedrugnameanddrugnum",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log("enter");
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son3info.less";
</style>