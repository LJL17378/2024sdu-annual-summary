<template>
  <div class="award-reading">
    <div :class="['text', { textAppear: !transitionalValue }]">
      <p style="font-size: 42px">@{{ username }}</p>
      <p>祝贺你今年解锁了</p>
      <p class="bold">「博览群书」</p>
      <p>的成就！</p>
      <br />
      <!-- 加粗 -->
      <p style="font-weight: 600">
        你的借阅次数达到了<span style="color: #a04c52d0">{{ readingTimes }}</span>次
      </p>
      <p style="font-weight: 600; font-size: 25px; ">
        超过了<span style="color: #a04c52d0">{{ readingPrecent }}%</span>的同学！
      </p>
      <br />
      <p>你在书海中畅游</p>
      <p>用阅读点亮智慧的灯塔</p>
      <p>用知识拓展生活的边界</p>
      <p>成就更好的自己</p>
      <br />
      <p>愿你在未来的日子里</p>
      <p>继续与书为伴</p>
      <p>让阅读成为人生最美丽的风景</p>
    </div>
    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img src="@/assets/img/award_reading_title.png" alt="加载失败" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch, ref } from 'vue';
import userData from '@/assets/js/request';

const transitional = inject('transitional');
const transitionalValue = computed(() => transitional.value);
watch(transitionalValue, () => {
  console.log('开始页面内动画');
});
const username = userData.value.name;
const readingTimes = ref(userData.value.borrowNumber);
const readingPrecent = ref(
  Number((((24051 - userData.value.borrowRank) * 100) / 24051).toFixed(2))
);
</script>

<style scoped lang="scss">
.award-reading {
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(240, 221, 154, 0.78),
    rgb(238, 193, 105)
  );
  .text {
    position: absolute;
    top: 96px;
    left: -100%;
    font-size: 20px;
    z-index: 1000;
    line-height: 1.3;
    transition: all 1s ease-in-out;
    p {
      font-family: 'Microsoft YaHei UI';
    }
    p.bold {
      font-size: 30px;
      //加粗
      font-weight: 700;
      color: #a04c52d0;
    }
    &.textAppear {
      left: 32px;
    }
    p {
      margin: 0.5rem 0;
    }
  }

  .image {
    position: absolute;
    right: -8px;
    top: 96px;
    transition: all 1s ease-in-out;
    // transform: scale(2.7);
    transition-delay: 0.5s;
    opacity: 0;
    img {
      // width: 110px;
      height: 65vh;
      filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
      // height: 391px;
    }
    &.imgAppear {
      right: -2px;
      opacity: 1;
    }
  }
}
</style>
