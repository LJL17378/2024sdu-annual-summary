<template>
  <div class="libstats">
    
      <div v-if="index === 1">
        <div :class="['text', { textAppear: !transitionalValue }]">
          <p>今年图书馆上新中外文图书<span class="bold">115232</span>册，</p>
          <p>为全校师生的研究与学习提供了坚实的储备，</p>
          <p>我们由衷地感谢图书馆老师们的付出与努力！</p>
        </div>

      </div>
        <div v-if="index === 2" :class="['text', { textAppear: !transitionalValue }]">
          <p>承载着智慧的书籍来回传递，</p>
          <p>为热爱读书的人打开了新世界的大门。</p>
          <p>一共有<span class="bold">57235</span>本书在校区间交换，</p>
          <p>你是否体验过这一功能?</p>
      </div>

      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libstats-fish2.png" alt="加载失败">
      </div>
      <div :class="['image', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libstats-whale.png" alt="加载失败">
      </div>
      <div :class="['image-fish', { imgAppear: !transitionalValue }]">
        <img src="../assets/img/libstats-fish1.png" alt="加载失败">
      </div>
      <!-- <div style="width: 100vw;position: absolute;right: 0;bottom: 0;">
        <img src="../assets/img/consume-filter.png" alt="加载失败">
      </div> -->
    
  </div>
</template>

<script setup>
import { computed, inject, ref } from 'vue'
import { usePosition } from '@/assets/js/utils.js'

const transitional = inject('transitional')
const transitionalValue = computed(() => transitional.value)
const index = ref(1)

const { start, end } = usePosition()
const nextPage = inject('nextPageFunc')
const setSubTransitional = inject('setSubTransitional')


// 一进页面的时候设置为true, 表示子页面内还有翻页动画要进行, 防止滑动时整个页面翻页
setSubTransitional(true)
const subNextPage = () => {
  // 只有当滑动距离超过屏幕高度的 20% 时才翻页
  if (!transitional.value && start.value.y - end.value.y > window.innerHeight * 0.2) {
    if (index.value >= 2) {
      // 子页面内翻页动画结束, 可以进行主页面翻页
      setSubTransitional(false)
      // 因为keep-alive的原因, 为防止被切出去的页面继续监听翻页动作, 需要手动移除事件监听
      document.removeEventListener('touchend', subNextPage)
      nextPage()
      return
    }
    console.log('页面内翻页')
    index.value++
  }
}
document.addEventListener('touchend', subNextPage)
// const username = ref('xx');
</script>

<style scoped lang="scss">
.libstats {
  width: 100%;
  height: 100%;
  margin: 0px;
  background: url("../assets/img/libstats-bg.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;

  .text {
    position: absolute;
    opacity: 0;
    top: 43vw;
    left: 7vw;
    font-size: 17.5px;
    z-index: 1000;
    line-height: 1.7;
    transition: all 1s ease-in-out;
    transition-delay: 0.5s;

    p {
      color: #bfe4f5;
    }

    p.big {
      font-size: 40px;
    }

    span.bold {
      display: inline-block;
      font-size: 22px;
      font-weight: 700;
      color: #64cbf7;
    }

    &.textAppear {
      opacity: 1;
    }

    p {
      margin: 0.5rem 0;
    }
  }

  .image {
    position: absolute;
    bottom: 0;
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
    bottom: 0;
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

</style>