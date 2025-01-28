import { createApp } from 'vue'
import '@/assets/css/reset.scss'
import '@/assets/css/base.scss'
import App from '@/App.vue'

const preloadImages = async () => {
    // 获取所有图片模块
    const imageModules = import.meta.glob('@/assets/img/**/*.{png,jpg,jpeg,gif,svg,webp}', {
      eager: true,    // 立即加载模块
      as: 'url'       // 直接获取URL
    });
  
    // 创建并存储所有图片实例
    const preloaded = Object.values(imageModules).map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url
        img.onload = resolve
        img.onerror = reject
      })
    });
  
    try {
      await Promise.all(preloaded)
      console.log('All images preloaded!')
    } catch (e) {
      console.warn('Some images failed to preload:', e)
    }
  }
  
  // 调用预加载函数
  preloadImages()
  
createApp(App).mount('#app')
