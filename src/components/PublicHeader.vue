<template>
  <div id="publicHeader">
    <div class="header">
      <div id="header_div1">
        <slot name="headerImg"></slot>
      </div>
      <div id="header_div2">
        <slot name="headerName"></slot>
      </div>
      <div id="header_div3">
        <slot name="headerTabs"></slot>
      </div>
      <div id="header_div4">
        <slot name="headerAvatar"></slot>
      </div>
    </div>
    <div id="line"></div>
  </div>
</template>

<script>
export default {
  name: "publicHeader",
  data() {
    return {
      avatarSize: "large"
    };
  }
};
</script>

<style lang="less" scoped>
@AllWidth: 100%;
@headHeightOrHei: 80px;

.header {
  width: @AllWidth;
  height: @headHeightOrHei;
  background-color: #ffffff;
  // background-color: pink;

  #header_div1 {
    float: left;
    height: @headHeightOrHei;
    margin-left: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #header_div1 img {
    width: @headHeightOrHei - 30;
    height: @headHeightOrHei - 30;
  }

  #header_div2 {
    float: left;
    height: @AllWidth / 2;
    line-height: @headHeightOrHei;
    color: #409eff;
    font-weight: bold;
    font-size: 18px;
  }

  #header_div3 {
    float: right;
    width: 200px;
    // background-color: aqua;
    line-height: @headHeightOrHei;
  }

  #header_div4 {
    float: right;
    width: 40px;
    margin-right: -190px;
    height: @headHeightOrHei;
    // background-color: aquamarine;
  }
}

#line {
  width: @AllWidth;
  height: 1px;
  background-color: #dcdfe6;
}
</style>