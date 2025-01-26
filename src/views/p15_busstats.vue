<template>
    <div class="bus">
      <div :class="['text', { textAppear: !transitionalValue }]">
        <!-- 到时候确定顺序了之后用index来判断修改 -->
        <p class="big">这一年</p>
        <p style="margin-top: 20px;">你在校车的穿梭中</p>
        <p>体验了校园的四季更迭。</p>
        <!-- <p style="margin-top: 20px;">校车共发车<span class="bold">720</span>次，</p>
        <p>每一次都是知识与梦想的启航。</p>
        <p style="margin-top: 20px;">你搭乘校车共计<span class="bold">{{ busCount }}</span>次，</p>
        <p>跨越校区的每一次</p>
        <p>都是对学术探索的执着追求。</p> -->
      </div>
      <div :class="['image-light', { LightImgAppear: !transitionalValue }]">
        <img src="../assets/img/bus-light.png" alt="加载失败">
      </div>
      <div class="image-hillside imgAppear">
        <img src="../assets/img/bus-hillside.png" alt="加载失败">
      </div>
      <div :class="['image-bus', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/bus-bus.png" alt="加载失败">
      </div>
      <flower type="purple-light" scale="0.1" x1="71" y1="63" x2="60" :seen="!transitionalValue" degree="10"></flower>
      <flower type="pink-normal" scale="0.15" x1="71" y1="71" x2="90" :seen="!transitionalValue" degree="54"></flower>
      <flower type="purple-dark" scale="0.1" x1="88" y1="66" x2="60" :seen="!transitionalValue" degree="0"></flower>
      <flower type="pink-normal" scale="0.17" x1="85" y1="66" x2="102" :seen="!transitionalValue" degree="54"></flower>
      <flower type="pink-normal" scale="0.17" x1="99.5" y1="75" x2="102" :seen="!transitionalValue" degree="10"></flower>
      <flower type="pink-light" scale="0.25" x1="97.5" y1="72" x2="150" :seen="!transitionalValue" degree="10"></flower>
      <flower type="purple-light" scale="0.17" x1="80" y1="78" x2="102" :seen="!transitionalValue" degree="10"></flower>
      <flower type="purple-light" scale="0.17" x1="87" y1="103" x2="102" :seen="!transitionalValue" degree="10"></flower>
      <flower type="pink-normal" scale="0.33" x1="89" y1="95" x2="198" :seen="!transitionalValue" degree="195"></flower>
      <flower type="purple-normal" scale="0.35" x1="91" y1="145" x2="210" :seen="!transitionalValue" degree="10"></flower>
      <flower type="pink-dark" scale="0.28" x1="94" y1="165" x2="168" :seen="!transitionalValue" degree="30"></flower>
      <flower type="pink-normal" scale="0.55" x1="85" y1="154" x2="330" :seen="!transitionalValue" degree="0"></flower>
      <flower type="pink-normal" scale="0.42" x1="96" y1="194" x2="252" :seen="!transitionalValue" degree="0"></flower>
      <flower type="purple-light" scale="0.2" x1="90" y1="206" x2="120" :seen="!transitionalValue" degree="30"></flower>
      <flower type="purple-dark" scale="0.14" x1="13" y1="205" x2="84" :seen="!transitionalValue" degree="0"></flower>
      <flower type="pink-normal" scale="0.42" x1="20" y1="199" x2="252" :seen="!transitionalValue" degree="0"></flower>
      <flower type="pink-light" scale="0.38" x1="80" y1="182" x2="228" :seen="!transitionalValue" degree="0"></flower>
      <flower type="purple-light" scale="0.37" x1="47" y1="150" x2="222" :seen="!transitionalValue" degree="0"></flower>
      <flower type="pink-dark" scale="0.35" x1="35" y1="157" x2="210" :seen="!transitionalValue" degree="0"></flower>
      <flower type="purple-dark" scale="0.16" x1="70" y1="130" x2="98" :seen="!transitionalValue" degree="0"></flower>
      <div class="image-bus imgAppear"> 
        <img src="../assets/img/bus-filter.png" alt="加载失败">
      </div>
      
      <!-- <div style="width: 100vw;position: absolute;right: 0;bottom: 0;">
        <img src="../assets/img/consume-filter.png" alt="加载失败">
      </div> -->
    </div>
  </template>
  
  <script setup>
  import flower from '../components/flower.vue';
  import { computed, inject, watch} from 'vue'
import Flower from '../components/flower.vue';
import userData from '../assets/js/request';

  const {busCount, busNumber} = userData.value;
  
  const transitional = inject('transitional')
  const transitionalValue = computed(() => transitional.value)
  watch(transitionalValue, () => {
    console.log('开始页面内动画')
  })
  // const username = ref('xx');
  </script>
  
  <style scoped lang="scss">
  .bus {
    z-index: -10;
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/bus-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .text {
      position: absolute;
      top: 7vh;
      left: 8vw;
      opacity: 0;
      z-index: 1000;
      line-height: 1.5;
      transition: all 1s ease-in-out;
      transition-delay: 1s;
      text-shadow: black 1px 1px 2px;
      color:#a8c6ef;

      p.big{
        font-size: 26px;
      }
      span.bold{
        display: inline-block;
        font-size: 30px;
        //加粗
        font-weight: 700;
        color: #e60012;
      }
      &.textAppear {
        opacity: 1;
      }
      p {
        margin: 0.5rem 0;
      }
    }
    .image-bus {
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
    .image-light {
      position: absolute;
      bottom:71.4vw;
      right: -100vw;
      transition: all 2s ease-in-out;
      img {
        width: 145.5vw;
        // height: 391px;
      }
      &.LightImgAppear {
        right: 0;
        bottom: 42vw;
      }
    }
    .image-hillside {
      position: absolute;
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