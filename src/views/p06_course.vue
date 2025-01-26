<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>今年，</p>
        <p>你共修习了<span class="bold">{{userData.courseNum}}</span>门课程，</p>
        <p>获得了<span class="bold">{{userData.courseCredit}}</span>学分。</p>
        <p>你冲破了重重阻碍，</p>
        <p>在日日夜夜里挥洒努力的汗水，</p>
        <p>终于在知识果园里收获满满。</p>
      </div>
    </fade-transition>
    <div :class="['image-others', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/course-others.png" alt="加载失败">
      </div>
    <div :class="['image-person', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/course-person.png" alt="加载失败">
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
    background: url("../assets/img/course-bg.png") no-repeat;
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
  .image-person {
      position: absolute;
      bottom:-76%;
      left: 0;
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
    .image-others {
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
}

.text {
      position: absolute;
      top: 15vh;
      opacity: 0;
      left: 10vw;
      z-index: 1000;
      line-height: 1.7;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      .bold {
        color: #294635;
      }
      color:#126845;
      &.textAppear {
        opacity: 1;
      }
      p {
        margin: 0.5rem 0;
      }
    }
</style>