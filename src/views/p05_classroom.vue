<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>阳光洒进<b>{{ userData.classroom }}</b>的窗</p>
        <p>你最常来这儿上课</p>
        <p>你在知识的沃土里奋力耕耘</p>
        <p>未来一定会结出硕果累累</p>
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
.text {
    right: 1em;
    color: rgb(0, 102, 255);
    text-align: right;
    top: 20vh;
}
</style>