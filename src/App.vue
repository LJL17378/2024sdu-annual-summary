<template>
  <div class="layout">
    <div class="header" v-show="showMusic">
      <!-- <returnImg class="return-icon" /> -->
      <music class="music-icon play" @click="stopMusic" v-if="isMusic" />
      <noMusic class="music-icon" @click="playMusic" v-else />
      <!-- <shareImg class="share-icon" /> -->
    </div>
    <div class="footer">
      <p class="text" v-if="currentIndex === 0 && userData" @click="clearCache">> 清除缓存数据</p>
      <p class="text" v-if="currentIndex <= 7 && currentIndex >= 5">
        * 数据取自于学生个人课表
      </p>
      <p class="text" v-else-if="currentIndex >= 8 && currentIndex <= 11">
        * 数据来自济南、青岛、威海图书馆
      </p>
      <p class="text" v-else-if="currentIndex === 18">
        * 数据来自济南、青岛、威海党委学生工作部
      </p>
      <p class="text" v-else-if="currentIndex === 19 || currentIndex === 20 || currentIndex === 21">
      </p>
      <p class="text" v-else-if="![0, views.length - 1].includes(currentIndex)" >* 数据仅来源于济南校本部本科生</p>
      <!-- 如果在第一页或最后一页，则不显示下箭头 -->
      <downArrowImg
        class="down-arrow"
        @click="nextPage"
        v-if="
          currentIndex !== 0 &&
          currentIndex !== views.length - 1 
        "
      />
    </div>
    <transition
      @after-enter="() => (transitional = false)"
      @leave="() => (transitional = true)"
      :name="transitionStyle"
    >
      <keep-alive>
        <component :is="views[currentIndex]" />
      </keep-alive>
    </transition>
  </div>
</template>

<script setup>
import { provide, ref, computed, onMounted, watch } from 'vue';
import { usePosition } from '@/assets/js/utils.js';
import views, { nextIndex } from '@/assets/js/import-views.js';
import music from './assets/icons/music.vue';
import noMusic from './assets/icons/no_music.vue';
import downArrowImg from './assets/icons/down_arrow.vue';
import userData from '@/assets/js/request.js';
import audio from '@/assets/audio/bgm.mp3';

const data = localStorage.getItem('data');
if (data) userData.value = JSON.parse(data);

function clearCache() {
  if (!confirm("该操作将清除缓存数据，您可以再次登录获取数据。是否继续？")) return;
  userData.value = null;
  localStorage.removeItem('data');
  alert("浏览器缓存已清除");
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// window.addEventListener("load",function() {
//   // 设置一个延时函数，以确保页面已经完全加载
//   setTimeout(function(){
//     // 判断当前页面是否处于全屏状态
//     if(document.documentElement.scrollHeight <= window.innerHeight) {
//       // 如果页面高度小于窗口高度，则认为页面处于全屏状态
//       document.body.style.height = (window.innerHeight + 50) + 'px';
//       // 启用滚动，以便用户可以滚动页面
//       window.addEventListener('scroll',function() {
//         if(document.body.scrollTop == 0) {
//           // 如果用户滚动到了顶部，则禁用滚动
//           document.body.scrollTop = 1;
//         }
//       });
//     } else {
//       // 如果页面高度大于窗口高度，则认为页面不处于全屏状态
//       document.body.style.height = 'auto';
//     }
//   },1000);
// });


// 不用路由了, 用动态组件都可
// 当前组件的索引, 跟文件名字一样, 没有后缀名
const currentIndex = ref(0);
const next = () => {
  transitionStyle.value = 'straight-translate-Y'
  currentIndex.value = nextIndex(currentIndex.value + 1);
}
const toError = () => {
  console.log("22")
  currentIndex.value = 22
}
provide('next', next);
provide('currentIndex', currentIndex);
provide('toError',toError)


// 音乐，单例模式
const audioEl = new Audio(audio);
audioEl.loop = true;
audioEl.volume = 0;

// 应对Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
// 定义事件处理函数
const handleMusicEvent = () => {
  console.log('移除事件');
  document.removeEventListener('music', handleMusicEvent);
  playMusic();
};

// 添加事件监听器
document.addEventListener('music', handleMusicEvent);

const showMusic = ref(false);
const isMusic = ref(false);
// 一个播放音乐的函数
const playMusic = () => {
  if (isMusic.value) return;
  audioEl.volume = 0;
  audioEl.play();
  isMusic.value = true;
  
  // 添加淡入淡出效果
  const fade = setInterval(() => {
    if (audioEl.volume < 0.8) {
      audioEl.volume += 0.1;
    } else {
      clearInterval(fade);
    }
  }, 100);
  console.log('播放音乐');
};
// 一个停止音乐的函数
const stopMusic = () => {
  isMusic.value = false;
  const fade = setInterval(() => {
    if (audioEl.volume > 0) {
      audioEl.volume -= 0.1;
      if (audioEl.volume <= 0.1) {
        audioEl.volume = 0;
      }
    } else {
      audioEl.volume = 0;
      clearInterval(fade);
      audioEl.pause();
    }
  }, 50);
  console.log('停止音乐');
};

watch(currentIndex, (n, o) => {
  showMusic.value = true;
  if (o === 0 && n === 1) playMusic();
  
}, {once: true})

//禁用滚轮事件
document.addEventListener('mousewheel', (e) => e.preventDefault(), {
  passive: false,
});

// 翻页
const { start, end } = usePosition();
// 是否处于动画期间的flag, 防止多次翻页
const transitional = ref(false);
// 是否存在子组件内的翻页动画
const subTransitional = ref(false);
provide('setSubTransitional', (value) => (subTransitional.value = value));
// 也提供给子组件使用
provide('transitional', transitional);

const nextPage = () => {
  // 首页、最后一页、动画期间不翻页
  if (views.length === currentIndex.value + 1 
    || currentIndex.value === 0
    || subTransitional.value
    || views.length === currentIndex.value + 2
  ) return;
  next();
};

const prevPage = () => {
  transitionStyle.value = 'straight-translate-Y-up'
  if (currentIndex.value === 0 || subTransitional.value || views.length === currentIndex.value + 1) return;
  currentIndex.value = nextIndex(currentIndex.value - 1, -1);
}

document.addEventListener('touchend', () => {
  // 只有当滑动距离超过屏幕高度的 20% 时才翻页
  if (start.value.y - end.value.y > window.innerHeight * 0.2)
    nextPage();
  else if (start.value.y - end.value.y < - window.innerHeight * 0.2)
    prevPage();
});

provide('nextPageFunc', nextPage);

// 页面过渡的模式, 默认平移
const transitionStyle = ref('straight-translate-Y');
</script>

<style scoped lang="scss">
@import url('@/assets/css/transition.scss');
.layout {
  width: 100vw;
  // height: 110vh;
  height: calc(var(--vh, 1vh) * 100);
  // 隐藏滚动条
  overflow: hidden;
  // 字体颜色
  color: #203273;
  // 字与字之间的间距
  letter-spacing: 2px;

  .header {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100vw;
    height: 10vh;
    text-align: center;
    font-size: 26px;
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 64px;
    z-index: 10085;
    .text {
      width: 100vw;
      bottom: 5vh;
      text-align: center;
      font-size: 10px;
      color: #9f9f9f;
      line-height: 1.1;
    }
    .down-arrow {
      position: absolute;
      bottom: 1vh;
      left: 50%;
      transform: translate(-50%, 0);
      width: 207px;
      height: 4vh;
      animation: down-arrow-move 3s infinite;
    }
  }
  .return-icon {
    position: absolute;
    left: 33px;
    top: 50%;
    transform: translateY(-50%);
  }
  .music-icon {
    position: absolute;
    right: 33px;
    top: 32px;
    width: 29px;
    height: 29px;
    transform: translateY(-50%);
  }
  .play {
    // 旋转动画，快点儿
    animation: rotate 2s infinite linear;
  }
  .share-icon {
    position: absolute;
    left: 367px;
    top: 50%;
    width: 29px;
    height: 29px;
    transform: translateY(-50%);
  }
}

//下箭头闪烁动画
@keyframes down-arrow-move {
  0% {
    transform: translate(-50%, 0);
  }
  30% {
    transform: translate(-50%, 10px);
  }
  70% {
    transform: translate(-50%, 10px);
  }
  100% {
    transform: translate(-50%, 0);
  }
}

@keyframes rotate {
  0% {
    transform: translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateY(-50%) rotate(360deg);
  }
}
</style>
