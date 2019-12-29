<template>
  <div>
    <div id="main">
      <el-button type="primary" plain @click="getInfo" style="margin:20px 0 0 10%;">刷新记录</el-button>
      <div id="infoDiv">
        <div id="infoDivSon" v-for="(item,index) in listInfo" :key="index">
          <p>{{item.hisopname}}{{item.hisopdata}}{{item.hisopcontent}}</p>
          <p>{{item.hisopconcrete}}</p>
        </div>
      </div>
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
      listInfo: []
    };
  },
  mounted() {
    this.getInfo();
  },
  methods: {
    getInfo: function() {
      // console.log(this.$store.state.getusername);
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
          // console.log(res.data);
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
#infoDiv {
  width: 80%;
  height: 610px;
  margin: 20px 10% 0 10%;
  overflow: auto;

  #infoDivSon {
    border: 1px solid #409eff;
    margin-bottom: 20px;
    border-radius: 5px;
    color: #2f495e;
    padding-left: 2%;
  }
}
</style>