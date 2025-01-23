// text textAppear
// image image-filter imgAppear

<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">

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
  width: 100%;
  height: 100%;
  margin: 0px;
  background: url("../assets/img/xxx-bg.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
}
</style>