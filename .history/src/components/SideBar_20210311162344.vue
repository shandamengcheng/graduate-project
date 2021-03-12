<template>
  <div class="sidebar">
    <SideBarItem>
      <div @click.prevent="showSearchView">全校课表查询</div>
    </SideBarItem>
    <SideBarItem>
      <div>听课表格录入</div>
    </SideBarItem>
    <SideBarItem>
      <div>年度报告提交</div>
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
  methods: {
    showSearchView: function() {
      this.$router.push('search');
    }
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
  padding-top: 20px;
}
</style>