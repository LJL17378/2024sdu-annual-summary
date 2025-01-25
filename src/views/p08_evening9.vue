<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1 && userData.eveningClass != 0" :class="['text', { textAppear: !transitionalValue }]">
        <p>你共有<span class="bold">{{userData.eveningClass}}</span>节晚课。</p>
        <p>当夜幕降临，</p>
        <p>你仍在教室里埋头苦读。</p>
      </div>
      <div v-if="index === 1 && userData.eveningClass === 0" :class="['text', { textAppear: !transitionalValue }]">
        <p>你的晚课数量为<span class="bold">{{userData.eveningClass}}！</span></p>
        <p>你的夜晚由你支配，</p>
        <p>学习，娱乐，运动，社交，</p>
        <p>全部任你选择。</p>
      </div>
    </fade-transition>
    <div :class="['image-person', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/e9-person.png" alt="加载失败">
      </div>
      <div :class="['image-others', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/e9-others.png" alt="加载失败">
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
    background: url("../assets/img/e9-bg.png") no-repeat;
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
      top: 10vh;
      opacity: 0;
      left: 10vw;
      font-size: 24px;
      z-index: 1000;
      line-height: 1.7;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      p{
        font-family: 'Microsoft YaHei UI';
        color:#126845;
        font-weight: 600;
      }
      span.bold{
        display: inline-block;
        font-size: 36px;
        font-weight: 700;
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