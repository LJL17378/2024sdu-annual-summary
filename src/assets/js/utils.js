import { ref } from 'vue'

// 记录滑动起始位置和结束位置
export const usePosition = () => {
  const start = ref({ x: 0, y: 0 }),
        end = ref({ x: 0, y: 0 })
  document.addEventListener('touchstart', e => {
    start.value.x = e.touches[0].pageX
    start.value.y = e.touches[0].pageY
  })
  document.addEventListener('touchmove', e => {
    end.value.x = e.touches[0].pageX
    end.value.y = e.touches[0].pageY
  })
  document.addEventListener('touchend', e => {
    end.value.x = e.changedTouches[0].pageX
    end.value.y = e.changedTouches[0].pageY
  })
  return { start, end }
}
