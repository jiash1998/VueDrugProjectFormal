<template>
  <div>
    <div id="steps">
      <el-steps :active="active" align-center>
        <el-step title="填写信息"></el-step>
        <el-step title="选择厂家"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#steps {
  height: 55px;
  width: 80%;
  background-color: pink;
  margin: 0 10% 0 10%;

}
</style>