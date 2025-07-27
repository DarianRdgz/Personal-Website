<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
  <div class="layout">
    <div class="top-sub">
      <div class="title">
        <img alt="Vue logo" src="./assets/us.png">
        <div class="main-name">Foo Holdings</div>
      </div>
      <transition name="fade">
        <div v-if="successMessage" class="success-overlay">
          <div class="success-msg">{{ successMessage }}</div>
        </div>
      </transition>
      <div class="account-access">
        <button v-if="!isLoggedIn" class="login" @click="openLogin">Login</button>
        <button v-if="!isLoggedIn" class="register" @click="openRegister">Register</button>
        <button v-if="isLoggedIn" class="adfree">Ad Free</button>
        <button v-if="isLoggedIn" class="logout" @click="logout">Logout</button>
      </div>
    </div>

    <div class="sidebar">
      <div class="account" @click="handleAccountClick" style="cursor: pointer;">
        <div class="account-img">
          <img v-if="isLoggedIn" src="./assets/act.jpg">
          <svg v-if="!isLoggedIn" xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#050303" color="#eee"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
        </div>
        <div class="account-name">{{ isLoggedIn ? userName : 'Guest' }}</div>
      </div>

      <div class="account-info">
        <label for="dash-bttn"><router-link to="/dashboard"><button id="dash-bttn">Dashboard</button></router-link></label>
        <label for="cash-bttn">
          <button id="cash-bttn" >
            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#e3e3e3"><path d="m608-368 46-166-142-98-46 166 142 98ZM160-207l-33-16q-31-13-42-44.5t3-62.5l72-156v279Zm160 87q-33 0-56.5-24T240-201v-239l107 294q3 7 5 13.5t7 12.5h-39Zm206-5q-31 11-62-3t-42-45L245-662q-11-31 3-61.5t45-41.5l301-110q31-11 61.5 3t41.5 45l178 489q11 31-3 61.5T827-235L526-125Zm-28-75 302-110-179-490-301 110 178 490Zm62-300Z"/></svg>
            Casino
          </button>
        </label>
        <label for="surv">
          <router-link to="/surveys"><button id="surv">Surveys</button></router-link>

        </label>
        <p>Tokens: 0</p>
        <label for="cart-bttn">
          <button id="cart-bttn" >
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e3e3e3"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg> 
            Cart (0)
          </button>
        </label>

        <svg v-if="!isLoggedIn" class="account-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="black"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/>
        </svg>
        
      </div>

      <div class="nav">
        <label for="home-bttn"><router-link to="/"><button id="home-bttn">Home</button></router-link></label>
        <label for="game"><router-link to="/games"><button id="game">Games</button></router-link></label>
        <label for="service"><router-link to="/services"><button id="service">Services</button></router-link></label>
        <label for="publication"><router-link to="/publications"><button id="service">Publications</button></router-link></label>

      </div>

    </div>

    <div class="content">
      <div class="content">
        <router-view />
      </div>
    </div>

    <!-- Login Modal -->
    <div v-if="showLoginModal" class="modal-overlay" @click.self="closeModals">
      <div class="modal-box">
        <h2>Login</h2>
        <form @submit.prevent="submitLogin">
          <label>Email:</label>
          <input type="email" v-model="loginEmail" required />
          
          <label>Password:</label>
          <input type="password" v-model="loginPassword" required />
          
          <p class="modal-link" @click="switchToRegister">Don't have an account? <span class="link-text">Register</span></p>
          
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

    <!-- Register Modal -->
    <div v-if="showRegisterModal" class="modal-overlay" @click.self="closeModals">
      <div class="modal-box">
        <h2>Register</h2>
        <form @submit.prevent="submitRegister">
          <h3>Basic Member:</h3>
          <label>User:</label>
          <input type="user" v-model="registerUser" required />

          <label>Email:</label>
          <input type="email" v-model="registerEmail" required />
          
          <label>Password:</label>
          <input type="password" v-model="registerPassword" required />
          
          <label>Confirm Password:</label>
          <input type="password" v-model="registerConfirm" required />

          <h3>Verified Member:</h3>

          <label>Phone Number: (Optional)</label>
          <input type="phone" v-model="registerPhone" />
          
          <p class="modal-link" @click="switchToLogin">Already have an account? <span class="link-text">Login</span></p>
          
          <button type="submit">Register</button>
        </form>
      </div>
    </div>

    <div v-if="showVerificationModal" class="modal-overlay" @click.self="closeModals">
      <div class="modal-box">
        <h2>Email Verification</h2>
        <p>Enter the 6-digit code sent to {{ sentToEmail }}</p>
        <input v-model="verificationCode" maxlength="6" placeholder="Enter code" />

        <button @click="submitVerification">Verify</button>

        <div v-if="sentToPhone">
          <p>Or verify with phone: {{ sentToPhone }}</p>
          <button @click="resendCode('sms')">Resend SMS Code</button>
        </div>

        <button @click="resendCode('email')">Resend Email Code</button>
        <button @click="closeModals">Cancel</button>
      </div>
    </div>


  </div>

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      showLoginModal: false,
      showRegisterModal: false,
      showVerificationModal: false,
      registerUser: '',
      loginEmail: '',
      loginPassword: '',
      registerEmail: '',
      registerPassword: '',
      registerConfirm: '',
      registerPhone: '',
      isLoggedIn: false,
      successMessage: '',
      verificationCode: '',
      sentToEmail: '',
      sentToPhone: '',
      userName: ''
    };
  },
  methods: {
    openLogin() {
      this.showLoginModal = true;
      this.showRegisterModal = false;
    },
    openRegister() {
      this.showRegisterModal = true;
      this.showLoginModal = false;
    },
    switchToRegister() {
      this.openRegister();
    },
    switchToLogin() {
      this.openLogin();
    },
    closeModals() {
      this.showLoginModal = false;
      this.showRegisterModal = false;
      this.showVerificationModal = false;
    },
    async submitLogin() {
      try {
        const res = await axios.post('http://localhost:8081/api/users/login', {
          email: this.loginEmail
        });
        console.log("Login success:", res.data);
        this.userName = res.data.user || 'User';
        this.closeModals();
        this.successMessage = 'Login successful. Welcome!';
        this.isLoggedIn = true;
        setTimeout(() => {
          this.successMessage = '';
        }, 1000);
      } catch (err) {
        alert("Login failed: " + err.response?.data?.message || err.message);
      }
    },

    async submitRegister() {
      if (this.registerPassword !== this.registerConfirm) {
        alert("Passwords do not match!");
        return;
      }

      try {
        const res = await axios.post('http://localhost:8081/api/users/register', {
          user: this.registerUser,
          email: this.registerEmail,
          phone: this.registerPhone,
          role: "user",
          tokens: 500
        });
        console.log("Registration success:", res.data);
        this.sentToEmail = this.registerEmail;
        this.sentToPhone = this.registerPhone;
        this.showVerificationModal = true;
        this.closeModals();

        await axios.post('http://localhost:8081/api/verification/send', {
          email: this.registerEmail,
          phone: this.registerPhone
        });
      } catch (err) {
        alert("Registration failed: " + err.response?.data?.message || err.message);
      }
    },

    async submitVerification() {
      try {
        const res = await axios.post('http://localhost:8081/api/verification/confirm', {
          email: this.sentToEmail,
          code: this.verificationCode
        });
        
        this.showVerificationModal = false;
        console.log("Verification success:", res.data);
        this.successMessage = 'Registration successful!';
        setTimeout(() => {
          this.successMessage = '';
        }, 1000);
      } catch (err) {
        alert("Invalid or expired verification code.");
      }
    },

    async resendCode(method) {
      try {
        await axios.post('http://localhost:8081/api/verification/send', {
          email: this.sentToEmail,
          phone: method === 'sms' ? this.sentToPhone : null
        });
        alert(`${method === 'sms' ? 'SMS' : 'Email'} code resent.`);
      } catch (err) {
        alert("Failed to resend code: " + err.message);
      }
    },

    logout() {
      this.isLoggedIn = false;
      this.userName = '';
      this.successMessage = 'You have been logged out successfully.';
      setTimeout(() => {
        this.successMessage = '';
      }, 2000);
      this.$router.push('/');
    },

    handleAccountClick() {
      if (this.isLoggedIn) {
        this.$router.push('/account');
      } else {
        this.openLogin();
      }
    }

  }
};
</script>


<style>
@import "./assets/styles/navStyle.css";
</style>
