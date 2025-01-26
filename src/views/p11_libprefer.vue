<template>
    <div class="libprefer">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>你有<span class="bold">{{ libraryDay }}</span>天在图书馆度过，</p>
        <p v-if="borrowNum">一共借阅了<span class="bold">{{ borrowNum }}</span>本书，</p>
        <p>其中，</p>
        <p>你最喜欢待在<span class="bold" style="font-size: 22px;">{{ preferLibrary }}</span>，</p>
        <p>这些书籍都将化作你进步的阶梯！</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libprefer-book.png" alt="加载失败">
      </div>
      <div :class="['image', 'imgAppear']">
        <img src="../assets/img/libprefer-cloud.png" alt="加载失败">
      </div>
      <div :class="['image-birds', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libprefer-birds.png" alt="加载失败">
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch, ref } from 'vue'
  import userData from '../assets/js/request.js'
  
  const transitional = inject('transitional')
  const transitionalValue = computed(() => transitional.value)
  watch(transitionalValue, () => {
    console.log('开始页面内动画')
  })
  const {libraryDay, borrowNum, preferLibrary} = userData.value;
  </script>
  
  <style scoped lang="scss">
  .libprefer {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/lib-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 10vh;
      left: -100%;
      z-index: 1000;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      color:#aad6ea;
      span.bold{
        color: #cfe8f3;
      }
      &.textAppear {
        left: 8vw;
      }
    }
    .image {
      position: absolute;
      bottom:-32vh;
      right: 150%;
      transition: all 1s ease-in-out;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        right: 0;
        bottom: 0;
      }
    }
    .image-birds {
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