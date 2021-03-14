<template>
  <div class="search">
    <input type="search" />
    <img src="@/assets/search.png" >
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
.search {
  width: 80%;
  margin: auto;
  height: 30px;
  margin-top: 10px;
  text-align: left;
}
.search input {
  display: inline-block;
  width: 80%;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
  padding: 0 5px;
  box-sizing: border-box;
  vertical-align: top;
} 
.search img {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-left: 10px;
  cursor: pointer;
}
img:active {
  /* box-shadow: 0px 1px 5px rgb(180, 178, 178); */
}
</style>
