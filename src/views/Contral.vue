<template>
  <div id="control">
    <div class="main">
      <div id="main_left">
        <el-menu default-active="1">
          <el-menu-item index="1">
            <i class="el-icon-picture-outline-round"></i>
            <router-link to="/contral/son1view" tag="span">
              <span>药品简介</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-circle-plus-outline"></i>
            <router-link to="/contral/son2pur" tag="span">
              <span>药品采购</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-refresh"></i>
            <router-link to="/contral/son3info" tag="span">
              <span>信息修改</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-data-analysis"></i>
            <router-link to="/contral/son4charts" tag="span">
              <span>数据可视化</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-document"></i>
            <router-link to="/contral/son5export" tag="span">
              <span>信息导出</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-view"></i>
            <router-link to="/contral/son6record" tag="span">
              <span>记录跟踪</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-user"></i>
            <router-link to="/contral/son7feedback" tag="span">
              <span>在线客服</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-user"></i>
            <router-link to="/contral/son8test" tag="span">
              <span>测试界面</span>
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
      <div id="main_right">
        <router-view />
      </div>
    </div>
    <public-footer-add1></public-footer-add1>
  </div>
</template>

<script>
import PublicHeader from "../components/PublicHeader.vue";
import PublicFooterAdd1 from "../components/PublicFooterAdd1.vue";
import Son1View from "./ContralSon/Son1View";
export default {
  name: "control",
  components: {
    PublicFooterAdd1,
    PublicHeader,
    Son1View
  },
  mounted() {
    this.goBackListener();
  },
  destroyed() {
    window.onpopstate = null; //销毁实例，以防影响其他页面
  },
  methods: {
    goBackListener: function() {
      var that = this; //window.onpopstate默认指向window,这里改变this指向
      window.onpopstate = function() {
        that.$store.commit("activeReduce");
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/contral.less";
</style>