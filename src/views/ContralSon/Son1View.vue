<template>
  <div id="son1View">
    <div id="main_left">
      <el-collapse>
        <el-collapse-item v-for="(item,index) in getDrug" :key="index">
          <template slot="title">
            {{item.drugName}}
            <i class="el-icon-info"></i>
            ({{item.drugId}})
          </template>
          <div id="el-collapse-div-p">{{item.drugIntroduction}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <!-- <div id="main_right"></div> -->
  </div>
</template>

<script>
export default {
  name: "son1View",
  data() {
    return {
      activeName: "1",
      getDrug: []
    };
  },
  mounted() {
    this.axiosGet();
    // this.ajaxGet();
  },
  methods: {
    axiosGet: function() {
      this.axios
        .get("http://192.168.43.6:8088/drugController/selectAllDrug")
        // .get("https://jiash1998.github.io/VueDrugProjectFormal/TestData.json")
        .then(res => {
          console.log(res.data);
          var self = this;
          self.getDrug = res.data;
        })
        .catch(err => {
          // console.log(err);
        });
    },
    ajaxGet: function() {
    //   this.axios
    //     .get("http://192.168.43.6:8088/usercontroller/selectalluserinfo")
    //     // .get("http://192.168.43.6:8088/drugController/selectAllDrug")
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son1view.less";
</style>