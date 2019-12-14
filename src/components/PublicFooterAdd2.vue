<template>
  <div id="PublicFooterAdd2">
    <div id="footer_Add2">
      <div id="footer_son_div1">
        <slot name="footer_son_div1"></slot>
      </div>
      <div id="footer_son_div2">
        <slot name="footer_son_div2"></slot>
      </div>
      <div id="footer_son_div3">
        <slot name="footer_son_div3"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicFooterAdd2"
};
</script>

<style lang="less" scoped>
@AllWidth: 100%;
@footerAddColor:#666666;
@footerAddFontSize:10px;

#footer_Add2 {
  float: left;
  width: @AllWidth;
  height: 100px;
  background-color: #f7fbfd;

  #footer_son_div1 {
    margin-top: 40px;
    color: @footerAddColor;
    font-size: @footerAddFontSize;
    text-align: center;
  }

  #footer_son_div2 {
    color: @footerAddColor;
    font-size: @footerAddFontSize;
    text-align: center;
  }

  #footer_son_div3 {
    margin-top: 10px;
    color: @footerAddColor;
    font-size: @footerAddFontSize;
    text-align: center;
  }
}
</style>