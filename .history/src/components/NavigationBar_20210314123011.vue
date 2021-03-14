<template>
  <div class="navbar">
    <img src="@/assets/bai.jpg" class="avatar-img">
    <img src="@/assets/bai.jpg" class="avatar-submenu">
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
  /* background: pink; */
  display: flex;
  justify-content: flex-end;
  border-bottom: .5px solid rgb(180, 178, 178);
  box-shadow: 0px 0px 5px rgb(180, 178, 178);
}
.navbar img {
  display: inline-block;
  height: 100%;
  width: 50px;
  border-radius: 10px;
}
</style>