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
          >提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "son3info",
  data() {
    return {
      InfoForm: {
        DrugId: "",
        DrugNum: "",
        DrugModifyName: "",
        DrugModifyNum: ""
      },
      rules: {
        DrugId: [
          {
            required: "true",
            message: "请输入批准文号",
            trigger: "blur"
          }
        ],
        DrugModifyName: [
          {
            required: "true",
            message: "请输入修改药名",
            trigger: "blur"
          }
        ],
        DrugModifyNum: [
          {
            required: "true",
            message: "请输入修改数量",
            trigger: "blur"
          }
        ]
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