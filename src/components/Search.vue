<template>
  <div class="search">
    <div class="search-input">
      <select
        name="choice"
        id="choice"
        v-model="searchChoice"
        class="search-choice"
      >
        <option value="讲师" selected>讲师</option>
        <option value="课程名">课程名</option>
        <option value="教室">教室</option>
        <option value="开课单位">开课单位</option>
      </select>
      <div class="input-container">
        <input type="search" v-model="searchKeywords" />
      </div>
      <img src="@/assets/search.png" />
      <div class="search-items">
          <SearchItems :dataList="classList" />
        </div>
    </div>
  </div>
</template>

<script>
import SearchItems from "@/components/SearchItems";

export default {
  name: "Search",
  components: {
    SearchItems,
  },
  data() {
    return {
      searchChoice: "讲师",
      searchKeywords: "",
      classList: [
        {
          teacher: "Jona",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona1",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona2",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona3",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona4",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona5",
          classname: "测试一下测试一下测试一下测试一下测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona6",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona7",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona8",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona9",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona0",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona11",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona12",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona13",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
        {
          teacher: "Jona14",
          classname: "测试一下",
          classroom: "D123",
          company: "计算机系",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.search {
  width: 80%;
  margin: auto;
  height: 100%;
  margin-top: 10px;
  text-align: left;
}
.search-input {
  width: 90%;
  height: 40px;
  margin: auto;
  position: relative;
  /* margin-bottom: 20px; */
  display: flex;
  justify-content: center;
}
.search-input .input-container {
  width: 80%;
  max-width: 500px;
  height: 40px;
  position: relative;
}
.input-container input {
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  font-size: 20px;
  box-sizing: border-box;
  line-height: 40px;
  border-radius: 5px;
  outline: none;
}
.search-input img {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
}
.search-items {
  width:80%;
  max-height: 500px;
  position: absolute;
  top: 50px;
  padding: 0 5px;
  margin: auto;
  box-sizing: border-box;
  overflow: auto;
}
.search-choice {
  width: 80px;
  border: 1px solid black;
  margin-right: 5px;
  border-radius: 5px;
  font-size: 15px;
  outline: none;
}
</style>
