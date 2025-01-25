<template>
    <div class="libprefer">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>在忙碌的期末周，</p>
        <p>图书馆的大门被推开xx次，</p>
        <p>安静的图书馆里坐满了一排排用功的身影，</p>
        <p>其中有你的身影吗？</p>
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libexam-book.png" alt="加载失败">
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
  .libprefer {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/libexam-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 20vh;
      opacity: 0;
      left: 8vw;
      font-size: 20px;
      z-index: 1000;
      line-height: 2;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      p{
        font-family: 'Microsoft YaHei UI';
        color:#aad6ea;
        font-weight: 700;
      }
      span.bold{
        display: inline-block;
        font-size: 26px;
        //加粗
        font-weight: 700;
        color: #cfe8f3;
      }
      &.textAppear {
        opacity: 1;
      }
      p {
        margin: 0.5rem 0;
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