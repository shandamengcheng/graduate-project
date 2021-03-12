<template>
  <div class="sidebar-item">
    <slot>默认列表项</slot>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",

}
</script>

<style scoped>
.sidebar-item {
  height: 60px;
  padding: 0 10px;
  line-height: 60px;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>