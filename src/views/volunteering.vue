<template>
    <div class="volunteering">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>过去一年，</p>
        <p>全校学生参与志愿活动共计<span class="bold">567</span>小时</p>
        <br>
        <p>其中，</p>
        <p>你参与了<span class="bold">28</span>小时的志愿活动，</p>
        <p>共计<span class="bold">6</span>次</p>
        <br>
        <p>历时最长的是<span class="bold">图书馆志愿活动</span>，</p>
        <p>长达<span class="bold">6</span>小时</p>
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
      top: 8vh;
      left: -100%;
      font-size: 20px;
      z-index: 1000;
      line-height: 1.5;
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