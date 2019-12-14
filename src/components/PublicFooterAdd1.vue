<template>
  <div id="PublicFooterAdd1">
    <div class="footer">
      <div id="footer_son1">
        <p id="son1_p1">链接</p>
        <ul v-for="(item,index) in link1" :key="index">
          <li>
            <el-link type="info" :underline="false">{{item.name}}</el-link>
          </li>
        </ul>
      </div>
      <div id="footer_son2">
        <p id="son2_p2">社区</p>
        <ul v-for="(item,index) in link2" :key="index">
          <li>
            <el-link type="info" :underline="false">{{item.name}}</el-link>
          </li>
        </ul>
      </div>
      <div id="footer_son3">
        <p id="son3_p3">可能感兴趣</p>
        <ul v-for="(item,index) in link3" :key="index">
          <li>
            <el-link type="info" :underline="false">{{item.name}}</el-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PublicFooterAdd1",
  data() {
    return {
      link1: [
        {
          name: "用户登录"
        },
        {
          name: "其他中药"
        },
        {
          name: "其他西药"
        }
      ],
      link2: [
        {
          name: "反馈意见"
        },
        {
          name: "贡献指南"
        },
        {
          name: "SegmentFault"
        }
      ],
      link3: [
        {
          name: "联系作者"
        },
        {
          name: "Find Bug"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@AllWidth: 100%;
@headHeightOrHei: 60px;
@footerSonWidth: 25%;
@footerSonHei: 150px;
@footerMarginLeft: 6%;

.footer {
  width: @AllWidth;
  height: 200px;
  background-color: #f7fbfd;

  ul li {
    list-style: none;
    line-height: 15px;
  }

  #footer_son1 {
    float: left;
    width: @footerSonWidth;
    height: @footerSonHei;
    margin-left: @footerMarginLeft * 2;

    #son1_p1 {
      font-size: 17px;
      font-weight: bold;
      margin-left: 40px;
    }
  }

  #footer_son2 {
    float: left;
    width: @footerSonWidth;
    height: @footerSonHei;

    #son2_p2 {
      font-size: 17px;
      font-weight: bold;
      margin-left: 40px;
    }
  }

  #footer_son3 {
    float: left;
    width: @footerSonWidth;
    height: @footerSonHei;
    margin-left: @footerMarginLeft;

    #son3_p3 {
      color: #666666;
      font-size: 17px;
      font-weight: bold;
      margin-left: 40px;
    }
  }
}
</style>