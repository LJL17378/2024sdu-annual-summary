<template>
  <div class="end">
    <div class="text">
      <p>【制作单位】</p>
      <p>山东大学党委学生工作部</p>
      <p>山东大学信息化工作办公室</p>
      <p>【鸣谢】</p>
      <p>山东大学本科生院</p>
      <p>山东大学图书馆</p>
    </div>
    <div :class="['image', { imgAppear: !transitionalValue }]">
      <img
        src="@/assets/img/end.png"
        alt="加载失败"
      >
    </div>
  </div>

</template>

<script setup>
import { computed, inject, watch, ref } from "vue";

const transitional = inject("transitional");
const transitionalValue = computed(() => transitional.value);
watch(transitionalValue, () => {
  console.log("开始页面内动画");
});
</script>

<style scoped lang="scss">
.end {
  width: 100%;
  height: 100%;
  
  background-image: linear-gradient(rgba(153, 237, 170, 0.56), rgb(129, 183, 101));
  .text {
    width: 80vw;
    position: absolute;
    top: 128px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    font-size: 20px;
    z-index: 1000;
    line-height: 2;
    p {
      font-family: "Microsoft YaHei UI";
    }
    p {
      margin: 0.5rem 0;
    }
  }
  .image {
    position: absolute;
    bottom: -8px;
    // left:3px;
    transition: all 1s ease-in-out;
    // transform: scale(2.7);
    transition-delay: 0.5s;
    opacity: 0;
    img {
      width: 120vw;
      // height: 391px;
      filter: drop-shadow(10px 10px 25px rgba(0, 0, 0, 0.25));
    }
    &.imgAppear {
      bottom: -8px;
      opacity: 1;
      transform: rotate(-10deg);
    }
  }
}
</style>

