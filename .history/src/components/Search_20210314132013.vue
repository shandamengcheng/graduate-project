<template>
  <div class="search">
    <input type="search" />
    <img src="@/assets/search.png" >
    <span>季孙继</span>
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
  /* font-size: 0; */
}
.search input {
  display: inline-block;
  width: 80%;
  height: 30px;
  line-height: 30px;
  /* margin: auto; */
  border-radius: 10px;
  outline: none;
  font-size: 20px;
  padding: 0 5px;
  box-sizing: border-box;
  /* vertical-align: baseline; */
} 
.search img {
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.search span {
  display: inline-block;
  width: 80px;
  height: 30px;
  vertical-align: top;
  line-height: 30px;
}
</style>
