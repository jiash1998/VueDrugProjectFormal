<template>
  <div id="app">
    <public-header>
        <img slot="headerImg" src="./assets/img/sunrise.png" />
        <div slot="headerName">
          <router-link to="/home" tag="div">海秀医疗药品管理</router-link>
        </div>
      <div slot="headerTabs">
        <el-button type="primary" size="small" plain>
          <router-link to="/signin" tag="span">登 录</router-link>
        </el-button>
        <el-button type="primary" size="small" plain>
          <router-link to="/userReg" tag="span">注 册</router-link>
        </el-button>
        <el-button type="primary" size="small" plain>
          <router-link to="/contral" tag="span">控 制</router-link>
        </el-button>
      </div>
    </public-header>
    <router-view />
    <!-- <test></test> -->
  </div>
</template>

<script>
import SignIn from "./views/SignIn.vue";
import UserReg from "./views/UserReg.vue";
import Home from "./views/Home.vue";
import Contral from "./views/Contral.vue";
import Test from "./views/test.vue";
import PublicHeader from "./components/PublicHeader.vue";
import PublicFooterAdd1 from "./components/PublicFooterAdd1.vue";
import PublicFooterAdd2 from "./components/PublicFooterAdd2.vue";

export default {
  name: "app",
  components: {
    UserReg,
    // SignIn,
    Test,
    Contral,
    Home,
    PublicHeader,
    PublicFooterAdd1,
    PublicFooterAdd2
  }
};
</script>
<style lang="less">
body {
  margin: 0;
  padding: 0;
  cursor: pointer;
}
</style>
