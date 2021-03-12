<template>
  <div class="sidebar">
    <SideBarItem />
    <SideBarItem />
    <SideBarItem />
    <SideBarItem />
    <SideBarItem />
  </div>
</template>

<script>
import SideBarItem from "@/components/SideBarItem";

export default {
  name: "SideBar",
  components: {
    SideBarItem,
  }
}
</script>

<style scoped>
.sidebar {
  width: 220px;
  height: 100vh;
  background: #304156;
  color: white;
  font-size: 15px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>