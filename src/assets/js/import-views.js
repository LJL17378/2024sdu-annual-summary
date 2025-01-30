import Login from "@/views/login.vue";
import P01Age from "@/views/p01_age.vue";
import P02Birthday from "@/views/p02_birthday.vue";
import P04Hometown from "@/views/p04_hometown.vue";
import P05Classroom from "@/views/p05_classroom.vue";
import P06Course from "@/views/p06_course.vue";
import P07Morning8 from "@/views/p07_morning8.vue";
import P08Evening9 from "@/views/p08_evening9.vue";
import P09LibStats from "@/views/p09_libstats.vue";
import P10HotBook from "@/views/p10_hotbook.vue";
import P11LibPrefer from "@/views/p11_libprefer.vue";
import P115_libexam from "@/views/p11.5_libexam.vue";
import P12Eating from "@/views/p12_eating.vue";
import P13Spending from "@/views/p13_spending.vue";
import P14Honor from "@/views/p14_honor.vue";
import P15BusStats from "@/views/p15_busstats.vue";
import P16BusPrefer from "@/views/p16_busprefer.vue";
import P17Volunteering from "@/views/p17_volunteering.vue";
import P18Working from "@/views/p18_working.vue";
import P19sduol from "../../views/p19_sduol.vue";
import Summary from "@/views/summary.vue";
import End from "../../views/end.vue";
import Error from "../../views/error.vue";

const views = [
  Login,
  P01Age,
  P02Birthday,
  P04Hometown,
  P05Classroom,
  P06Course,
  P07Morning8,
  P08Evening9,
  P09LibStats,
  P10HotBook,
  P11LibPrefer,
  P115_libexam,
  P12Eating,
  P13Spending,
  P14Honor,
  P15BusStats,
  P16BusPrefer,
  P17Volunteering,
  P18Working,
  P19sduol,
  Summary,
  End,
  Error
];
export default views;

import userData from "./request";

export function nextIndex(idx, step = 1) {
  if (!userData.value) return 0;
  const { 
    studentSource, maxAmount, libraryDay, busCount, libraryTimeOnTest, classroom, courseNum,
    honor, scholarship, volunteerCount, preferCanteen, birthday, sameBirthday
  } = userData.value;
  while (true) {
    const view = views[idx];
    if (
      ((view === P01Age || view === P02Birthday) & !birthday) ||
      (view === P02Birthday & !sameBirthday) || 
      (view === P04Hometown && !studentSource) ||
      (view === P05Classroom && !classroom) ||
      ((view === P06Course || view === P07Morning8 || view == P08Evening9) && !courseNum) ||
      (view === P11LibPrefer && !libraryDay) ||
      (view === P115_libexam && !libraryTimeOnTest) ||
      (view === P12Eating && !preferCanteen?.length) ||
      (view === P13Spending && !maxAmount) ||
      (view === P14Honor && !honor?.length && !scholarship?.length) ||
      (view === P16BusPrefer && !busCount) ||
      (view === P17Volunteering && !volunteerCount) 
    ) idx += step;
    else break;
  }
  return idx;
}