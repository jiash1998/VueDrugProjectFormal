<template>
  <div id="son4ser">
    <div id="main">
      <div id="myChart" :style="{width: '100%', height: '500px'}"></div>
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
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: { text: "药品库存" },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          type: "scroll",
          orient: "vertical",
          right: 10,
          top: 20,
          bottom: 20,
          data: [
            "阿莫西林",
            "头孢",
            "扑热息痛",
            "感冒灵",
            "金嗓子",
            "珍视明",
            "999",
            "",
            "阿奇霉素",
            "地塞米松",
            "庆大霉素",
            "克拉霉素",
            "氟氯沙星",
            "肾上腺素",
            "碳酸氢钠"
          ],
          selected: {
            红霉素: false,
            阿奇霉素: false,
            地塞米松: false,
            庆大霉素: false,
            克拉霉素: false,
            氟氯沙星: false,
            肾上腺素: false,
            碳酸氢钠: false
          }
        },
        series: [
          {
            name: "药品",
            type: "pie",
            radius: "80%",
            data: [
              { value: 335, name: "阿莫西林" },
              { value: 310, name: "头孢" },
              { value: 274, name: "扑热息痛" },
              { value: 235, name: "感冒灵" },
              { value: 400, name: "金嗓子" },
              { value: 325, name: "珍视明" },
              { value: 120, name: "999" },
              { value: 214, name: "红霉素" },
              { value: 205, name: "阿奇霉素" },
              { value: 490, name: "地塞米松" },
              { value: 325, name: "庆大霉素" },
              { value: 120, name: "克拉霉素" },
              { value: 214, name: "氟氯沙星" },
              { value: 205, name: "肾上腺素" },
              { value: 490, name: "碳酸氢钠" }
            ].sort(function(a, b) {
              return a.value - b.value;
            }),
            roseType: "radius"
          }
        ]
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>