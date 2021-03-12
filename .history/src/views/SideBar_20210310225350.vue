<template>
  <div class="sidebar">
    <SideBarItem>
      <div>全校课表查询</div>
    </SideBarItem>
    <SideBarItem>
      <div>录入听课表</div>
    </SideBarItem>
    <SideBarItem>
      <div>提交年度报告</div>
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