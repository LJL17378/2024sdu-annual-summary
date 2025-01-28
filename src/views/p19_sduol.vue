<template>
    <div class="page"
    @touchend="handleTouchEnd">
      <img class="bg" src="../assets/img/sduol-bg.jpg" alt="">
      <div class="transition-overlay">
        <img class="transition-image" src="../assets/img/转场.png" alt="">
      </div>
      <a style="width: auto;" href="https://mp.weixin.qq.com/s?__biz=MzA5NTk4NzQyNA==&mid=2655334727&idx=1&sn=d4b4d6510124744a5e978d03649c650e&chksm=8a67b5c0665e74aa5897f6bcad39e23cf923981fb905469fc86bed2810d7f5e772dda192d363&mpshare=1&scene=23&srcid=0123LCLv1vrH23dXFYGjMIIn&sharer_shareinfo=166128b235c7ebed6ef03389576d7bca&sharer_shareinfo_first=166128b235c7ebed6ef03389576d7bca#rd" target="_blank">
        <img style="position: absolute;width: 57vw;left: 25vw;top: 235vw;" src="../assets/img/sduol-article1.png" alt="">
    </a>
    <a style="width: auto;" href="https://mp.weixin.qq.com/s?__biz=MzA5NTk4NzQyNA==&mid=2655342298&idx=1&sn=4cf2b028491a5b403e68f01d6a6789c4&chksm=8aaa305de0460bbe569a5c7b4f584dc7eb1b1f42ca8b52ff7fcbd73cfdf784660f3116f2b1e6&mpshare=1&scene=23&srcid=0123uYDAW4pglrYjdDSgg0A3&sharer_shareinfo=d914f2073054173ae20d092be8e5629b&sharer_shareinfo_first=d914f2073054173ae20d092be8e5629b#rd " target="_blank">
      <img style="position: absolute;width: 43.3vw;left: 45vw;top: 362vw;" src="../assets/img/sduol-article3.png" alt="">
    </a>
    <a style="width: auto;" href="https://mp.weixin.qq.com/s?__biz=MzA5NTk4NzQyNA==&mid=2655344873&idx=1&sn=29a6d43ce5e980a6b289d35435dea8b9&chksm=8ab079422144d5ad8d2ec0087ec8db2df200898394aed7f45cc9982686c9932664ddcfeb43a8&mpshare=1&scene=23&srcid=0123uzEec9GbGxlvIdwuP5WS&sharer_shareinfo=096ce549ddc0312bb906f7614f04127b&sharer_shareinfo_first=096ce549ddc0312bb906f7614f04127b#rd" target="_blank">
      <img style="position: absolute;width: 49.7vw;left: 39vw;top: 741vw;" src="../assets/img/sduol-article11.png" alt="">
    </a>
    <img class="fg" src="../assets/img/sduol-flower.png" alt="">
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  const setSubTransitional = inject('setSubTransitional')
  
  setSubTransitional(true)
  const handleTouchEnd = () => {
  const page = document.querySelector('.page')
  console.log(page.scrollHeight,page.scrollTop,page.clientHeight)
  const isAtBottom = page.scrollHeight - page.scrollTop <= page.clientHeight + 10
  if (isAtBottom) {
    setSubTransitional(false)
  }else{
    setSubTransitional(true)
  }
}
  </script>
  
  <style scoped lang="scss">
  .page {

    position: relative;
    width: 100%;
    height: 100vh;
    margin: 0px;
    transition: transform 0.3s ease-out;
    touch-action: pan-y pinch-zoom;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .bg {
    position: absolute;
    top: 0;
    width: 100%;
  }
  .fg {
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
  }
  
  .transition-overlay {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    .transition-image {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
  </style>