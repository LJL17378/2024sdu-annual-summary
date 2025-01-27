<template>
    <div class="busprefer">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <!-- 到时候确定顺序了之后用index来判断修改 -->
        <p style="margin-top: 7vh;">今年，</p>
        <p>你最常搭乘的校车牌号为<span class="bold">{{ busNumber }}</span></p>
        <p>感谢司机师傅的辛勤付出</p>
        <br>
        <p>当校车沿着道路向前驶过，</p>
        <p>窗外熟悉的景象一一掠过，</p>
        <p>你的思绪是否也随风驰骋云霄？</p>
        <!-- <p style="margin-top: 20px;">校车共发车<span class="bold">720</span>次，</p>
        <p>每一次都是知识与梦想的启航。</p>
        <p style="margin-top: 20px;">你搭乘校车共计<span class="bold">{{ busCount }}</span>次，</p>
        <p>跨越校区的每一次</p>
        <p>都是对学术探索的执着追求。</p> -->
      </div>
      <div :class="['image-ballon', { imgAppear: !transitionalValue ||currentIndex === 17 }]">
        <img src="../assets/img/busprefer-ballon.png" alt="加载失败">
      </div>
      <div class="image-filter imgAppear"> 
        <img src="../assets/img/bus-filter.png" alt="加载失败">
      </div>
      
      <!-- <div style="width: 100vw;position: absolute;right: 0;bottom: 0;">
        <img src="../assets/img/consume-filter.png" alt="加载失败">
      </div> -->
    </div>
  </template>
  
  <script setup>
  import { computed, inject, watch} from 'vue'
    import userData from '../assets/js/request';

  const {busCount, busNumber} = userData.value;
  
  const transitional = inject('transitional')
  const currentIndex = inject('currentIndex')
  const transitionalValue = computed(() => transitional.value)
  watch(transitionalValue, () => {
    console.log('开始页面内动画')
  })
  // const username = ref('xx');
  </script>
  
  <style scoped lang="scss">
  @keyframes down {
    80%{
        transform: translateY(102vh);
    }
    100%{
        transform: translateY(101vh);
    }
  }
  @keyframes shake {
    0%{
        transform: translateY(101vh);
    }
    35%{
        transform: translateY(100vh) translateX(-1vh) rotate(-1deg);
    }
    65%{
        transform: translateY(100vh) translateX(1vh) rotate(1deg);
    }
    100%{
        transform: translateY(101vh);
    }
  }
  .busprefer {
    z-index: -17;
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/busprefer-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 7vh;
      left: 13vw;
      opacity: 0;
      z-index: 1000;
      line-height: 1.5;
      transition: all 1s ease-in-out;
      transition-delay: 1s;
      color:#1a428a;
      p.big{
        font-size: 26px;
      }
      span.bold{
        display: inline-block;
        font-size: 26px;
        //加粗
        font-weight: 700;
        color: #132f63;
      }
      &.textAppear {
        opacity: 1;
      }
      p {
        margin: 0.5rem 0;
      }
    }
    .image-ballon {
      position: absolute;
      bottom:100vh;
      right: 0;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        animation-name: down, shake;
        animation-duration: 3s, 9s;
        animation-iteration-count: 1, infinite;
        animation-delay: 0s,3s;
      }
    }
    .image-filter {
      position: absolute;
      bottom:29.4vw;
      right: -100vw;
      transition: all 2s ease-in-out;
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