<template>
    <div class="libstats">
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/hotbook-content.png" alt="加载失败">
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
  .libstats {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/lib-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .image {
        position: absolute;
        right: 0;
        top: 0;
        transition: all 1s ease-in-out;
      img {
        width: 100vw;
        height: 100vh;
        object-fit: contain;
      }
    }
  }
  </style>