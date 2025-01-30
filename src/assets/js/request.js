import { ref, inject } from 'vue'
import axios from 'axios'



// 创建一个ref对象，用于存储用户数据
const userData = ref(null)

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
    console.log(code)
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
