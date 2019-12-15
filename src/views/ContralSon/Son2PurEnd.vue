<template>
  <div id="son2purend">
    <div id="steps">
      <el-steps :active="$store.state.active" align-center>
        <el-step title="填写信息"></el-step>
        <el-step title="选择厂家"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps>
    </div>
    <div id="main">
      <div id="MoneyImg">
        <img src="../../assets/img/getMon2.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "son2purend",
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son2purend.less";
</style>