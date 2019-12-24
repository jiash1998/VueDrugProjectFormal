<template>
  <div id="son3info">
    <div id="main">
      <el-form :model="InfoForm" ref="InfoForm" :rules="rules">
        <el-form-item label="批准文号" prop="DrugId">
          <el-input v-model="InfoForm.DrugId" placeholder="输入批准文号"></el-input>
        </el-form-item>
        <el-form-item label="药品库存">
          <el-input v-model="InfoForm.DrugNum" disabled></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain>查询</el-button>
          <el-button type="primary" plain>清空信息</el-button>
        </el-form-item>
        <el-form-item label="修改药名" prop="DrugModifyName">
          <el-input v-model="InfoForm.DrugModifyName" placeholder="输入修改药名"></el-input>
        </el-form-item>
        <el-form-item label="修改数量" prop="DrugModifyNum">
          <el-input v-model="InfoForm.DrugModifyNum" placeholder="输入修改数量"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submit('InfoForm')"
            v-loading.fullscreen.lock="loading"
          >提交修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
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
        DrugId: "",
        DrugNum: "",
        DrugModifyName: "",
        DrugModifyNum: ""
      },
      rules: {
        DrugId: [{ validator: validateId, change: "blur" }],
        DrugModifyName: [{ validator: validateName, change: "blur" }],
        DrugModifyNum: [{ validator: validateNum, change: "blur" }]
      },
      loading: false
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        } else {
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son3info.less";
</style>