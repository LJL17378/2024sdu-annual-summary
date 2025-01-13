<template>
  <div class="award-library_king">
    <div :class="['text', { textAppear: !transitionalValue }]">
      <p style="font-size: 42px;">@{{ username }}</p>
      <p>祝贺你今年解锁了</p>
      <p class="bold">「图书馆之王」</p>
      <p>的荣誉成就！</p>
      <br>
      <!-- 加粗 -->
      <p style="font-weight: 600;">你的进入图书馆次数达到了<span style="color: #a04c52d0">{{ libraryTimes }}</span>次</p>
      <p style="font-weight: 600; font-size: 25px;">超过了<span style="color: #a04c52d0">{{ libraryPrecent }}%</span>的同学！</p>
      <br>
      
      <p>希望你能够在每一次阅读中</p>
      <p>找新的风景</p>
      <p>拥有新的视野</p>
      <p>去感受那蕴含在纸与墨中的平静</p>
      <p>而不凡的力量</p>
    </div>
    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img
        src="@/assets/img/award_library_king.png"
        alt="加载失败"
      >
    </div>
  </div>
</template>

<script setup>
import { computed, inject, watch, ref, onMounted } from "vue";
import userData from "@/assets/js/request";

const transitional = inject("transitional");
const transitionalValue = computed(() => transitional.value);
watch(transitionalValue, () => {
  console.log("开始页面内动画");
});
const username = userData.value.name;
const libraryTimes = ref(userData.value.libraryNumber);
const libraryPrecent = ref(Number(((24051-userData.value.libraryRank)*100 / 24051 ).toFixed(2)));
onMounted(() => {
  console.log("页面挂载");
  console.log(libraryPrecent.value,((24051-userData.value.libraryRank) / 24051),libraryTimes.value)
}); 
</script>

<style scoped lang="scss">
.award-library_king {
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
      font-family: "Microsoft YaHei UI";
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

