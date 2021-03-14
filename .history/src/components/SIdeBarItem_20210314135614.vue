<template>
  <div class="sidebar-item" @click="passDataToSidebar($event)">
    <slot>默认列表项</slot>
  </div>
</template>

<script>
export default {
  name: "SideBarItem",
  methods: {
    passDataToSidebar: function(event) {
      const data = event.currentTarget.getAttribute('id');
      this.$emit('passData', data);
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
  display: flex;
  justify-content: center;
}
.sidebar-item img {
  /* display: inline-block; */
  align-self: center;
  height: 50%;
  vertical-align: middle;
  width: 15%;
  /* margin-right: 5px; */
}
.sidebar-item div {
  width: 60%;
  /* display: inline-block; */
}
</style>