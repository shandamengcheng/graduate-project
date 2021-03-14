<template>
  <div class="navbar">
    <img src="@/assets/avatar.png" class="avatar-img">
    <img src="@/assets/arrow.png" class="avatar-submenu">
    <ul class="avatar-menu">
      <li>Home</li>
      <li>Log Out</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
}
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: flex-end;
  border-bottom: .5px solid rgb(180, 178, 178);
  box-shadow: 0px 0px 10px rgb(180, 178, 178);
}
.navbar img {
  display: inline-block;
  height: 100%;
  width: 50px;
  border-radius: 10px;
}
.navbar .avatar-submenu {
  width: 20px;
  height: 20px;
  margin: 30px 5px 0px 5px;
}
.avatar-menu {
  position: absolute;
  top: 60px;
  right: 0;
  width: 90px;
  border: .5px solid rgba(180, 178, 178, .5);
  list-style-type: none;
  padding: 0;
}
.avatar-menu li {
  height: 30px;
  border-bottom: .5px solid rgba(180, 178, 178, .5);
  line-height: 30px;
}
</style>