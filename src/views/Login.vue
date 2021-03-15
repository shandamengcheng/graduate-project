<template>
  <div class="login-container">
    <div class="login">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <div class="login-item">
        <div class="login-item_content">
          <span class="svg-container">
            <img src="@/assets/user.png" />
          </span>
          <div class="login-input">
            <input type="text" placeholder="Username" />
          </div>
        </div>
      </div>
      <div class="login-item">
        <div class="login-item_content">
          <span class="svg-container">
            <img src="@/assets/psd.png" />
          </span>
          <div class="login-input">
            <input type="password" placeholder="Password" />
          </div>
        </div>
      </div>
      <button class="login-button" @click="linkToHome">login</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
  methods: {
    linkToHome: function() {
      this.$router.push('./home');
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}

.login {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.title-container {
  position: relative;
}

.title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}

.login-item {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
  margin-bottom: 22px;
  height: 54px;
}

.login-item_content {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  padding: 0;
  display: flex;
  justify-content: flex-start;
}

.svg-container {
  color: #889aa4;
  width: 20px;
  margin: 15px 10px;
  height: 20px;
}
.svg-container img {
  vertical-align: top;
  width: 100%;
  height: 100%;
}

.login-input {
  display: inline-block;
  height: 52px;
  width: 85%;
}

.login-input input {
  background: transparent;
  border: 0;
  display: block;
  -webkit-appearance: none;
  border-radius: 0;
  /* padding: 5px; */
  color: #fff;
  height: 100%;
  width: 100%;
  line-height: 52px;
  caret-color: #fff;
  font-size: 1em;
  outline: none;
}

.login-button {
  width: 100%;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 4px;
  margin-bottom: 30px;
}
</style>
