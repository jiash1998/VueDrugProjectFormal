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
          <div id="el-collapse-div-p">{{item.drugIntrodution}}</div>
        </el-collapse-item>
      </el-collapse>-->
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
  },
  methods: {
    axiosGet: function() {
      this.axios
        .get("https://jiash1998.github.io/VueDrugProjectFormal/TestData.json")
        .then(res => {
          // console.log(res.data);
          var self = this;
          self.getDrug = res.data;
          // console.log(self.getDrug[0].drugNum);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son1view.less";
</style>