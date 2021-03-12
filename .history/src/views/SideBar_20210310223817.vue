<template>
  <div class="sidebar">
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
  width: 30%;
  min-width: 200px;
  background: black;
  color: white;
  font-size: 15px;
  text-align: center;
  height: 100%;
}
</style>