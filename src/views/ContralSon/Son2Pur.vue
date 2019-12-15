<template>
  <div id="Son2Pur">
    <div id="steps">
      <el-steps :active="$store.state.active" align-center finish-status="success">
        <el-step title="填写信息"></el-step>
        <el-step title="选择厂家"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps>
    </div>
    <div id="main">
      <el-form :model="purchaseForm" :rules="rules" ref="purchaseForm">
        <el-form-item label="药品名称" prop="purName">
          <el-input v-model="purchaseForm.purName" placeholder="输入药名"></el-input>
        </el-form-item>
        <el-form-item label="批准文号" prop="purId">
          <el-input v-model="purchaseForm.purId" placeholder="输入批准文号"></el-input>
        </el-form-item>
        <el-form-item label="药品数量" prop="purNum">
          <el-input v-model="purchaseForm.purNum" placeholder="输入进货数量"></el-input>
        </el-form-item>
        <el-form-item label="生产日期" prop="purDate">
          <el-date-picker
            type="date"
            v-model="purchaseForm.purDate"
            placeholder="选择日期"
            :picker-options="PickerOption"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCheck('purchaseForm')">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Son2Pur",
  data() {
    var validateName = (rule, value, callback) => {};
    return {
      // active: 1,
      purchaseForm: {
        purName: "",
        purId: "",
        purNum: "",
        purDate: "",
        purFactory: ""
      },
      PickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        purName: [
          { validate: validateName, trigger: "blur" },
          { required: "true", message: "请输入药品", trigger: "blur" }
        ],
        purId: [
          // { validate: validateId, trigger: "blur" },
          { required: "true", message: "请输入正确批准文号", trigger: "blur" }
        ],
        purNum: [
          // { validate: validateNum, trigger: "blur" },
          { required: "true", message: "请输入数量", trigger: "blur" }
        ],
        purDate: [{ required: "true", message: "请选择时间", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitCheck: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.commit('activeAdd')
          this.$router.replace("/contral/son2purnext");
        } else {
          alert("请完整填写!!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son2pur.less";
</style>