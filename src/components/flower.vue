<template>
    <img 
        :src="selectedImage" 
        :style="imageStyle"
        :alt="type"
        class="play"
    >
</template>

<script setup>
import pinkLight from "../assets/img/bus-flower-pink-light.png"
import pinkNormal from "../assets/img/bus-flower-pink-normal.png"
import pinkDark from "../assets/img/bus-flower-pink-dark.png"
import purpleLight from "../assets/img/bus-flower-purple-light.png"
import purpleNormal from "../assets/img/bus-flower-purple-normal.png"
import purpleDark from "../assets/img/bus-flower-purple-dark.png"
import { computed} from "vue"

const props = defineProps({
    type: {
        type: String,
        default: 'pink-normal'
    },
    scale: {
        type: Number,
        default: 1 
    },
    degree: {
        type: Number,
        default: 0
    },
    x1: {
        type: Number,
        default: 0
    },
    y1: {
        type: Number,
        default: 0
    },
    x2: {
        type: Number,
        default: 0
    },
    delay: {
        type: Number,
        default: 0
    },
    seen: {
        type: Boolean,
        default: false
    }
})

const imageMap = {
    'pink-light': pinkLight,
    'pink-normal': pinkNormal,
    'pink-dark': pinkDark,
    'purple-light': purpleLight,
    'purple-normal': purpleNormal,
    'purple-dark': purpleDark
}

const selectedImage = computed(() => imageMap[props.type] || pinkNormal)

const imageStyle = computed(() => ({
    position: 'absolute',
    left: `${props.seen ? props.x1 : (props.x2 - '0') + (props.x1 - '0') }vw`,
    bottom: `${props.seen ? props.y1 : (props.x2 - '0')*0.294 + (props.y1 - '0') }vw`,
    transform: `translate(-50%, 50%) scale(${props.scale}) rotate(${props.degree}deg)`,
    transition: `all 2s ${props.delay}s ease-in-out`,
    '--scale': props.scale  // 使用 CSS 变量传递缩放值
}))
</script>

<style scoped lang="scss">
.play {
    animation: rotate 5s infinite linear;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, 50%) scale(var(--scale)) rotate(0deg); /* 合并旋转和缩放 */
  }
  100% {
    transform: translate(-50%, 50%) scale(var(--scale)) rotate(360deg); /* 保持缩放，并进行旋转 */
  }
}

img {
    max-width: 100%;
    height: auto;
}
</style>