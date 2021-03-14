<template>
  <div class="navbar">
    <img src="@/assets/avatar.png" class="avatar-img" />
    <img src="@/assets/arrow.png" class="avatar-submenu" @click="toggleMenu"/>
    <ul class="avatar-menu" v-if="showMenu" @click="toggleMenu">
      <li class="home" @click="navigateToPage('home')">Home</li>
      <li @click="navigateToPage('login')">Log Out</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu: function() {
      this.showMenu = !this.showMenu;
    },
    navigateToPage: function(path) {
      // if (location.pathname == `/${path}`) return;
      // this.$router.push(`/${path}`);
      this.$router.push(location.pathname == `/${path}` ? "" : `/${path}`)
    }
  }
};
</script>

<style scoped>
.navbar {
  width: 100%;
  height: 50px;
  display: flex;
  position: relative;
  justify-content: flex-end;
  border-bottom: 0.5px solid rgb(180, 178, 178);
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
  right: 5px;
  width: 90px;
  border: 0.5px solid rgba(180, 178, 178, 0.5);
  list-style-type: none;
  padding: 0;
  border-radius: 10px;
}
.avatar-menu li {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}
.home {
  border-bottom: 0.5px solid rgba(180, 178, 178, 0.5);
}
</style>
