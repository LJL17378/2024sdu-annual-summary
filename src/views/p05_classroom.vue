<template>
  <div class="page">
    <div style="width: 100%; height: 100%; background-color:  #cbcaca60;"></div>
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>阳光洒进<span class="bold">{{ userData.classroom }}</span>的窗，</p>
        <p>你最常来这儿上课。</p>
        <p>你在知识的沃土里奋力耕耘，</p>
        <p>未来一定会结出累累硕果。</p>
      </div>
    </fade-transition>
    <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/classroom-book.png" alt="加载失败">
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
    background: url("../assets/img/classroom-bg.png") no-repeat;
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
      top: 18vh;
      opacity: 0;
      text-align: right;
      line-height: 1.7;
      right: 0.5em;
      z-index: 1000;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      color:#094d88;
      &.textAppear {
        opacity: 1;
      }
      p {
        margin: 0.5rem 0;
      }
    }
</style>