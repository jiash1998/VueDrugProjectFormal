<template>
  <div id="son1View">
    <div id="main_left">
      <el-collapse>
        <el-collapse-item v-for="(item,index) in collpaseItem" :key="index">
          <template slot="title">
            {{item.NameCn}}
            <i class="el-icon-info"></i>
            ({{item.NameEn}})
          </template>
          <div id="el-collapse-div-p">{{item.introduce}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div id="main_right">
      <el-collapse>
        <el-collapse-item v-for="(item,index) in collpaseItem" :key="index">
          <template slot="title">
            {{item.NameCn}}
            <i class="el-icon-info"></i>
            ({{item.NameEn}})
          </template>
          <div id="el-collapse-div-p">{{item.introduce}}</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "son1View",
  data() {
    return {
      activeName: "1",
      collpaseItem: [
        {
          NameCn: "阿莫西林",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "布洛芬",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "头孢",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "阿奇霉素",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "地塞米松片",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "阿莫西林",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "阿莫西林",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "阿莫西林",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "阿莫西林",
          NameEn: "amoxicillin",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son1view.less";
</style>