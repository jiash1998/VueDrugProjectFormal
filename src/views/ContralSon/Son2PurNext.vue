<template>
  <div id="son2purnext">
    <div id="steps">
      <el-steps :active="$store.state.active" align-center finish-status="success">
        <el-step title="填写信息"></el-step>
        <el-step title="选择厂家"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps>
    </div>
    <div id="main">
      <el-form :model="facotryForm" :rules="rules" ref="facotryForm">
        <el-form-item label="选择厂家" prop="radioSel">
          <el-radio-group v-model="facotryForm.radioSel" @change="groupChange">
            <el-radio-button label="供货商A" v-if="$store.state.sourcenameA"></el-radio-button>
            <el-radio-button label="供货商A" v-else disabled></el-radio-button>
            <el-radio-button label="供货商B" v-if="$store.state.sourcenameB"></el-radio-button>
            <el-radio-button label="供货商B" v-else disabled></el-radio-button>
            <el-radio-button label="供货商C" v-if="$store.state.sourcenameC"></el-radio-button>
            <el-radio-button label="供货商C" v-else disabled></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="厂家单价">
          <el-input v-model="facotryForm.sourcedrugprice" disabled></el-input>
        </el-form-item>
        <el-form-item label="采购数量" prop="drugNum">
          <el-input v-model="facotryForm.sourcedrugnum" placeholder="输入数量"></el-input>
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
    var validateNum = (rule, value, callback) => {
      var testZ = /^[1-9]\d*$/;
      if (!value || !testZ.test(value)) {
        return new callback("数据格式错误");
      } else {
        callback();
      }
    };
    return {
      rules: {
        radioSel: [
          {
            required: "true",
            message: "请选择厂家",
            trigger: "blur"
          }
        ],
        drugNum: [{ validator: validateNum, change: "blur" }]
      },
      loading1: false,
      facotryForm: {
        radioSel: "",
        sourcedrugprice: "",
        sourcedrugnum: "",
        submitB: ""
      },
      sourceInfo: []
    };
  },
  mounted() {
    console.log(this.$store.state.purchaseDrugInfo.data);
    var drugData = this.$store.state.purchaseDrugInfo.data;
    for (let index = 0; index < drugData.length; index++) {
      this.sourceInfo[index] = drugData[index].sourcename;
    }
    console.log(this.sourceInfo);
    for (let index = 0; index < this.sourceInfo.length; index++) {
      this.$store.commit("sourcenameModify", this.sourceInfo[index]);
    }
  },
  methods: {
    groupChange(value) {
      var drugData = this.$store.state.purchaseDrugInfo.data;

      if (value == drugData[0].sourcename) {
        console.log("A");
        this.facotryForm.sourcedrugprice = drugData[0].sourcedrugprice;
      } else if (value == drugData[1].sourcename) {
        console.log("B");
        this.facotryForm.sourcedrugprice = drugData[1].sourcedrugprice;
      } else {
        console.log("C");
        this.facotryForm.sourcedrugprice = drugData[2].sourcedrugprice;
      }
      console.log(drugData.length);
    },
    submit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // $store.state.getusername
          this.$store.commit("activeAdd");
          this.loading1 = true;
          setTimeout(() => {
            this.loading1 = false;
            this.$router.replace("/contral/son2purend");
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