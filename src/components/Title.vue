<template>
  <div class="title">
    <slot name="first-title"></slot>
    <slot name="second-title" class="second-title"></slot>
  </div>
</template>

<script>
export default {
  name: 'Title',
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: left;
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(180, 178, 178, 0.5);
}
.title p {
  height: auto;
  font-size: 15px;
  text-indent: 20px;
  margin-top: 10px;
}
</style>