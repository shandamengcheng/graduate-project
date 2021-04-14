<template>
  <div class="plan">
    <ul class="container">
      <li>任课老师</li>
      <li>课程地点</li>
      <li>上课时间</li>
    </ul>
    <ul class="container">
      <li>李三</li>
      <li>D218</li>
      <li>周三67</li>
    </ul>
    <ul class="container">
      <li>李三</li>
      <li>D218</li>
      <li>周三67</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Plan",
};
</script>

<style scoped>
.container {
  list-style: none;
  padding: 0;
  width: 60%;
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
