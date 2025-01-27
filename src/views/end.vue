<template>
  <div class="page">
    <fade-transition>
      <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue && index === 1}]">
        <p>【制作单位】</p>
        <p>山东大学党委学生工作部</p>
        <p>山东大学数智化支撑研究院</p>
        <br>
        <p>【鸣谢单位】</p>
        <p>山东大学本科生院</p>
        <p>山东大学图书馆</p>
        <p>山东大学后勤保障部</p>
        <p>山东大学团委</p>
      </div>
      <div :class="['text2', { textAppear2: index === 2}]">
        <p>【2024年度总结】</p>
        <p>项目组成员</p>
        <br>
        <p class="small">/策划/</p>
        <p>高圆源 王春雨</p>
        <p class="small">/视觉设计/</p>
        <p>韩北晨 徐湫涵</p>
        <p class="small">/前端开发/</p>
        <p>梁建麟 李俊煊</p>
        <p class="small">/后端开发/</p>
        <p>林星宇</p>
        <p class="small">/文案/</p>
        <p>李兆城</p>
      </div>
    </fade-transition>
  </div>
</template>

<script setup>
import { inject,computed,ref } from 'vue';
import { usePosition } from '@/assets/js/utils.js'
import FadeTransition from '@/components/fade-transition.vue'
const transitional = inject('transitional')
const transitionalValue = computed(() => transitional.value)

const { start, end } = usePosition()
const nextPage = inject('nextPageFunc')
const setSubTransitional = inject('setSubTransitional')


const index = ref(1)
let maxIndex = 2;

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
.page {
  width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/end-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.text {
      opacity: 0;
      z-index: 1000;
      text-align: center;
      line-height: 1.4;
      transition: all 1s ease-in-out;
      color:#034362;
      &.textAppear {
        opacity: 1;
      }
      .small{
        font-size: 16px;
      }
      p {
        margin: 0.5rem 0;
      }
    }
    .text2 {
      translate: transformY(100vh);
      z-index: 1000;
      text-align: center;
      line-height: 1.4;
      transition: all 1s ease-in-out;
      transition-delay: 1s;
      color:#034362;
      &.textAppear2 {
        translate: transformY(0vh);
      }
      .small{
        font-size: 16px;
      }
      p {
        margin: 0.5rem 0;
      }
    }
</style>