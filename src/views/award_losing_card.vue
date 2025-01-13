<template>
  <div class="award-losing_card">
    <div :class="['text', { textAppear: !transitionalValue }]">
      <p style="font-size: 42px;">@{{ username }}</p>
      <p>祝贺你今年解锁了</p>
      <p class="bold">「补卡机SVIP用户」</p>
      <p>的成就！</p>
      <br>
      <p>真正的勇士敢于丢失自己的卡卡</p>
      <br>
      <!-- 加粗 -->
      <p style="font-weight: 600;"><span style="color: #a04c52d0">今年，你一共补办{{ cardTimes }}</span>次卡卡</p>
      <p style="font-weight: 600; font-size: 25px;">击败全校<span style="color: #a04c52d0">{{ cardPrecent }}%</span>的SDUers！</p>
      <br>
      
      <p>成功掌握“如何有效丢失饭卡”的技巧</p>
      <p>希望明年不要再往这方向继续努力啦</p>
      <p>争做补卡机零基础小白吧</p>

    </div>
    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img
        src="@/assets/img/award_losing_card.png"
        alt="加载失败"
      >
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch, ref } from "vue";
import userData from "@/assets/js/request";

const transitional = inject("transitional");
const transitionalValue = computed(() => transitional.value);
watch(transitionalValue, () => {
  console.log("开始页面内动画");
});
const username = userData.value.name;
const cardTimes = ref(userData.value.amount);
//保留2位小数
const cardPrecent = ref(Number(((24051-userData.value.amountRank)*100 / 24051).toFixed(2)));
</script>

<style scoped lang="scss">
.award-losing_card {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(240, 221, 154, 0.78),
    rgb(238, 193, 105)
  );
  .text {
    position: absolute;
    top: 96px;
    left: -100%;
    font-size: 20px;
    z-index: 1000;
    line-height: 1.3;
    transition: all 1s ease-in-out;
    p {
      font-family: "Microsoft YaHei UI";
    }
    p.bold {
      font-size: 30px;
      //加粗
      font-weight: 700;
      color: #a04c52d0;
    }
    &.textAppear {
      left: 32px;
    }
    p {
      margin: 0.5rem 0;
    }
  }

  .image {
    position: absolute;
    right: -8px;
    top: 96px;
    transition: all 1s ease-in-out;
    // transform: scale(2.7);
    transition-delay: 0.5s;
    opacity: 0;
    img {
      // width: 110px;
      height: 65vh;
      filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
      // height: 391px;
    }
    &.imgAppear {
      right: -2px;
      opacity: 1;
    }
  }
}
</style>

