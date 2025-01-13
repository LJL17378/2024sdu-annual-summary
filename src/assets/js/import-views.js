// 一次导入所有页面组件
import Index from '@/views/index.vue'
import Begin from '@/views/begin.vue'
import Birthday from '@/views/birthday.vue'
import SameBirthday from '@/views/same-birthday.vue'
import Townsman from '@/views/townsman.vue'
import MostVisited from '@/views/most-visited.vue'
import NewBooks from '@/views/new-books.vue'
import BorrowBooks from '@/views/borrow-books.vue'
import Literature from '@/views/literature.vue'
import NonLiterature from '@/views/non-literature.vue'
import Library from '@/views/library.vue'
import EarlyEight from '@/views/early-eight.vue'
import Night from '@/views/night.vue'
import Breakfast from '@/views/breakfast.vue'
import Paying from '@/views/paying.vue'
import AwardReading from '@/views/award_reading.vue'
import AwardEarlyEight from '@/views/award_early_eight.vue'
import AwardLibraryKing from '@/views/award_library_king.vue'
import AwardLosingCard from '@/views/award_losing_card.vue'
import AwardNormal from '@/views/award_normal.vue'
import BorrowCount from '@/views/borrow-count.vue'
import End from '@/views/end.vue'
import ExamMonth from '@/views/exam-month.vue'
import Wishes from '@/views/wishes.vue'

export const views = {
  'index': Index,
  'begin': Begin,
  'wishes': Wishes,
  'award-reading': AwardReading,
  'award-early-eight': AwardEarlyEight,
  'award-library-king': AwardLibraryKing,
  'award-losing-card': AwardLosingCard,
  'award-normal': AwardNormal,
  'borrow-count': BorrowCount,
  'end': End
}
