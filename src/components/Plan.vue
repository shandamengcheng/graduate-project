<template>
  <div class="plan">
    <ul class="container">
      <li>任课老师</li>
      <li>课程名称</li>
      <li>课程地点</li>
      <li>上课时间</li>
      <li>开课单位</li>
    </ul>
    <ul class="container" v-for="(item, index) in planList" :key="index">
      <li>{{item.Class_teacher}}</li>
      <li>{{item.Class_name}}</li>
      <li>{{item.Class_room}}</li>
      <li>{{item.Class_time}}</li>
      <li>{{item.Class_starting_unit}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Plan",
  data() {
    return {
      planList: [],
    };
  },
  created() {
    const Teacher_ID = this.$store.getters.getTeacherInfo.Teacher_ID;
    this.$axios({
      method: "post",
      url: "http://localhost:8000/plan",
      data: {
        Teacher_ID,
      },
    }).then((res) => {
      this.planList = res.data;
    });
  },
};
</script>

<style scoped>
.container {
  list-style: none;
  padding: 0;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
}
.container li {
  min-width: 100px;
}
</style>
