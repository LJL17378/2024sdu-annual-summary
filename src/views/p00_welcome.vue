<template>
  <div class="page" @click="next"></div>
</template>

<script setup>
import { inject } from 'vue';

const next = inject('next')
</script>

<style scoped lang="scss">
.page {
  background-image: url("../assets/img/welcome.png");
}
</style>
