<template>
  <div class="sidebar">
    <SideBarItem>
      <div>第一项</div>
    </SideBarItem>
    <SideBarItem>
      <div>第二项</div>
    </SideBarItem>
    <SideBarItem>
      <div>第三项</div>
    </SideBarItem>
    <SideBarItem>
      <div>第四项</div>
    </SideBarItem>
    <SideBarItem>
      <div>第五项</div>
    </SideBarItem>
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
  display: flex;
  flex-direction: column;
}
</style>