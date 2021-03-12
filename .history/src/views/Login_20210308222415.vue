<template>
  <div class="login-container">
    <div class="login">
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <div class="login-item">
        <div class="login-item_content">
          <span class="svg-container">
          测试
          </span>
          <div class="login-input">
            <input type="text" placeholder="用户名" />
          </div>
        </div>
      </div>
      <div class="login-item">
        <div class="login-item_content">
          <span class="svg-container">
            <svg data-v-f9f7fefc="" data-v-1399390a="" aria-hidden="true" class="svg-icon"><use data-v-f9f7fefc="" xlink:href="#icon-user"></use></svg>
          </span>
          <div class="login-input">
            <input type="text" placeholder="用户名" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  border: 1px solid hsla(0,0%,100%,.1);
  background: rgba(0,0,0,.1);
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
}


.svg-container {
  /* padding: 6px 5px 6px 15px; */
  color: #889aa4;
  vertical-align: top;
  /* text-align: left; */
  margin:0;
  width: 10%;
  height: 52px;
  display: inline-block;
  /* line-height: 40px; */
}

.login-input {
  display: inline-block;
  height: 52px;
  width: 85%;
}

.login-input input {
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 12px 5px 12px 15px;
  color: #fff;
  height: 47px;
  caret-color: #fff;
}
</style>