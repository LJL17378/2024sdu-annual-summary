<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>{{ year }}年{{ month }}月{{ day }}日</p>
        <p>你睁开眼</p>
        <p>向这个多姿多彩的世界问好</p>
        <p>今年是你与世界相识的第<span>{{ age }}</span>年</p>
      </div>
    </fade-transition>
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
  background-image: none;
}

.text {
  color: green;
  left: 1.5em;
  top: 20vh;
}
</style>