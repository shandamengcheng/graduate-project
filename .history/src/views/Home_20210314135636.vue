<template>
  <div class="home">
    <SideBar @changeView="navigationToView" />
    <div class="main">
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
  methods: {
    navigationToView: function(path) {
      console.log"Home:", (path)
    }
  }
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
.main {
  width: calc(100% - 220px);
  min-width: 600px;
}
</style>
