<template>
  <div id="son2purnext">
    <div id="steps">
      <el-steps :active="$store.state.active" align-center>
        <el-step title="填写信息"></el-step>
        <el-step title="选择厂家"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps>
    </div>
    <div id="main">
      <el-form :model="facotryForm" :rules="rules" ref="facotryForm">
        <el-form-item label="选择厂家" prop="radioSel">
          <el-radio-group v-model="facotryForm.radioSel">
            <el-radio label="上海厂家"></el-radio>
            <el-radio label="合肥厂家"></el-radio>
            <el-radio label="天津厂家"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="厂家单价">
          <el-input v-model="facotryForm.drugPrice" disabled></el-input>
        </el-form-item>
        <el-form-item label="购买数量" prop="drugNum">
          <el-input v-model="facotryForm.drugNum" placeholder="输入数量"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            v-model="facotryForm.submitB"
            v-loading.fullscreen.lock="loading1"
            @click="submit('facotryForm')"
          >提交付款</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "son2purnext",
  data() {
    return {
      rules: {
        radioSel: [
          {
            required: "true",
            message: "请选择厂家",
            trigger: "blur"
          }
        ],
        drugNum: [
          {
            required: "true",
            message: "请输入数量",
            trigger: "blur"
          }
        ]
      },
      loading1: false,
      facotryForm: {
        radioSel: "",
        drugPrice: "",
        drugNum: "",
        submitB: ""
      }
    };
  },
  methods: {
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.commit("activeAdd");
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            this.$router.replace('/contral/son2purend');
          }, 1000);
        } else {
          alert("请完整填写");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son2purnext.less";
</style>