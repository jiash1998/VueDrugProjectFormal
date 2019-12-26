<template>
  <div id="Son2Pur">
    <div id="steps">
      <el-steps :active="$store.state.active" align-center finish-status="success">
        <el-step title="填写信息"></el-step>
        <el-step title="选择厂家"></el-step>
        <el-step title="提交完成"></el-step>
      </el-steps>
    </div>
    <div id="main">
      <el-form :model="purchaseForm" :rules="rules" ref="purchaseForm">
        <el-form-item label="批准文号" prop="purId">
          <!-- <el-autocomplete
            popper-class="my-autocomplete"
            v-model="purchaseForm.purId"
            :fetch-suggestions="querySearch"
            placeholder="输入批准文号"
            prop="purId"
          >
            <template slot-scope="{ item }">
              <div class="name">{{ item.value }}</div>
              <span class="addr">{{ item.name }}</span>
            </template>
          </el-autocomplete>-->
          <el-input v-model="purchaseForm.sourcedrugid" placeholder="输入批准文号"></el-input>
        </el-form-item>
        <el-form-item label="生产日期" prop="purDate">
          <el-date-picker
            type="date"
            v-model="purchaseForm.sourcedrugproduct"
            placeholder="选择日期"
            :picker-options="PickerOption"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="药品规格(g)" prop="purSpe">
          <el-input v-model="purchaseForm.sourcedrugspe" placeholder="药品规格以g为单位"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCheck('purchaseForm')">确认</el-button>
          <!-- <el-button type="primary" @click="submit">确认</el-button> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Son2Pur",
  data() {
    var validateId = (rule, value, callback) => {
      var testZ = /^(H(11|32|33|37)|S(11|32|33|37))\d{6}$/;
      if (!value || !testZ.test(value)) {
        console.log(value);
        return callback(new Error("批准文号(H/S+2位厂家代码+6位数字)"));
      } else {
        callback();
      }
    };
    var validateSpe = (rule, value, callback) => {
      console.log(value);
      var testZ = /^0+(.[2-5]{1})?$/;
      if (!value || !testZ.test(value)) {
        return callback(new Error("规格可选(0.2|0.3|0.4|0.5)"));
      } else {
        callback();
      }
    };
    var validateDate = (rule, value, callback) => {
      console.log(value);
      if (!value) {
        return callback(new Error("请选择时间"));
      } else {
        callback();
      }
    };
    return {
      purchaseForm: {
        sourcedrugid: "",
        sourcedrugsep: "",
        sourcedrugproduct: ""
      },
      PickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        sourcedrugid: [{ validator: validateId, change: "blur" }],
        sourcedrugsep: [{ validator: validateSpe, trigger: "blur" }],
        sourcedrugproduct: [{ validator: validateDate, trigger: "blur" }]
      }
    };
  },
  created() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  methods: {
    submit: function() {
      this.axios
        .post(
          "http://192.168.43.6:8088/usercontroller/selectalluserinfo",
          qs.stringify(data2),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitCheck: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var data = this.purchaseForm;
          this.axios
            .post(
              "http://192.168.43.6:8088/usercontroller/selectalluserinfo",
              qs.stringify(data),
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded"
                }
              }
            )
            .then(res => {
              console.log(res);
              this.$store.commit("purchaseDrugInfo",res);
              this.$store.commit("activeAdd");
              this.$router.replace("/contral/son2purnext");
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          alert("请完整填写!!!");
          return false;
        }
      });
    },
    querySearch(queryString, cb) {
      var myarr = [];
      this.axios
        .get("https://jiash1998.github.io/VueDrugProjectFormal/TestData.json")
        .then(res => {
          for (let i = 0; i < res.data.length; i++) {
            myarr.push({
              value: res.data[i].drugId,
              name: res.data[i].drugName
            });
          }
          var results = queryString
            ? myarr.filter(this.createFilter(queryString))
            : myarr;
          // 调用 callback 返回建议列表的数据
          cb(results);
        });
    },
    createFilter(queryString) {
      return druginfo => {
        return (
          druginfo.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son2pur.less";
</style>