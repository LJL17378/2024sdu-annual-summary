import { ref } from 'vue'
import axios from 'axios'

// 创建一个ref对象，用于存储用户数据
const userData = ref({"studentId":"202300300075","name":"林星宇","birthday":"20040916","sameBirthday":65,"academy":"软件学院","major":"软件工程","studentSource":"浙江省","sameStudentSource":578,"classroom":"软件园1区307d","courseNum":26,"courseCredit":58,"morningClass":94,"eveningClass":70,"libraryDay":71,"borrowNum":0,"preferLibrary":"软件园校区图书馆","libraryTimeOnTest":11,"preferCanteen":["齐鲁软件学生二食堂"],"maxAmount":"20","maxAmountTime":"2025-01-01 17:37:50.0","maxAmountCanteen":"齐鲁软件学生一食堂","scholarship":["国家奖学金","特长奖一等（研究创新类）"],"honor":["三好学生"],"busCount":19,"busNumber":"鲁A57007","volunteerCount":14,"volunteerDuration":"123","workStudy":"学生在线"})

export const requestUserData =
  async (id, password) => {
    // 请求用户数据...
    // 使用formData格式提交数据
    const formData = new FormData()
    formData.append('SDUid', id)
    formData.append('password', password)
    const res = await axios.post('https://annual-summary.sduonline.cn/api/auth/login', formData)
    if (!res || !res.data) throw new Error('登录失败')
    const {data, code} = res.data
    switch (code) {
      case 200:
        console.log(data);
        userData.value = data // 将请求到的数据赋值给userData
        // 计算grade，使用当前年份减去用户的入学年份
        const now = new Date()
        userData.value.grade = now.getFullYear() - parseInt(userData.value.grade)
        break
      case 401:
        throw new Error('学号或密码错误')
      default:
        throw new Error('登录失败')
    }
  }

export default userData
