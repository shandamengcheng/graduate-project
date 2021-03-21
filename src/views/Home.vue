<template>
  <div class="home">
    <SideBar @changeView="navigationToView" />
    <div class="main">
      <NavigationBar />
      <keep-alive>
        <router-view />
      </keep-alive>
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
  data() {
    return {
      // isShowMenu: false, // 用来控制头像旁menu的隐藏
    };
  },
  methods: {
    navigationToView: function(path) {
      if (location.pathname == `/home/${path}`) return;
      this.$router.push(`/home/${path}`);
    },
  },
};
</script>

<style>
.home {
  min-height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  /* background-color: #2d3a4b;
    color: white; */
  overflow: hidden;
  position: relative;
  z-index: 0;
}
.main {
  width: calc(100% - 220px);
  min-width: 600px;
  height: 100vh;
  max-height: 100vh;
}
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 0px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #f5f5f5;
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 6px #f5f5f5;
}
</style>
