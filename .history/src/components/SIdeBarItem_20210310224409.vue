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
  height: 50px;
  line-height:50px;
  border: none;
  outline: none;
}
</style>