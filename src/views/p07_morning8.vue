<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>在今年，</p>
        <p>你共有<b>{{userData.morningClass}}</b>节早课。</p>
        <p>一日之计在于晨，</p>
        <p>闹铃叮叮当，</p>
        <p>提醒你不要睡过头。</p>
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