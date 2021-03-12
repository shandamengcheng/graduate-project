<template>
  <div class="home">
    <SideBar />
    <div class="nav">
      <NavigationBar />
      <router-view />
      <!-- <Search /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login";
import SideBar from "@/components/SideBar";
import NavigationBar from "@/components/NavigationBar";
import Search from "@/components/Search";

export default {
  name: "Home",
  components: {
    Login,
    SideBar,
    NavigationBar,
    Search,
  },
};
</script>

<style scoped>
.home {
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: #2d3a4b;
    color: white; */
  overflow: hidden;
}
.nav {
  width: calc(100% - 220px);
}
</style>
