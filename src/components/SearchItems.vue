<template>
  <div class="items">
    <div v-for="(item, index) in dataList" class="item" :key="index">
      <div>{{ item.Class_teacher }}</div>
      <div class="long-text">{{ item.Class_name }}</div>
      <div class="long-text">{{ item.Class_time }}</div>
      <div>{{ item.Class_room }}</div>
      <div>{{ item.Class_starting_unit }}</div>
      <div><button @click="addToMyPlan">添加</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchItems",
  props: {
    dataList: Array,
  },
  methods: {
    addToMyPlan: () => {

    }
  }
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
  width: 12%;
  /* min-width: 50px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  line-height: 48px;
  height: 48px;
  box-sizing: border-box;
}
.item .long-text {
  width: 26%;
}
.item:nth-child(odd) {
  background: #35d0ba;
  border-radius: 5px;
}
.item:nth-child(even) {
  background: white;
  /* border-left: 2px solid #f38181; */
}
button {
  width: 40px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  background: inherit;
}
</style>
