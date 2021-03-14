<template>
  <div class="sidebar">
    <SideBarItem>
      <img src="@/assets/class.png">
      <div>全校课表查询</div>
    </SideBarItem>
    <SideBarItem>
      <img src="@/assets/sheet.png">
      <div>听课表格录入</div>
    </SideBarItem>
    <SideBarItem>
      <img src="@/assets/report.png">
      <div>年度报告提交</div>
    </SideBarItem>
     <SideBarItem>
      <img src="@/assets/class.png">
      <div>我的听课计划</div>
    </SideBarItem>
  </div>
</template>

<script>
import SideBarItem from "@/components/SideBarItem";

export default {
  name: "SideBar",
  components: {
    SideBarItem,
  },

}
</script>

<style scoped>
.sidebar {
  width: 220px;
  min-width: 220px;
  height: 100vh;
  background: #304156;
  color: white;
  font-size: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
</style>