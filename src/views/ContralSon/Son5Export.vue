<template>
  <div id="son1View">
    <div id="main_left">
      <el-button type="primary" @click="export2Excel" plain>Excel导出</el-button>
      <el-table :data="getDrug" stripe>
        <el-table-column label="药名" prop="drugName"></el-table-column>
        <el-table-column label="批准文号" prop="drugId"></el-table-column>
        <el-table-column label="价格" prop="drugPrice"></el-table-column>
        <el-table-column label="库存" prop="drugNum"></el-table-column>
        <el-table-column label="规格" prop="drugSpe"></el-table-column>
        <el-table-column label="生产日期" prop="drugProduct"></el-table-column>
        <el-table-column label="保质期" prop="drugShelflife"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import qs from "querystring";
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
        .get("http://192.168.43.6:8088/drugController/selectAllDrug")
        // .get("https://jiash1998.github.io/VueDrugProjectFormal/TestData.json")
        .then(res => {
          var self = this;
          self.getDrug = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    toLMK() {
      var url = "http://192.168.43.6:8088/excelcontroller/exportexcel";
      // var data ={exportsign:value}
      this.axios
        .post(url,{
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log("后台返回："+res);
          alert("导出成功");
        })
        .catch(err => {
          console.log(err);
        });
    },
    export2Excel() {
      this.axios
        .get("http://192.168.43.6:8088/drugController/selectAllDrug")
        // .get("https://jiash1998.github.io/VueDrugProjectFormal/TestData.json")
        .then(res => {
          // var self = this;
          // self.getDrug = res.data;
          // this.toLMK("ExportExcel");
          this.toLMK();
          require.ensure([], () => {
            const {
              export_json_to_excel
            } = require("../../excel/Export2Excel");
            //設置表格头
            const tHeader = [
              "姓名",
              "批准文号",
              "价格",
              "数量",
              "规格",
              "生产日期",
              "保质期"
            ]; // 上面设置Excel的表格第一行的标题
            const filterVal = [
              "drugName",
              "drugId",
              "drugPrice",
              "drugNum",
              "drugSpe",
              "drugProduct",
              "drugShelflife"
            ]; // 设置tableData里对象的属性
            var tableData = [];
            for (let i = 0; i < res.data.length; i++) {
              tableData.push({
                drugName: res.data[i].drugName,
                drugId: res.data[i].drugId,
                drugPrice: res.data[i].drugPrice,
                drugNum: res.data[i].drugNum,
                drugSpe: res.data[i].drugSpe,
                drugProduct: res.data[i].drugProduct,
                drugShelflife: res.data[i].drugShelflife
              });
            }
            console.log(tableData);
            const list = tableData; //把data里的tableData存到list
            const data = this.formatJson(filterVal, list);
            export_json_to_excel(tHeader, data, "库存信息表");
          });
        });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son1view.less";
</style>