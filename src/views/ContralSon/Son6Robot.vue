<template>
  <div>
    <P>ROBOT</P>
    <div class="botui-app-container" id="botui-app">
      <!-- <bot-ui></bot-ui> -->
    </div>
  </div>
</template>

<script>
import Botui from "../../Botui/botui.min.js";
export default {
  name: "app",
  mounted() {
    // this.botTest();
  },
  methods: {
    botTest: function() {
      var botuiapp = document.getElementById("botui-app");
      var botui = new BotUI("botuiapp"); // 参数是容器的id

      botui.message
        .bot({
          // 第一条信息
          delay: 200,
          content: "hello"
        })
        .then(function() {
          return botui.message.bot({
            // 第二条信息
            delay: 1000, // 等待1秒
            content: "how are you?"
          });
        })
        .then(function() {
          return botui.action.button({
            // 与用户交互
            delay: 1000,
            action: [
              {
                text: "Good",
                value: "good"
              },
              {
                text: "Really Good",
                value: "really_good"
              }
            ]
          });
        })
        .then(function(res) {
          return botui.message.bot({
            delay: 1000,
            content: "You are feeling " + res.text + "!"
          });
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../Botui/botui.min.css";
@import "../../Botui/botui-theme-default.css";
</style>