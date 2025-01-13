<template>
  <div class="begin">
    <div :class="['text', { textAppear: !transitionalValue }]">
      <p>岁月不局, 时节如流</p>
      <p class="bold">hi, @{{ userData.name }}</p>
      <p>欢迎你进入SDU时间列车</p>
      <p>很荣幸能一起回顾</p>
      <p>2023-2024学年</p>
      <p>的神秘旅途</p>
    </div>
    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img src="@/assets/img/begin.png" alt="加载失败">
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch, ref } from 'vue'
import beginImg from '../assets/svg/begin_svg.vue'
import userData from '../assets/js/request';

const transitional = inject('transitional')
const transitionalValue = computed(() => transitional.value)
watch(transitionalValue, () => {
  console.log('开始页面内动画')
})
// const username = ref('xx');
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
