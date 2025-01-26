<template>
    <div class="birthday">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>在SDU，</p>
        <p>有<span class="bold">{{ userData.sameBirthday }}</span>位同学与你一起庆祝生日，</p>
        <p>或许你认识他们。</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/birthday-cake.png" alt="加载失败">
      </div>
      <div class="image-filter imgAppear"> 
        <img src="../assets/img/filter.png" alt="加载失败">
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch, ref } from 'vue'
  import userData from '@/assets/js/request.js'
  
  const transitional = inject('transitional')
  const transitionalValue = computed(() => transitional.value)
  watch(transitionalValue, () => {
    console.log('开始页面内动画')
  })
  // const username = ref('xx');
  </script>
  
  <style scoped lang="scss">
  .birthday {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/birthday-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 20vh;
      left: -100%;
      z-index: 1000;
      transition: all 1s ease-in-out;
      color:#a06b02;
      &.textAppear {
        left: 8vw;
      }
      p {
        margin: 0.5em 0;
      }
    }
    .image-filter {
      position: absolute;
      img {
        width: 250vw;
        opacity: 0.15;
      }
      &.imgAppear {
        right: 0;
        bottom: 0;
      }
    }
    .image {
      position: absolute;
      bottom:0;
      right: 0;
      opacity: 0;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        opacity: 1;
      }
    }
  }
  </style>