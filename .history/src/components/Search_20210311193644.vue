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

}
.search input {
  display: inline-block;
  width: 80%;
  height: 90%;
  margin: auto;
  border-radius: 10px;
  outline: none;
  font-size: 20px;
  padding: 0 5px;
  box-sizing: border-box;
} 
.search img {
  display: inline-block;
  width: 30px;
  height: 30px;
}
</style>
