<template>
    <div class="page">
      <fade-transition>
        <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>今年，</p>
          <p>你获得了</p>
          <p v-for="(item,index) in userData.scholarship" v-if="index < 2"><span class="bold">{{ item }}</span>，</p>
          <p v-for="(item,index) in userData.honor" v-if="index < 2"><span class="bold">{{ item }}</span>荣誉称号，</p>
          <p>共计获得<span class="bold">{{ userData.scholarship.length + userData.honor.length }}</span>次荣誉，</p>
          <p>快奖励自己一朵小红花！</p>
        </div>
      </fade-transition>
      <div :class="['image-frame', { imgAppear: !transitionalValue }]">
          <img src="../assets/img/honor-frame.png" alt="加载失败">
        </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
          <img src="../assets/img/honor-flower.png" alt="加载失败">
        </div>
        <div class="image-filter imgAppear">
      <img src="../assets/img/filter.png" alt="加载失败">
    </div>
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch, ref } from 'vue'
  import { usePosition } from '@/assets/js/utils.js'
  import FadeTransition from '@/components/fade-transition.vue'
  import userData from '@/assets/js/request.js'
  
  const transitional = inject('transitional')
  const transitionalValue = computed(() => transitional.value)
  
  const index = ref(1)
  </script>
  
  <style scoped lang="scss">
  .page {
    width: 100%;
      height: 100%;
      margin:0px;
      background: url("../assets/img/honor-bg.png") no-repeat;
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
    .image-frame {
        position: absolute;
        top:0;
        left: 0;
        transition: all 1s ease-in-out;
        img {
          width: 100vw;
          // height: 391px;
        }
        &.imgAppear {
            width: 100%;
            height: 100%;
          left: 0;
          top: 0;
          overflow: hidden;
        }
      }
    .image {
        position: absolute;
        bottom:0;
        left: -112%;
        transition: all 1s ease-in-out;
        img {
          width: 100vw;
          // height: 391px;
        }
        &.imgAppear {
          left: 0;
          bottom: 0;
          overflow: hidden;
        }
      }
  }
  
  .text {
        position: absolute;
        top: 50vw;
        opacity: 0;
        left: 20vw;
        font-size: 18px;
        z-index: 1000;
        line-height: 1.4;
        transition: all 1s ease-in-out;
        transition-delay: 1s;
        p{
          font-family: 'Microsoft YaHei UI';
          color:#601a03;
          font-weight: 600;
        }
        span.bold{
          display: inline-block;
          font-size: 22px;
          font-weight: 700;
          color: #992a05;
        }
        &.textAppear {
          opacity: 1;
        }
        p {
          margin: 0.5rem 0;
        }
      }
  </style>