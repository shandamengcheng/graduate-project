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
      <!-- <img src="@/assets/search.png" /> -->
      <button class="search-button" @click="searchItems">搜索</button>
      <div class="search-items">
        <SearchItems
          :dataList="classArr"
          class="not-show"
          :class="{ show: isShowItems && isInputNotEmpty }"
        />
        <h1
          class="no-search-items not-show"
          :class="{ show: isShowTips && isInputNotEmpty }"
        >
          未搜索到相应的数据
        </h1>
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
      classArr: [],
      isShowTips: false,
      isShowItems: false,
      isInputNotEmpty: false,
    };
  },
  watch: {
    searchKeywords: function(val) {
      console.log({ val })
      if (val.trim().length > 0) {
        this.isInputNotEmpty = true;
      } else {
        this.isInputNotEmpty = false;
        this.classArr = [];
        this.isShowTips = false;
        this.isShowItems = false;
      }
    },
  },
  methods: {
    searchItems: function() {
      const values = {
        讲师: "Class_teacher",
        开课单位: "Class_starting_unit",
        课程名: "Class_name",
        教室: "Class_room",
      };
      if (this.searchChoice.trim() == "") {
        return;
      }
      let searchId = values[this.searchChoice].split("_").reverse()[0];
      // console.log(this.searchChoice, this.searchKeywords);
      this.$axios({
        method: "post",
        url: `http://localhost:8000/search:${searchId}`,
        data: {
          key: values[this.searchChoice],
          keyWord: this.searchKeywords,
        },
      }).then((res) => {
        if (res.data.length == 0) {
          this.isShowItems = false;
          this.isShowTips = true;
        } else {
          this.isShowItems = true;
          this.isShowTips = false;
          this.classArr = res.data;
        }
      });
    },
  },
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
.search-input .search-button {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin-left: 10px;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  background: url("../assets/search.png") no-repeat 40px 40px;
}
.search-items {
  width: 100%;
  max-height: 500px;
  position: absolute;
  top: 50px;
  padding: 0 5px;
  margin: auto;
  box-sizing: border-box;
  overflow: auto;
}
.search-items .not-show {
  display: none;
}
.search-items .show {
  display: block;
}
.no-search-items {
  text-align: center;
  color: gray;
  opacity: 0.8;
  display: none;
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
