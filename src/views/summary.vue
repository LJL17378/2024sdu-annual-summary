<template>
  <div class="wishes" ref="backgroundRef">
    <div v-if="userData.grade === 1">
      <fade-transition>
        <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
          <p>Hi {{ userData.name }}!</p>
          <p>欢迎来到SDU这个大家庭!</p>
          <p>这一年</p>
          <p>你离开父母</p>
          <p>孤身一人</p>
          <p>来到远地求学</p>
          <p>在SDU, 与一个个陌生而热烈</p>
          <p>的灵魂相遇</p>
        </div>
        <div v-else-if="index === 2" class="text fade">
          <p>在这里</p>
          <p>你会遇见足以深深铭记的良师</p>
          <p>结交可以共度一生的益友</p>
          <p>充实自己, 发展自己</p>
          <p>从这里, 走向更好的远方</p>
        </div>
        <div v-else-if="index === 3" class="text fade">
          <p>学无止境, 气有浩然</p>
          <p>亲爱的小SDUer</p>
          <p>这一切, 才刚刚开始</p>
          <p>等待与你相逢</p>
        </div>
      </fade-transition>
    </div>
    <div v-else-if="userData.grade === 2">
      <fade-transition>
        <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
          <p>Hi {{ userData.name }}!</p>
          <p>经过一年的磨练</p>
          <p>你已经不再是那个稚嫩的大一</p>
          <p>新生了</p>
          <p>恭喜你成为SDU的"老鸟"</p>
        </div>
        <div v-else-if="index === 2" class="text fade">
          <p>大二的生活就像一盒黑巧</p>
          <p>入口满嘴苦涩</p>
          <p>却又从舌根泛出甜味</p>
        </div>
        <div v-else-if="index === 3" class="text fade">
          <p>你已经逐渐适应了校园生活的节奏</p>
          <p>开始掌握属于自己的学习方法和技巧</p>
          <p>你在学术活动、社团活动、社会实践等方面都有了很大收获</p>
        </div>
        <div v-else-if="index === 4" class="text fade">
          <p>愿你继续与SDU携手前行</p>
          <p>勇敢地追逐梦想</p>
          <p>让未来的每一天都充满希望和喜悦</p>
        </div>
      </fade-transition>
    </div>
    <div v-else-if="userData.grade === 3">
      <fade-transition>
        <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
          <p>Hi {{ userData.name }}!</p>
          <p>恭喜你已经晋升为学校的"中流砥柱"!</p>
          <p>经过几年的磨练</p>
          <p>你已经成为了SDU不可或缺的一部分</p>
        </div>
        <div v-else-if="index === 2" class="text fade">
          <p>这场大学的马拉松</p>
          <p>你已经跑过了大半路程</p>
          <p>但仍然保持着昂扬的斗志和旺盛的精力</p>
        </div>
        <div v-else-if="index === 3" class="text fade">
          <p>你是SDU大舞台上无可厚非的主角</p>
          <p>是学术的佼佼者</p>
          <p>是社团活动的积极分子</p>
          <p>更是实践经验的领跑者</p>
          <p>在各个方面都展现出了卓越的能力和领导力</p>
        </div>
        <div v-else-if="index === 4" class="text fade">
          <p>在未来的日子里</p>
          <p>愿你与SDU继续并肩前行</p>
          <p>书写彼此的辉煌篇章!</p>
        </div>
      </fade-transition>
    </div>
    <div v-else-if="userData.grade === 4">
      <fade-transition>
        <div v-if="index === 1" :class="['text', { textAppear: !transitionalValue }]">
          <p>Hi {{ userData.name }}!</p>
          <p>不知不觉</p>
          <p>你已与SDU相伴4个年头</p>
        </div>
        <div v-else-if="index === 2" class="text fade">
          <p>很快</p>
          <p>你将获得那本记录着你独特旅程的毕业证</p>
          <p>愿你走完山水万程</p>
          <p>仍与理想重逢!</p>
          <p>祝你前程似锦, 不负韶华!</p>
        </div>
      </fade-transition>
    </div>

    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img ref="imgRef" src="@/assets/img/wishes.png" alt=".">
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

const imgRef = ref()
const backgroundRef = ref()

const index = ref(1)
let maxIndex = 1;
(async () => {
  switch (userData.value.grade) {
    case 1: maxIndex = 3; break;
    case 2: maxIndex = 4; break;
    case 3: maxIndex = 4; break;
    case 4: maxIndex = 2; break;
  }
})()
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
.wishes {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(255, 216, 240, 1), rgba(247, 153, 149, 1));
  position: relative;
  .text {
    position: absolute;
    // max-width: 355px;
    top: 96px;
    left: -100%;
    line-height: 2.5;
    transition: all 1s ease-in-out;
    &.textAppear {
      left: 10vw;
    }
  }
  .fade {
    position: absolute;
    left: 10vw;
  }
  .image {
    position: absolute;
    bottom: -8px;
    right: -100%;
    transition: all 1s ease-in-out;
    img {
      width: 270px;
      height: 389px;
      filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
    }
    &.imgAppear {
      right: 0;
    }
  }
}
</style>
