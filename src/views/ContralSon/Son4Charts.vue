<template>
  <div id="son4ser">
    <div id="main">
      <div id="myChart" :style="{width: '100%', height: '700px'}"></div>
    </div>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/component/legendScroll");
export default {
  name: "son4ser",
  data() {
    return {
      myarr: []
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine(res) {
      //设置两个数组存放饼图和信息数据
      var legendDrugName = [];
      var seriesDrugName = [];
      this.axios
        // .get("https://jiash1998.github.io/VueDrugProjectFormal/TestData.json")
        .get("http://"+this.$store.state.path+":8088/drugController/selectAllDrug")
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            legendDrugName.push(res.data[i].drugName);
            seriesDrugName.push({
              name: res.data[i].drugName,
              value: res.data[i].drugNum
            });
          }
          let myChart = echarts.init(document.getElementById("myChart"));
          // myChart.showLoading();
          myChart.setOption({
            title: { text: "药品库存" },
            //饼图每一块的详细信息
            tooltip: {
              trigger: "item",
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              type: "scroll",
              orient: "vertical",
              right: 10,
              top: 130,
              bottom: 20,
              data: legendDrugName,
              //选择哪些药品首先不展示
              selected: {
                诺氟沙星胶囊: false,
                氨苄西林胶囊: false,
                碳酸氢钠片: false,
                冻干人用狂犬病疫苗: false,
                盐酸环丙沙星滴眼液: false,
                白喉抗毒素: false,
                氨苄西林胶囊: false,
                破伤风抗毒素: false
              }
            },
            series: [
              {
                name: "药品",
                type: "pie",
                //位置
                center:['45%','50%'],
                radius: "65%",
                // ].sort(function(a, b) {
                //   return a.value - b.value;
                // }),
                data: seriesDrugName,
                roseType: "radius"//饼图根据数据呈现玫瑰图
              }
            ]
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
</style>