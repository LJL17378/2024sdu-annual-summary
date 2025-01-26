<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p><b style="margin: 0;">{{ year }}年{{ month }}月{{ day }}日</b></p>
        <p>你睁开眼，</p>
        <p>向这个多姿多彩的世界问好，</p>
        <p>今年是你与世界相识的第<b><span>{{ age }}</span></b>年。</p>
      </div>
    </fade-transition>
      <div :class="['image-fish', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/age-flowers.png" alt="加载失败">
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/age-hand.png" alt="加载失败">
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

function calculateAge(birthStr) {
    // 提取年、月、日并转换为数字（月份需减1）
    const year = parseInt(birthStr.substring(0, 4), 10);
    const month = parseInt(birthStr.substring(4, 6), 10) - 1;
    const day = parseInt(birthStr.substring(6, 8), 10);
    
    // 创建出生日期和当前日期对象
    const birthDate = new Date(year, month, day);
    const today = new Date();
    
    // 计算年龄差值
    let age = today.getFullYear() - birthDate.getFullYear();
    
    // 判断是否已过生日
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    if (currentMonth < birthDate.getMonth() || 
        (currentMonth === birthDate.getMonth() && currentDay < birthDate.getDate())) {
        age--; // 未过生日则减1岁
    }
    
    return {year, month, day, age};
}

// 示例用法
const { year, month, day, age } = calculateAge(userData.value.birthday)

</script>

<style scoped lang="scss">
.page {
    width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/age-bg.png") no-repeat;
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
      right: -112%;
      transition: all 1s ease-in-out;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        right: 0;
        bottom: 0;
        overflow: hidden;
      }
    }
    .image-fish {
      position: absolute;
      bottom:0;
      right: 112%;
      transition: all 1s ease-in-out;
      img {
        width: 100vw;
        // height: 391px;
      }
      &.imgAppear {
        right: 0;
        top: 0;
        overflow: hidden;
      }
    }
}

.text {
  color: #58880b;
  position: absolute;
      top: 25vh;
      left: 2em;
      opacity: 0;
      z-index: 1000;
      line-height: 2;
      transition: all 1s ease-in-out;
      transition-delay: 0.5s;
      &.textAppear {
        opacity: 1;
      }
}
</style>