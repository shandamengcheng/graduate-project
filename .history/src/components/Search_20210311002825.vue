<template>
  <div class="Search">
    <input type="search" />
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
.Search {
  width: 80%;
  margin: auto;
  height: 30px;
}
.Search input {
  display: block;
  width: 80%;
  height: 100%;
  margin: auto;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
}
</style>
