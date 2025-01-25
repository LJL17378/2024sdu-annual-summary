<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>今年，</p>
        <p>你共修习了<b>{{userData.courseNum}}</b>门课程，</p>
        <p>获得了<b>{{userData.courseCredit}}</b>学分</p>
        <p>你冲破了重重阻碍，</p>
        <p>在日日夜夜里挥洒努力的汗水，</p>
        <p>终于在知识果园里收获满满。</p>
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

</script>

<style scoped lang="scss">
.page {
  background-image: none;
}

.text {
  color: green;
  left: 1em;
  top: 10vh;
}
</style>