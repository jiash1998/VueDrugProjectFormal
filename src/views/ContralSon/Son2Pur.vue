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
          <el-autocomplete
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
          </el-autocomplete>
        </el-form-item>
        <el-form-item label="药品规格" prop="purSpe">
          <el-input v-model="purchaseForm.purSpe" placeholder="药品规格以g为单位"></el-input>
        </el-form-item>
        <el-form-item label="生产日期" prop="purDate">
          <el-date-picker
            type="date"
            v-model="purchaseForm.purDate"
            placeholder="选择日期"
            :picker-options="PickerOption"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitCheck('purchaseForm')">确认</el-button>
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
      if (!value) {
        return callback(new Error("批准文号(H/B/S+2位生产编号+6位数字)"));
      } else {
        callback();
      }
    };
    var validateSpe = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("规格以g为单位"));
      } else {
        callback();
      }
    };
    var validateDate = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请选择时间"));
      } else {
        callback();
      }
    };
    return {
      purchaseForm: {
        purId: "",
        purSpe: "",
        purDate: ""
      },
      druginfo: [],
      PickerOption: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      rules: {
        purId: [{ validator: validateId, change: "blur" }],
        purSpe: [{ validator: validateSpe, trigger: "blur" }],
        purDate: [{ validator: validateDate, trigger: "blur" }]
      }
    };
  },
  created() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function() {
      history.pushState(null, null, document.URL);
    });
  },
  mounted() {
    this.druginfo = this.loadAll();
  },
  methods: {
    submitCheck: function(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$store.commit("activeAdd");
          this.$router.replace("/contral/son2purnext");
        } else {
          alert("请完整填写!!!");
          return false;
        }
      });
    },
    querySearch(queryString, cb) {
      var druginfo = this.druginfo;
      var results = queryString
        ? druginfo.filter(this.createFilter(queryString))
        : druginfo;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return druginfo => {
        return (
          druginfo.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    loadAll: function() {
      return [
        { value: "H20143140", name: "阿莫西林" },
        { value: "H20023191", name: "布洛芬" },
        { value: "H20173078", name: "头孢" },
        { value: "H20034006", name: "阿奇霉素片" },
        { value: "H45020401", name: "地塞米松片" },
        { value: "H20033442", name: "红霉素胶囊" }
      ];
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son2pur.less";
</style>