<template>
  <div class="begin">
    <div :class="['text', { textAppear: !transitionalValue }]">
      <p>一年时间轻轻划过</p>
      <p>过去的一年满是美好回忆</p>
      <p>快来按下按钮</p>
      <p>开启你的年度报告</p>
      <p>回味专属于你的2024</p>
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch, ref } from 'vue'
import beginImg from '../assets/svg/begin_svg.vue'
import userData from '../assets/js/request';

const transitional = inject('transitional')
const transitionalValue = computed(() => transitional.value)

</script>

<style scoped lang="scss">
.begin {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(171, 299, 248, 0.64), rgb(215,213,241,0.8412) 30%,rgba(250,199,236,1));
  .text {
    position: absolute;
    top: 8vh;
    left: -100%;
    font-size: 24px;
    z-index: 1000;
    line-height: 2;
    transition: all 1s ease-in-out;
    p{
      font-family: 'Microsoft YaHei UI';
    }
    p.bold{
      font-size: 32px;
      //加粗
      font-weight: 700;
      color: #a04c52d0;
    }
    &.textAppear {
      left: 8vw;
    }
    p {
      margin: 0.5rem 0;
    }
  }
  .image {
    position: absolute;
    bottom:32vh;
    right: -150%;
    transition: all 1s ease-in-out;
    transform: scale(2.7);
    transition-delay: 0.5s;
    img {
      width: 120px;
      filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
      // height: 391px;
    }
    &.imgAppear {
      right: 64px;
      bottom: 156px;
    }
  }
}
</style>
