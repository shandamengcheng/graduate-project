<template>
  <div class="sidebar-item" @click="showSearchView">
    <slot>默认列表项</slot>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  methods: {
    showSearchView: function() {
      this.$router.push('/home/search');
    }
  }
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
  /* display: flex; */
}
.sidebar-item img {
  display: inline-block;
  height: 50%;
  vertical-align: middle;
  width: 20%;
  margin-left: 0px;
}
.sidebar-item div {
  display: inline-block;
}
</style>