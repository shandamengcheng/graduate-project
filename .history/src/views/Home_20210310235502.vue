<template>
  <div class="home">
    <SideBar />
    <div class="nav">
      <NavigationBar />
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login";
import SideBar from "@/views/SideBar";
import NavigationBar from "@/views/NavigationBar";

export default {
  name: "Home",
  components: {
    Login,
    SideBar,
    NavigationBar,
  },
};
</script>

<style scoped>
.home {
  min-height: 100%;
  width: 100%;
  /* background-color: #2d3a4b;
    color: white; */
  overflow: hidden;
}
.nav {
  width: calc(100% - 220px);
}
</style>
