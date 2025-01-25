<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>你共有<b>{{userData.eveningClass}}</b>节晚课。</p>
        <p>当夜幕降临，</p>
        <p>你仍在教室里埋头苦读。</p>
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