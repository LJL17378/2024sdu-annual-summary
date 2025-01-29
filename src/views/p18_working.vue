<template>
    <div class="working">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <p style="font-size: 26px;">今年，</p>
        <p>共有<span class="bold">34508</span>人次参与勤工助学，</p>
        <p>收获报酬共计<span class="bold">2299.25</span>万元。</p>
        <p>在缓解生活压力的同时丰富了实践经验</p>
        <p>提升了工作技能</p>
        <div v-if="workStudy">
          <p>其中，</p>
          <p>你在<span class="bold">{{ workStudy }}</span>工作过</p>
         <p>用汗水换取丰厚的劳动成果。</p>
        </div>  
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/working-right.png" alt="加载失败">
      </div>
      <div :class="['image-fish', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/working-left.png" alt="加载失败">
      </div>
      <div class="image-filter imgAppear">
      <img src="../assets/img/filter.png" alt="加载失败">
    </div>
      <!-- <div style="width: 100vw;position: absolute;right: 0;bottom: 0;">
        <img src="../assets/img/consume-filter.png" alt="加载失败">
      </div> -->
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch, ref } from 'vue'
import userData from '../assets/js/request'
  
  const transitional = inject('transitional')
  const transitionalValue = computed(() => transitional.value)
  watch(transitionalValue, () => {
    console.log('开始页面内动画')
  })
  const { workStudy } = userData.value;

  </script>
  
  <style scoped lang="scss">
  .working {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/working-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
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
  .text {
      position: absolute;
      top: 10vh;
      left: -100%;
      font-size: 20px;
      z-index: 1000;
      line-height: 2.2;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      color: white;
      text-shadow: #053571 1px 1px 2px;
      span.bold{
        color: #053571;
        text-shadow: none;
      }
      &.textAppear {
        left: 8vw;
      }
    }
    .image {
      position: absolute;
      top:0;
      right: -112%;
      transition: all 1s ease-in-out;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        width: 100%;
        height: 100%;
        right: 0;
        top: 0;
        overflow: hidden;
      }
    }
    .image-fish {
      position: absolute;
      bottom:0;
      left:0;
      transition: all 1s ease-in-out;
      img {
        width: 80vw;
        // height: 391px;
      }
      &.imgAppear {
        right: 0;
        bottom: 0;
        overflow: hidden;
      }
    }
  }
  </style>