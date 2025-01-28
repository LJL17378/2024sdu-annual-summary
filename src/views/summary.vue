<template>
  <div class="page">
    <fade-transition>
      <div v-if="grade === 1" :class="['text', { textAppear: !transitionalValue }]">
        <p>你好，新同学！</p>
        <p>欢迎来到sdu的大家庭！</p>
        <p>初入大学，</p>
        <p>这里的一切或许都显得新奇。</p>
        <p>但不必踌躇不前，</p>
        <p>我们会为你提供必要的帮助。</p>
        <p>这里有良好的研学环境，</p>
        <p>有热情的良师益友，</p>
        <p>这里是你走向更远方的起点，</p>
        <p>学在山大，快乐成长，</p>
        <p>新一代正如冉冉升起的朝阳，</p>
        <p>未来属于我们年轻人，</p>
        <p>期待你的成长与进步！</p>
      </div>
      <div v-else-if="grade === 5 || (grade === 4 && !is5)" :class="['text', { textAppear: !transitionalValue }]">
        <p>大学生活的列车飞驰不歇，</p>
        <p>你学在山大，快乐成长，</p>
        <p>如今你即将迈出校园，踏入社会。</p>
        <p>或许你已经做好下一步的安排，</p>
        <p>或许你还在为今后的生活烦恼，</p>
        <p>但请怀揣对未来的美好愿景，</p>
        <p>相信我们最后总能如愿以偿。</p>
        <p>无论过去是否还留有遗憾，</p>
        <p>都不必再为此悲伤，</p>
        <p>因为前路还长，</p>
        <p>还有的是时间去闯荡。</p>
        <p>祝愿你征程归来仍不忘初心，</p>
        <p>壮志凌云，以磅礴之势铸就辉煌！</p>
      </div>
      <div v-else-if="(grade === 4 && is5) || (grade === 3 && !is5)" :class="['text', { textAppear: !transitionalValue }]">
        <p>时光荏苒，</p>
        <p>回首光阴已逝。</p>
        <p>美好的大学生活已经过半，</p>
        <p>回味过去的种种，</p>
        <p>是否有千百种滋味一齐涌上心头？</p>
        <p>学在山大，快乐成长，</p>
        <p>在过去的时间里，</p>
        <p>你日日苦读，</p>
        <p>熬过了岁月的风吹日晒，</p>
        <p>终于小有所成。</p>
        <p>看向一片光明的未来，</p>
        <p>你应当为自己而骄傲。</p>
        <p>全力以赴，不负韶华，</p>
        <p>剩下的时光也要加油！</p>
      </div>
      <div v-else :class="['text', { textAppear: !transitionalValue }]">
        <p>走过又一年大学时光，</p>
        <p>你眼神更加坚毅。</p>
        <p>求学路上总会有些许风霜，</p>
        <p>可那不过是你生活的调味剂。</p>
        <p>学在山大，快乐成长，</p>
        <p>大学的旅程即将过半，</p>
        <p>你或许已经意识到，</p>
        <p>这几年精彩纷呈的经历，</p>
        <p>将会是你人生中重要的宝藏。</p>
        <p>请奋力向前奔跑，</p>
        <p>在人生的旷野上追逐理想，</p>
        <p>相信你会攀上人生的最高峰！</p>
      </div>
    </fade-transition>
  </div>
</template>

<script setup>
import FadeTransition from '@/components/fade-transition.vue'
import userData from '@/assets/js/request.js'
import { inject,computed } from 'vue';
const transitional = inject('transitional')
const transitionalValue = computed(() => transitional.value)


const { grade, major } = userData.value;
const is5 = major.includes("5") || major.includes("五年")
</script>

<style scoped lang="scss">
.page {
  width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/summary-bg.png") no-repeat;
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
      p {
        margin: 0.5rem 0;
      }
    }
</style>