<template>
  <div>
    <button @click="showPopup = true">Login</button>
    <div v-if="showPopup" class="popup">
      <input type="text" v-model="studentId" placeholder="Student ID">
      <input type="password" v-model="password" placeholder="Password">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      studentId: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Perform login logic here
      console.log('Logging in...');
      console.log('Student ID:', this.studentId);
      console.log('Password:', this.password);
      
      // Reset input fields and hide popup
      this.studentId = '';
      this.password = '';
      this.showPopup = false;
    }
  }
};
</script>

<style scoped>
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border: 1px solid black;
}
</style>
