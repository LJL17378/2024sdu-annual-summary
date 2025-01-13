// 一次导入所有页面组件
import Index from '@/views/index.vue'
import Begin from '@/views/begin.vue'
import AwardReading from '@/views/award_reading.vue'
import AwardEarlyEight from '@/views/award_early_eight.vue'
import AwardLibraryKing from '@/views/award_library_king.vue'
import AwardLosingCard from '@/views/award_losing_card.vue'
import AwardNormal from '@/views/award_normal.vue'
import End from '@/views/end.vue'
import Wishes from '@/views/wishes.vue'
import Volunteering from '../../views/volunteering.vue'
import consume from '../../views/consume.vue'
import Consume from '../../views/consume.vue'

export const views = {
  'index': Index,
  'begin': Begin,
  'wishes': Wishes,
  'volunteering': Volunteering,
  'consume': Consume,
  'award-reading': AwardReading,
  'award-early-eight': AwardEarlyEight,
  'award-library-king': AwardLibraryKing,
  'award-losing-card': AwardLosingCard,
  'award-normal': AwardNormal,
  'end': End
}
