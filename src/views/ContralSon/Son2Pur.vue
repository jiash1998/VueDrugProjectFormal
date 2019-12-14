<template>
  <div id="Son2Pur">
    <div id="main">
      <el-form :model="purchaseForm" :rules="rules" rel="purchaseForm">
        <el-form-item label="药品名称" prop="purName">
          <el-input v-model="purchaseForm.purName" placeholder="输入药名"></el-input>
        </el-form-item>
        <el-form-item label="批准文号" prop="purId">
          <el-input v-model="purchaseForm.purName" placeholder="输入药名"></el-input>
        </el-form-item>
        <el-form-item label="药品数量" prop="purNum">
          <el-input v-model="purchaseForm.purName" placeholder="输入药名"></el-input>
        </el-form-item>
        <el-form-item label="生产日期">
          <el-date-picker
            type="date"
            v-model="purchaseForm.purDate"
            placeholder="选择日期"
            :picker-options="PickerOption"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="生产厂家" prop="purFactory">
          <el-radio-group v-model="purchaseForm.purFactory">
            <el-radio label="上海厂家"></el-radio>
            <el-radio label="天津厂家"></el-radio>
            <el-radio label="合肥厂家"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
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
          { validate: validateName, trigger: "blur" },
          { required: "true", message: "请输入正确批准文号", trigger: "blur" }
        ],
        purNum: [
          { validate: validateName, trigger: "blur" },
          { required: "true", message: "请输入数量", trigger: "blur" }
        ]
      }
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son2Pur.less";
</style>