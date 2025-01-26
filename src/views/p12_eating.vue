<template>
    <div class="consume">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p style="margin-left: 45vw;" class="big">过去一年</p>
        <p style="text-align: right;">你的校园卡见证了</p>
        <p style="text-align: right;">你在校园里的每一次用餐</p>
        <p style="margin-top: 4vw;margin-left: 20px;">你的年度最高单笔消费记录是</p>
        <p style="margin-left: 30vw;"><span class="bold">{{ maxAmount }}元</span></p>
        <p style="margin-top: 20px;">这笔消费发生在<span class="bold">{{ maxAmountCanteen }}</span></p>
        <p style="margin-left: 8vw;">那可能是你为了</p>
        <p style="margin-left: 15vw;">庆祝某个特别的日子</p>
        <p style="margin-left: 8vw;">而犒劳自己的一顿大餐。</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/eating-card.png" alt="加载失败">
      </div>
      <div :class="['image-noodles', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/eating-count.png" alt="加载失败">
      </div>
      <div class="image-filter imgAppear">
      <img src="../assets/img/filter.png" alt="加载失败">
    </div>
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch, ref } from 'vue'
  import beginImg from '../assets/svg/begin_svg.vue'
  import userData from '../assets/js/request';

  const {maxAmount, maxAmountCanteen} = userData.value;
  
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
    background: url("../assets/img/eating-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    overflow-y: hidden;
    .image-filter {
    position: absolute;

    img {
      width: 200vw;
      opacity: 0.15;
    }

    &.imgAppear {
      right: 0;
      bottom: 0;
    }
  }
    .text {
      position: absolute;
      top: 12vh;
      left: -100%;
      z-index: 1000;
      line-height: 1.8;
      transition: all 1s ease-in-out;
      color:#7d0000;
      p.big{
        font-size: 40px;
      }
      span.bold{
        color: #e60012;
      }
      &.textAppear {
        left: 8vw;
      }
    }
    .image {
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
        top: 0;
        overflow: hidden;
      }
    }
    .image-noodles {
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
      }
    }
  }
  </style>