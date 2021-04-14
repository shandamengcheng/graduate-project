<template>
  <div class="items">
    <div v-for="(item, index) in dataList" class="item" :key="index">
      <div>{{ item.teacher }}</div>
      <div>{{ item.classname }}</div>
      <div>{{ item.classtime }}</div>
      <div>{{ item.classroom }}</div>
      <div>{{ item.company }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItems",
  props: {
    dataList: Array,
  },
};
</script>

<style scoped>
.items {
  width: 100%;
  height: 100%;
  overflow: auto;
  /* border: 1px solid rgb(180, 178, 178); */
}
.item {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
}
.item div {
  width: 20%;
  /* border-right: 0.5px solid rgb(180, 178, 178); */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  line-height: 48px;
  height: 48px;
  box-sizing: border-box;
}
.item:nth-child(odd) {
  background: #35d0ba;
  border-radius: 5px;
}
.item:nth-child(even) {
  background: white;
  /* border-left: 2px solid #f38181; */
}
</style>
