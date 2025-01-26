<template>
    <div class="libprefer">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>在忙碌的期末周，</p>
        <p>图书馆的大门被推开<b>{{ userData.libraryTimeOnTest }}</b>次，</p>
        <p>安静的图书馆里</p><p>坐满了一排排用功的身影，</p>
        <p>其中有你的身影吗？</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libexam-book.png" alt="加载失败">
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
  // const username = ref('xx');
  </script>
  
  <style scoped lang="scss">
  .libprefer {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/libexam-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 22vh;
      opacity: 0;
      left: 8vw;
      z-index: 1000;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      color:#d5eefa;
      line-height: 2;
      span.bold{
        color: #edf9ff;
      }
      &.textAppear {
        opacity: 1;
      }
    }
    .image {
      position: absolute;
      bottom:-32vh;
      right: 0;
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
  }
  </style>