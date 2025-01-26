<template>
  <div class="index">
    <div class="login_card" v-if="showPopup">
      <div v-if="showPopup" class="popup">
        <img class="close" src="../assets/svg/close.svg" alt="关闭" @click="showPopup = false"/>
        <div style="margin-top: 20px; margin-bottom: 1em;">统一认证登录</div>
        <input type="text" v-model="studentId" placeholder="学号" />
        <input type="password" v-model="password" placeholder="密码" />
        <button @click="login" :class="{loading: isLoading}">{{ isLoading ? '登录中' : '登录' }}</button>
      </div>
    </div>

    <!-- <img
      class="index-title"
      src="@/assets/img/index_title.png"
      alt="加载失败"
    /> -->

    <!-- <indexTitle class="index-title" /> -->
    <!-- <indexImg class="index-img" /> -->
    <img class="clock" style="position: absolute;width: 110vw;left: 20vw;top: -60vw;" src="../assets/img/welcome-clock.png" alt="">
    <img class="index-img" src="../assets/img/welcome-sandglass.png" alt="加载失败" />
    <div class="text-ta" v-if="!showPopup">
      <p>一年时光轻轻划过，</p>
      <p>过去的一年满是美好的回忆，</p>
      <p>快来按下按钮，</p>
      <p>开启你的年度报告，</p>
      <p>回味专属于你的2024！</p>
    </div>
    <div class="image-filter imgAppear">
      <img src="../assets/img/filter.png" alt="加载失败">
    </div>


    <div class="agreement_card" v-if="showAgreementText">
      <img class="close" src="../assets/svg/close.svg" alt="关闭" @click="showAgreementText = false"/>
      <h1 class="title">"我的SDU年度总结"授权协议</h1>
      <p>欢迎阅读我们的授权协议，我们尊重并保护所有使用我们服务的用户的个人隐私权。为了更好地保障您的权益，请您在使用我们的服务之前，仔细阅读本授权协议的所有内容。如果您对本协议的任何条款有异议，您可以选择不使用我们的服务。当您使用我们的服务时，即表示您已同意我们按照本协议收集、使用、披露和保护您的个人信息。本协议旨在向您解释我们如何收集、使用、保护和处理您的个人信息。请仔细阅读本协议，以了解我们对您个人信息的处理方式。</p>
      <p>在阅读本协议前，请允许我们对您的使用表示感谢。本应用程序首次为山东大学济南校本部本科学子提供年度报告，如有任何问题或建议请联系我们，您的意见对我们非常重要。同时，由于本应用程序的特殊性，我们会收集和使用您的个人信息，我们将尽力保护您的个人信息，以保证您的隐私安全。</p>
      <p class="sub-title">1. 适用范围</p>
      <p>本协议适用于我们的所有服务，包括应用程序、网站和其他服务。但不适用于其他第三方向您提供的服务。我们强烈建议您在使用第三方服务之前仔细阅读其隐私政策，以了解其对您个人信息的处理方式。</p>
      <p class="sub-title">2. 信息收集和使用</p>
      <p>我们可能会收集以下类型的个人信息:</p>
      <p class="li">● 用户认证信息：为了使用我们的应用程序，您需要通过学校的统一认证系统进行登录。我们会收集和使用您的学校提供的认证信息，包括但不限于学号、姓名和学校。这些信息仅用于身份验证和提供服务，并且不会与任何第三方共享，除非法律另有规定。</p>
      <p class="li">● 用户身份信息：本应用程序会收集您公开的基本身份信息，包括姓名、籍贯和出生日期，并用作统计用途。该部分信息由山东大学信息化工作办公室提供，所述信息的使用仅限于本应用程序，不会与第三方服务共享或保存。</p>
      <p class="li">● 用户教育信息：本应用程序会收集您的教育信息，包括但不限于修读课程信息及其详情。该部分信息由山东大学本科生院提供，所述信息的使用仅限于本程序，不会与第三方服务共享或保存。</p>
      <p class="li">● 用户图书馆使用信息：本应用程序会收集您对山东大学图书馆的使用信息，包括您的出入记录和借阅记录。该部分信息由山东大学图书馆提供，同时包含山东大学图书馆的相关运营数据，如总体借阅次数、借阅榜单、新购入书籍等。所述信息的使用仅限于本程序，不会与第三方服务共享或保存。</p>
      <p class="li">● 用户校园卡使用信息：本应用程序会收集您在山东大学使用校园卡的信息，即校园卡消费流水。该部分由山东大学信息化工作办公室提供，所述信息的使用仅限于本程序，不会与第三方服务共享或保存。</p>
      <p class="sub-title">3. 信息保护</p>
      <p>我们采取合理的安全措施来保护您的个人信息，防止未经授权的访问、使用或披露。我们使用加密技术、访问控制和其他安全措施来保护您的信息。您的个人信息在传输过程中会进行相应的脱敏和加密，以确保隐私安全性。我们不会保存您的各项原始数据，并对业务数据进行妥善存储和处理，以避免未经授权的访问、使用或泄漏。</p>
      <p class="sub-title">4. 信息披露</p>
      <p>我们不会向第三方出售、交易或转让您的个人信息，除非事先获得您的同意，或根据法律要求或法院命令进行披露。您的隐私对我们非常重要，我们会尽力保护您的个人信息。然而，在以下情况下，我们可能会披露您的个人信息:</p>
      <p class="li">● 根据法律要求或法院命令进行披露。</p>
      <p class="li">● 保护我们的合法权益，例如防止欺诈或调查违法行为。</p>
      <p class="li">● 在获得您的明确同意的情况下。</p>
      <p class="sub-title">5. 联系我们</p>
      <p>如果您对本协议有任何疑问或意见，请联系我们，您的意见对我们非常重要，我们将尽力回答您的问题并解决您的关注。您可以通过“山东大学学生在线”公众号后台进行咨询。</p>
      <p>感谢您阅读我们的授权协议，并对您的支持表示衷心的感谢。我们将继续努力保护您的隐私权并提供优质的服务。</p>
      <p>再次感谢您选择使用我们的服务！</p>
    </div>

    <div
      :class="{ shake: isShaking }"
      class="agreement"
      @click="agree = !agree"
    >
      <selectImg v-if="agree" class="index-selection" />
      <noSelectImg v-else class="index-selection" />
      <span class="index-text">同意<span style="color: rgb(94, 94, 219)" @click.stop="showAgreementText = true">《授权协议》</span>并查看报告</span>
    </div>
    <indexBtn class="index-btn" @click="checkAgree" />
  </div>
</template>

<script setup>
import { ref, inject, onMounted } from 'vue';
import indexImg from '../assets/svg/index_svg.vue';
import indexTitle from '../assets/svg/index_title.vue';
import selectImg from '../assets/icons/select.vue';
import noSelectImg from '../assets/icons/no_select.vue';
import indexBtn from '../assets/svg/index_btn.vue';
import userData, { requestUserData } from '../assets/js/request';
const showPopup = ref(false);
const nextPage = inject('nextPageFunc');
const next = inject('next')
const agree = ref(false);
const isShaking = ref(false);

//测试用
// onMounted(async() => {
//   await requestUserData();
//   conclusion.value = getConclusion();
//   console.log('conclusion:',conclusion.value);
//   currentIndex.value = 14;
// });

const checkAgree = () => {
  if (!agree.value) {
    //授权协议图标抖动且闪烁
    isShaking.value = true;
    setTimeout(() => {
      isShaking.value = false;
    }, 500);
  } else if (userData.value) {
    next();
  } else {
    showPopup.value = true;
  }
};
const isLoading = ref(false);
const studentId = ref('');
const password = ref('');

const login = async () => {
  // console.log('login');
  // console.log('studentId:', studentId.value);
  // console.log('password:', password.value);
  // 捕获错误
  if (isLoading.value) return;
  try {
    isLoading.value = true;
    await requestUserData(studentId.value, password.value);
    localStorage.setItem('data', JSON.stringify(userData.value));
    isLoading.value = false;
    showPopup.value = false;
    next();
  } catch (error) {
    console.log('error:', error);
    isLoading.value = false;
    alert(error.message);
  }
  showPopup.value = true;
};

const showAgreementText = ref(false)
</script>

<style scoped lang="scss">
@keyframes rotate {
    0% {
      transform:rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
@keyframes smallShake  {
  0%{
    transform: rotate(0deg) translateX(0px) translateY(0px);
  }
  33%{
    transform: rotate(15deg) translateX(5px) translateY(10px);
  }
  66%{
    transform: rotate(10deg) translateX(5px) translateY(20px);
  }
  100%{
    transform: rotate(0deg) translateX(0px) translateY(0px);
  }
}
@keyframes shake {
  0%,
  50%,
  100% {
    background-color: transparent;
  }
  25%,
  75% {
    background-color: #ffc952;
  }
  0% {
    transform: translate(-49%, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-51%, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-53%, 0px) rotate(1deg);
  }
  30% {
    transform: translate(-47%, 2px) rotate(0deg);
  }
  40% {
    transform: translate(-49%, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-51%, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-53%, 1px) rotate(0deg);
  }
  70% {
    transform: translate(-47%, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-51%, -1px) rotate(1deg);
  }
  90% {
    transform: translate(-49, 2px) rotate(0deg);
  }
  100% {
    transform: translate(-49, -2px) rotate(-1deg);
  }
}
.index {
  .text-ta{
    width: 100%;
    position: absolute;
    bottom: 60vw;
    p{
      text-align: center;
      line-height: 1.9;
      font-size: 18px;
    }
  }
  width: 100%;
    height: 100%;
    margin:0px;
    background: url("../assets/img/welcome-bg.png") no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
    .clock{
      animation: rotate 40s infinite linear;
    }
    .image-filter {
    position: absolute;

    img {
      width: 250vw;
      opacity: 0.15;
    }

    &.imgAppear {
      right: 0;
      bottom: 0;
    }
  }
  .login_card {
    position: absolute;
    top: 32vh;
    left: 50%;
    background-color: #f7f7f7c4;
    box-shadow: 0px 4px 4px rgba(68, 68, 68, 0.25);
    width: 312px;
    height: 256px;
    border-radius: 24px;
    z-index: 1000;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .text {
      // 水平居中
      padding: 0 24px;
      font-size: 24px;
      color: #766a6a;
    }
    button {
      width: 128px;
      height: 36px;
      background-color: #f7f7f7;
      // 添加阴影
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      font-size: 16px;
      color: #766a6a;
      cursor: pointer;
    }
    button.loading {
      background-color: plum !important;
      color: white !important;
    }
    .popup {
      padding: 20px;
      height: max-content;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      input {
        width: 240px;
        height: 40px;
        margin: 10px 0;
        padding: 0 10px;
        border: 1px solid #766a6a;
        border-radius: 20px;
        font-size: 16px;
        color: #766a6a;
      }
      button {
        width: 100px;
        height: 40px;
        background-color: #f7f7f7;
        border: none;
        border-radius: 20px;
        font-size: 16px;
        color: #766a6a;
        cursor: pointer;
      }
      .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
      background-color: #fff;
      border-radius: 50%;
      width: 24px;
      height: 24px;
    }
    }
  }
  .index-title {
    position: absolute;
    top: 36px;
    //居中
    left: 48%;
    transform: translateX(-50%);
    width: 100vw;
  }
  .index-img {
    animation: smallShake infinite 5s linear;
    position: absolute;
    top: 10vw;
    // width: 112vw;
    width: 45vw;
    left: 10vw;
  }
  .agreement {
    position: absolute;
    display: flex;
    width: 264px;
    bottom: 45vw;
    left: 50%;
    transform: translateX(-50%);
    .index-selection {
      width: 16px;
      height: 16px;
      margin-right: 12px;
    }
    .index-text {
      font-size: 14px;
      color: #766a6a;
    }
    &.shake {
      animation: shake 0.5s;
    }
  }
  .agreement_card {
    position: absolute;
    bottom: 7vh;
    padding: 20px;
    width: 75vw;
    height: 80vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    background-color: #f7f7f7;
    border-radius: 20px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    overflow-y: auto;
    .close {
      position: sticky;
      top: 0;
      right: 10px;
      cursor: pointer;
      background-color: #fff;
      border-radius: 50%;
      width: 24px;
      height: 24px;
    }
    .title {
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }
    .sub-title {
      font-size: 18px;
      line-height: 40px;
      font-weight: 700;
    }
    .li {
      margin: 10px 0;
    }
    p {
      margin: 15px 0;
      text-indent: 1.5em;
      font-size: 16px;
      line-height: 24px;
      color: #766a6a;
    }
  }
  .index-btn {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
