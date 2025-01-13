import { ref } from 'vue'
import axios from 'axios'

// {
//   "eight_am": [
//       {
//           "courseId": "sd02810600",
//           "courseName": "马克思主义基本原理"
//       },
//       {
//           "courseId": "sd03032051",
//           "courseName": "算法设计与分析(双语)"
//       },
//       {
//           "courseId": "sd03031020",
//           "courseName": "信息安全导论"
//       },
//       {
//           "courseId": "sd03032260",
//           "courseName": "系统安全"
//       },
//       {
//           "courseId": "sd03030751",
//           "courseName": "数据库系统(双语)"
//       },
//       {
//           "courseId": "sd03030731",
//           "courseName": "数据结构课程设计(双语)"
//       }
//   ],
//   "eight_pm": [
//       {
//           "courseId": null,
//           "courseName": "众智科学与网络化产业"
//       },
//       {
//           "courseId": null,
//           "courseName": "数据结构课程设计(双语)"
//       },
//       {
//           "courseId": null,
//           "courseName": "周易与中国传统文化(国学)"
//       }
//   ]
// }

// 创建一个ref对象，用于存储用户数据
const userData = ref({
  student_id: '',
  name: '',
  academyNumber: '',
  academy: '',
  major: '',
  birthday: '',
  sameBirthday: '',
  grade: '',
  status: '',
  campus: '',
  source: '',
  sameOrigin: '',
  amount: '',
  amountRank: '',
  borrowNumber: '',
  borrowRank: '',
  libraryNumber: '',
  libraryRank: '',
  earliestEat: '',
  latestEat: '',
  classroomName: '',
  classroomNumber: '',
  eight_am: [],
  eight_pm: []
})

export const requestTrueUserData =
  async (id, password) => {
    // 请求用户数据...
    // 使用formData格式提交数据
    const formData = new FormData()
    formData.append('SDUid', id)
    formData.append('password', password)
    await axios.post('https://i.sdu.edu.cn/annual-summary/auth/login', formData)
      .then(res => {
        // console.log(res.data);
        switch (res.data.code) {
          case 200:
            userData.value = res.data.data // 将请求到的数据赋值给userData
            // 计算grade，使用当前年份减去用户的入学年份
            const now = new Date()
            userData.value.grade = now.getFullYear() - parseInt(userData.value.grade)
            // console.log(userData.value);
            break
          case 401:
            throw new Error('学号或密码错误')
          case 404:
            throw new Error('用户不存在')
          default:
            throw new Error('登录失败')
        }
      });
  }

// 暴露一个接口，用于请求用户数据
export const requestUserData =
  async () => {
    // 请求用户数据...
    await axios.get('https://i.sdu.edu.cn/annual-summary/auth/back-door?id=202100300224').then(res => {
      // console.log(res.data.data);
      userData.value = res.data.data // 将请求到的数据赋值给userData
      // 计算grade，使用当前年份减去用户的入学年份
      const now = new Date()
      userData.value.grade = now.getFullYear() - parseInt(userData.value.grade)
      console.log(userData.value);
    });
  }

// 暴露一个接口，计算最后的结语
export const getConclusion = () => {
  let items = [
    {
      name: 'amount',
      value: userData.value.amountRank,
      num: userData.value.amount
    },
    {
      name: 'borrow',
      value: userData.value.borrowRank,
      num: userData.value.borrowNumber
    },
    {
      name: 'library',
      value: userData.value.libraryRank,
      num: userData.value.libraryNumber
    },
  ]
  console.log(items);
  let result = 'award-early-eight'
  const earlyEightTimes = userData.value.eight_am.length;

  //如果{name:'amount', value:0}  则删掉这一项
  items = items.filter(item => !item.num === 0)
  if (items.length === 0) {
    if(earlyEightTimes === 0)return 'award-normal';
    else return result;
  }
  // 排序，选最小的（因为都是排名，越小越好）
  items = items.sort((a, b) => a.value - b.value)
  console.log(items);

  // 选取最小的排名
  result = items[0].name === 'borrow' ? 'award-reading' : result
  result = items[0].name === 'amount' ? 'award-losing-card' : result
  result = items[0].name === 'library' ? 'award-library-king' : result

  console.log('result: ', result);
  return result
}

export default userData
