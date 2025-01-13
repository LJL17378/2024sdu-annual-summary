<template>
  <transition name="fade" mode="out-in">
    <slot></slot>
  </transition>
</template>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease !important
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
