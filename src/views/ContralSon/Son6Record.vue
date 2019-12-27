<template>
  <div>
    <div id="main">
      <el-button type="primary" plain @click="botTest">刷新记录</el-button>
      <div>{{listInfo}}</div>
    </div>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  name: "app",
  components: {
    // Botui
  },
  data() {
    return {
      listInfo:[]
    }
  },
  mounted() {},
  methods: {
    botTest: function() {
      console.log(this.$store.state.getusername);
      var data = { hisopname: this.$store.state.getusername };
      this.axios
        .post(
          "http://192.168.43.6:8088/historycontroller/selectselfhistory",
          qs.stringify(data),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res.data);
          this.listInfo = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>