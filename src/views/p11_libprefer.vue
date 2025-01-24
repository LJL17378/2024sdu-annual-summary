<template>
    <div class="libprefer">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p>你有<span class="bold">30</span>天在图书馆度过，</p>
        <p>一共借阅了<span class="bold">5</span>本书，</p>
        <p>其中，</p>
        <p>你最喜欢待在<span class="bold">  </span>，</p>
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
    background: url("../assets/img/lib-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 10vh;
      left: -100%;
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