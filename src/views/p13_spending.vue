<template>
    <div class="consume">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p class="big">过去一年</p>
        <p style="margin-top: 20px;">你的校园卡消费记录</p>
        <p>显示了你在食堂的点点滴滴。</p>
        <br>
        <p>你最早的用餐时间是<span class="bold">早晨7:10</span></p>
        <p style="margin-left: 8vw;">最晚的用餐时间是<span class="bold">夜晚10:10</span></p>
        <br>
        <p>无论是晨光初露还是星光闪烁，</p>
        <p style="margin-left: 20vw;">我们的食堂始终为你守候。</p>
        <br>
        <p>你最常去的食堂是</p>
        <p style="margin-left: 10vw;"><span class="bold">软件园风味餐厅</span></p>
        <p style="margin-left: 8vw;">你的足迹最频繁出现在这里，</p>
        <p style="margin-left: 15vw;">它的味道一定最合你的心意。</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/consume-clock.png" alt="加载失败">
      </div>
      <div :class="['image-noodles', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/consume-noodles.png" alt="加载失败">
      </div>
      <!-- <div style="width: 100vw;position: absolute;right: 0;bottom: 0;">
        <img src="../assets/img/consume-filter.png" alt="加载失败">
      </div> -->
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
  .consume {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/consume-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 8vh;
      left: -100%;
      font-size: 20px;
      z-index: 1000;
      line-height: 1.5;
      transition: all 1s ease-in-out;
      p{
        font-family: 'Microsoft YaHei UI';
        color:#7d0000;
      }
      p.big{
        font-size: 40px;
      }
      span.bold{
        display: inline-block;
        font-size: 26px;
        //加粗
        font-weight: 700;
        color: #e60012;
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
      bottom:0;
      right: -112%;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        right: 0;
        top: 0;
      }
    }
    .image-noodles {
      position: absolute;
      bottom:0;
      right: 112%;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        right: 0;
        bottom: 0;
      }
    }
  }
  </style>