<template>
  <div class="hometown" ref="backgroundRef">
    <div>
      <fade-transition>
        <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]" style="top: 15vh; line-height: 2;">
          <p><b style="margin-left: 0; font-size: 22px;">{{ userData.studentSource }}</b>是你的家乡，</p>
          <p>那是一个美丽的地方，</p>
          <p>你知道那里有什么特产吗？</p>
        </div>
        <div style="top: 55vh; text-align: right; right: 0; opacity: 1;" v-if="index === 2" class="text fade">
          <p>有<b>{{ userData.sameStudentSource }}</b>人与你来自同样的地区，</p>
          <p>来自同一片土地，</p>
          <p>天然的亲切感和默契把你们紧紧相连，</p>
          <p>无论身在何方，</p>
          <p>属于故土的羁绊永不断联。</p>
        </div>
      </fade-transition>
    </div>

    <div :class="['image', { imgAppear: index == 2 }]">
      <img src="../assets/img/hometown-cloud-22.png" alt=".">
    </div>
    <div :class="['image', { imgAppear: !transitionalValue && index == 1, cloudPass: index != 1 }]">
      <img src="../assets/img/hometown-cloud-11.png" alt=".">
    </div>

    <div style="width: 75vw;position: absolute" :class="['earth', { earth1: index == 1, earth2: index == 2 }]">
      <img style="width: 100%;" src="../assets/img/hometown-earth.png" alt=".">
    </div>

    <div :class="['image', { imgAppear: !transitionalValue && index == 1, cloudPass: index != 1 }]">
      <img src="../assets/img/hometown-cloud-12.png" alt=".">
    </div>
    <div :class="['image', { imgAppear: index == 2 }]">
      <img src="../assets/img/hometown-cloud-21.png" alt=".">
    </div>

    <div class="image-filter imgAppear">
      <img src="../assets/img/filter.png" alt="加载失败">
    </div>
  </div>
</template>

<script setup>
import { computed, inject, onMounted, ref } from 'vue'
import { usePosition } from '@/assets/js/utils.js'
import FadeTransition from '@/components/fade-transition.vue'
import userData from '@/assets/js/request.js'

const transitional = inject('transitional')
const transitionalValue = computed(() => transitional.value)

const { start, end } = usePosition()
const nextPage = inject('nextPageFunc')
const setSubTransitional = inject('setSubTransitional')

const backgroundRef = ref()

const index = ref(1)
let maxIndex = 2;
onMounted(async () => {
  if (userData.value.grade === 4) {
    backgroundRef.value.style.backgroundImage = 'linear-gradient(rgba(250, 242, 179, 1), rgba(249, 216, 131, 1))'
    imgRef.value.src = (await import('@/assets/img/wishes1.png')).default
  }
})

// 一进页面的时候设置为true, 表示子页面内还有翻页动画要进行, 防止滑动时整个页面翻页
setSubTransitional(true)
const subNextPage = () => {
  // 只有当滑动距离超过屏幕高度的 20% 时才翻页
  if (!transitional.value && start.value.y - end.value.y > window.innerHeight * 0.2) {
    if (index.value >= maxIndex) {
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
</script>

<style scoped lang="scss">
.hometown {
  width: 100%;
  height: 100%;
  margin: 0px;
  background: url("../assets/img/hometown-bg.png") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;

  .text {
    transition: all 1s ease-in-out;
    color: #005fb3;
    left: 2em;
    opacity: 0;
  }

  .textAppear {
    opacity: 1;
  }

  .fade {
    position: absolute;
  }

  .image {
    position: absolute;
    bottom: 0;
    right: -100%;
    transition: all 1s ease-in-out;

    img {
      width: 100vw;
    }

    &.imgAppear {
      right: 0;
    }

    &.cloudPass {
      right: 100%;
    }
  }

  .image-filter {
    position: absolute;

    img {
      width: 250vw;
      opacity: 0.15;
    }

    &.imgAppear {
      right: 0;
      bottom: 0;
    }
  }

  .earth {
    animation: rotate 40s infinite linear;
    transition: all 1s ease-in-out;
  }

  .earth1 {
    bottom: 30vw;
    left: -5vw;
  }

  .earth2 {
    bottom: 106vw;
    left: 25vw;
  }

  @keyframes rotate {
    0% {
      transform:rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>