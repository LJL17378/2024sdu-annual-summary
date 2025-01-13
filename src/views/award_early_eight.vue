<template>
  <div class="award-early-eight">
    <div :class="['text', { textAppear: !transitionalValue }]">
      <p style="font-size: 42px;">@{{ username }}</p>
      <p>祝贺你今年解锁了</p>
      <p class="bold">「早八人，早八魂」</p>
      <p>的荣誉成就！</p>
      <br>
      <!-- 加粗 -->
      <p>今年，你有<span class="bold"><span style="color: #a04c52d0">{{ earlyEightTimes }}门</span></span>课是早八</p>
      <p>在无数个清晨与朝阳为伴</p>
      <p>与鸟鸣同行</p>
      <br>
      
      <p>你是早八先锋</p>
      <p>是晨曦学者</p>
      <p>是山大校园里默默奋斗的追梦人</p>
    </div>
    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img
        src="@/assets/img/award_early_eight.png"
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
const username = ref(userData.value.name);
const earlyEightTimes = ref(userData.value.eight_am.length);
</script>

<style scoped lang="scss">
.award-early-eight {
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
      font-size: 32px;
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

