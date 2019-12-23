<template>
  <div id="son1View">
    <div id="main_left">
      <el-collapse>
        <el-collapse-item v-for="(item,index) in collpaseItem1" :key="index">
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
        <el-collapse-item v-for="(item,index) in collpaseItem2" :key="index">
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
      collpaseItem1: [
        {
          NameCn: "阿莫西林胶囊",
          NameEn: "H11033210",
          introduce:
            "阿莫西林(amoxicillin)是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "布洛芬片",
          NameEn: "H32021459",
          introduce:
            "布洛芬(Ibuprofen)为解热镇痛类，非甾体抗炎药。本品通过抑制环氧化酶，减少前列腺素的合成，产生镇痛、抗炎作用；通过下丘脑体温调节中枢而起解热作用。"
        },
        {
          NameCn: "头孢克肟片",
          NameEn: "H33173078",
          introduce:
            "头孢(Cephalosporin)可破坏细菌的细胞壁，并在繁殖期杀菌，对细菌的选择作用强，而对人几乎没有毒性，具有抗菌谱广、抗菌作用强、耐青霉素酶、过敏反应较青霉素类少见等优点，是高效、低毒、临床广泛应用的重要抗生素。"
        },
        {
          NameCn: "阿奇霉素胶囊",
          NameEn: "H37058413",
          introduce:
            "阿奇霉素(Azithromycin)该药品被用来治疗细菌感染，与红霉素等药物作用机理相同，也是通过抑制细菌蛋白质合成产生抑菌作用。其对革兰氏阳性及革兰氏阴性菌、厌氧菌等均有较好抗菌效应。"
        },
        {
          NameCn: "醋酸地塞米松片",
          NameEn: "H32020401",
          introduce:
            "地塞米松(DXMS)可用于治疗多种症状，包含风湿性疾病，某些皮肤病、严重过敏、哮喘、慢性阻塞性肺病、义膜性喉炎、脑水肿，也可能与抗生素合并用于结核病患者。早产婴儿使用地塞米松能改善预后。本品通常一天内即开始发挥药效，药效可维持约三天左右。"
        },
        {
          NameCn: "罗红霉素片",
          NameEn: "H37065605",
          introduce:
            "由红霉素链霉菌(Streptomyces erythreus)所产生的大环内酯(macrolide)系的代表性的抗菌素。此外，尚有其琥珀酸乙酯（琥乙红霉素）、丙酸酯的十二烷基硫酸盐（依托红霉素）供药用。[2]红霉素为白色或类白色的结晶或粉末；无臭，味苦；微有引湿性。在甲醇、乙醇或丙酮中易溶，在水中极微溶解。"
        },
        {
          NameCn: "硫酸庆大霉素片",
          NameEn: "H11023760",
          introduce:
            "庆大霉素[Gentamicin，正泰霉素（gentamycin）]系从放线菌科单孢子属发酵培养液中提得，系碱性化合物，是常用的氨基糖苷类抗生素。主要用于治疗细菌感染，尤其是革兰氏阴性菌引起的感染。庆大霉素能与细菌核糖体30s亚基结合，阻断细菌蛋白质合成。"
        },
        {
          NameCn: "克拉霉素片",
          NameEn: "H32183466",
          introduce:
            "克拉霉素(Clarith)，又名甲红霉素，是红霉素的衍生物，白色或类白色结晶性粉末，无臭，味苦。在氯仿中易溶，在丙酮或醋酸乙酯中溶解，在甲醇或乙醇中略溶，在水中不溶。"
        },
        {
          NameCn: "诺氟沙星胶囊",
          NameEn: "H33021322",
          introduce:
            "诺氟沙星(Ofloxacin)是氟喹诺酮类抗菌药。其可作用于细菌DNA旋转酶和（或）拓扑异构酶Ⅳ，抑制DNA的合成与复制而导致细菌死亡。"
        }
      ],
      collpaseItem2: [
        {
          NameCn: "感冒灵颗粒",
          NameEn: "H32020894",
          introduce:
            "扑热息痛(Paracetamol)商品名称有百服宁、必理通、泰诺、醋氨酚等。该品国际非专有药名为Paracetamol。它是最常用的非抗炎解热镇痛药，解热作用与阿司匹林相似，镇痛作用较弱，无抗炎抗风湿作用，是乙酰苯胺类药物中最好的品种。"
        },
        {
          NameCn: "盐酸肾上腺素注射液",
          NameEn: "H11021054",
          introduce:
            "肾上腺素(adrenaline)是由人体分泌出的一种激素。当人经历某些刺激（例如兴奋，恐惧，紧张等）分泌出这种化学物质，能让人呼吸加快（提供大量氧气），心跳与血液流动加速，瞳孔放大，为身体活动提供更多能量，使反应更加快速。"
        },
        {
          NameCn: "牛磺酸滴眼液",
          NameEn: "H37059050",
          introduce:
            "此药是一种最常用的半合成青霉素类抗生素，半衰期约为61.3分钟。在酸性条件下稳定，胃肠道吸收率达90%。阿莫西林杀菌作用强，穿透细胞膜的能力也强。是目前应用较为广泛的口服半合成青霉素之一。"
        },
        {
          NameCn: "碳酸氢钠片",
          NameEn: "H32024376",
          introduce:
            "碳酸氢钠(Sodium Bicarbonate)是一种无机化合物，化学式为NaHCO₃，俗称小苏打，白色细小晶体，在水中的溶解度小于碳酸钠，呈弱碱性。"
        },
        {
          NameCn: "冻干人用狂犬病疫苗",
          NameEn: "S11030033",
          introduce:
            "消栓灵(XSL)用于治疗急性脑梗塞、脑梗塞后遗症、高凝状态、心肌梗塞、肺心病、类风湿性关节炎及血栓性脉管炎等外周血管疾病。"
        },
        {
          NameCn: "盐酸环丙沙星滴眼液",
          NameEn: "H33950330",
          introduce:
            ""
        },
        {
          NameCn: "白喉抗毒素",
          NameEn: "H32820147",
          introduce:
            "环丙沙星，是环丙氟哌酸的别名，英文名Ciprofloxacin(INN)，是一种氟喹诺酮类化合抗生素药物。它是第二代氟喹诺酮抗菌素。它能杀死如炭疽一类的细菌，通过干扰导致DNA复制后反转录的酶，阻止DNA和蛋白质的合成。"
        },
        {
          NameCn: "氨苄西林胶囊",
          NameEn: "H32820147",
          introduce:
            "氨苄西林白色结晶性粉末，味微苦，溶于稀酸和稀碱，微溶于水，几乎不溶于氯仿、96%的乙醇、乙醚和固定油中。可以半合成广谱青霉素。不耐酶，对酸稳定，毒性低。对革兰氏阴性菌和阳性菌都有抑制作用，对大肠杆菌、流感杆菌，沙门氏菌、志贺氏菌和一些变形杆菌的作用较强。"
        },
        {
          NameCn: "破伤风抗毒素",
          NameEn: "S11970021",
          introduce:
            "TAT破伤风抗毒素，用于预防和治疗破伤风。已出现破伤风或其可疑症状时，应在进行外科处理及其他疗法的同时，及时使用抗毒素治疗。"
        }
      ]
    };
  },
  methods: {
    axiosGet:function(){
      this.axios.get(' https://jiash1998.github.io/VueDrugProjectFormal/TestData.json').then(res=>{
        console.log(res.data);
        
      })
    }
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/son1view.less";
</style>