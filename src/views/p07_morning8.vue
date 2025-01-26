<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1 && userData.morningClass != 0" :class="['text', { textAppear: !transitionalValue }]">
        <p>在今年，</p>
        <p>你共有<span class="bold">{{userData.morningClass}}</span>节早课。</p>
        <p>一日之计在于晨，</p>
        <p>闹铃叮叮当，</p>
        <p>提醒你不要睡过头。</p>
      </div>
      <div v-if="index === 1 && userData.morningClass === 0" :class="['text', { textAppear: !transitionalValue }]">
        <p>你的早课数量为<span class="bold">0！</span></p>
        <p>当太阳升起，</p>
        <p>你却能惬意地躲在被窝，</p>
        <p>别人纷纷投来羡慕的目光。</p>
      </div>
    </fade-transition>
    <!-- <div :class="['image-phone', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-phone.png" alt="加载失败">
      </div> -->
      <div :class="['image-phone', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-phone.png" alt="加载失败">
      </div>
      <div :class="['image-clouds', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-cloud-small.png" alt="加载失败">
      </div>
      <div :class="['image-clock', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-clock.png" alt="加载失败">
      </div>
      <div :class="['image-cloudb', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-cloud-big.png" alt="加载失败">
      </div>


      <div :class="['image-person', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-person.png" alt="加载失败">
      </div>
      <div :class="['image-locker', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/m8-locker.png" alt="加载失败">
      </div>
      

      <div class="image-filter imgAppear">
      <img src="../assets/img/filter.png" alt="加载失败">
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch, ref } from 'vue'
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
    background: url("../assets/img/m8-bg.png") no-repeat;
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
  .image-locker {
      position: absolute;
      bottom:-112%;
      right: -112%;
      transition: all 1s ease-in-out;
      img {
        width: 100vw;
      }
      &.imgAppear {
        right: 0;
        bottom: 0;
        overflow: hidden;
      }
    }
    .image-person {
      position: absolute;
      bottom:-112%;
      left: -112%;
      transition: all 1s ease-in-out;
      img {
        width: 100vw;
      }
      &.imgAppear {
        left: 0;
        bottom: 0;
        overflow: hidden;
      }
    }
    .image-phone {
      position: absolute;
      top:-112%;
      right: 112%;
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
    .image-clouds {
      position: absolute;
      top:-112%;
      right: 0;
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
    .image-clock {
      position: absolute;
      top:-112%;
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
    .image-cloudb {
      position: absolute;
      bottom:0;
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
}

.text {
      position: absolute;
      top: 15vh;
      opacity: 0;
      left: 30vw;
      z-index: 1000;
      line-height: 1.7;
      font-size: 18px;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      color:#126845;
      .bold {
        color: #294635;
      }
      &.textAppear {
        opacity: 1;
      }
      p {
        margin: 0.5rem 0;
      }
    }
</style>