<template>
  <div id="home">
    <div class="main">
      <div id="main_center1">
        <div id="center_divP1">
          <p>Western Medicine</p>
        </div>
        <div id="center_divP2">
          <p>
            西药(Western Medicine),相对于祖国传统中药而言，指西医用的药物,
            一般用化学合成方法制成或从天然产物提制而成;包括阿司匹林、青霉素、止痛片等。
            西药即为有机化学药品,无机化学药品和生物制品。看其说明书则有化学名、结构式，剂量上比中药精确,通常以克或毫克计。
          </p>
          <p>常见分类:抗感染类药物、麻醉药及其辅助药物、神经类药物、精神类药物、心血管类药物、呼吸类药物、消化类药物等。</p>
        </div>
      </div>
      <div id="main_segmentation"></div>
      <div id="main_center2">
        <div id="center2_son1">
          <p>
            为什么选择
            <span style="color:#409eff">海秀</span>医疗
          </p>
        </div>
        <div id="center2_son2">
          <div id="center2_son2_div" v-for="(item,index) in center2" :key="index">
            <div>
              <img :src="item.imgSrc" />
              <p id="p1">{{item.content1}}</p>
            </div>
            <div>
              <P id="p2">{{item.content2}}</P>
            </div>
          </div>
        </div>
      </div>
      <div id="main_segmentation"></div>
      <div id="main_center3">
        <div id="center3_son1">
          <P>
            谁在使用
            <span style="color:#409eff">海秀</span>系统
          </P>
        </div>
        <div id="center3_son2">
          <p>No!No One!!!</p>
          <p>不!你就是第一个!</p>
          <p>成为我们的合作者,你将体验到极致服务!</p>
        </div>
      </div>
      <div id="main_segmentation">
        <div id="segmentation_son">
          <el-button type="primary">
            <el-link href="./UserReg" :underline="false">成为我们的一员</el-link>
          </el-button>
        </div>
      </div>
    </div>
    <public-footer-add1></public-footer-add1>
  </div>
</template>

<script>
import PublicHeader from "../components/PublicHeader.vue";
import PublicFooterAdd1 from "../components/PublicFooterAdd1.vue";
export default {
  name: "home",
  components: {
    PublicHeader,
    PublicFooterAdd1
    // 测试
  },
  data() {
    return {
      form: {
        input1: "",
        input2: ""
      },
      center2: [
        {
          imgSrc: require("../assets/img/porforment.png"),
          content1: "高效能",
          content2:
            "有了海秀系统,你可以体验到高效的办公效率。我们尽可能的简化你的操作,去除大多不必要的操作。如果你有良好的建议或者意见，可以向我们提供！你可以在底部找到我们的信息"
        },
        {
          imgSrc: require("../assets/img/enjoyable.png"),
          content1: "友好的",
          content2:
            "我们的主要焦点是用户体验。我们爱海秀，并不断改进系统，所以希望你也爱它！💙我们提供友好的用户体验、良好的信息保护。如果出现问题，我们乐于助人的社区会帮助你。"
        },
        {
          imgSrc: require("../assets/img/protective.png"),
          content1: "保护性",
          content2:
            "对于海秀系统的安全性，你大可放心！我们有最好的云端服务器存储你的信息以保证它不被除了你的任何人以外轻易取得。同时我们也不会传播你的任何信息。"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
@import "../assets/css/home.less";
</style>
