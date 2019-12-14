<template>
  <div id="control">
    <div class="main">
      <div id="main_left">
        <el-menu default-active="1">
          <el-menu-item index="1">
            <i class="el-icon-picture-outline-round"></i>
            <router-link to="/contral/son1view" tag="span">
              <span>查看药品</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-circle-plus-outline"></i>
            <router-link to="/contral/son2pur" tag="span">
              <span>采购药品</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-refresh"></i>
            <router-link to="/contral/son3info" tag="span">
              <span>修改信息</span>
            </router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-user"></i>
            <router-link to="/contral/son4ser" tag="span">
              <span>在线客服</span>
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
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../assets/css/contral.less";
</style>