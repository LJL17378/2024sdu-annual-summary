<template>
    <div class="volunteering">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>今年，</p>
        <p>你参加了<span class="bold">x</span>次志愿活动，</p>
        <p>贡献了<span class="bold">x</span>小时时长，</p>
        <p>成为了一名优秀的志愿者！</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/volunteering-plane.png" alt="加载失败">
      </div>
      <div :class="['image-heart', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/volunteering-heart.png" alt="加载失败">
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch, ref } from 'vue'
  
  const transitional = inject('transitional')
  const transitionalValue = computed(() => transitional.value)
  watch(transitionalValue, () => {
    console.log('开始页面内动画')
  })
  // const username = ref('xx');
  </script>
  
  <style scoped lang="scss">
  .volunteering {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/volunteering-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 20vh;
      left: -100%;
      font-size: 20px;
      z-index: 1000;
      line-height: 2;
      transition: all 1s ease-in-out;
      p{
        font-family: 'Microsoft YaHei UI';
        color:white;
      }
      span.bold{
        display: inline-block;
        font-size: 24px;
        //加粗
        font-weight: 700;
        color: #ee6262;
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
      bottom:-32vh;
      right: 150%;
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
    .image-heart {
      position: absolute;
      bottom:-8vh;
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