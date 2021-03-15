<template>
  <div class="print">
    <h1 class="title">年度听课报告总结</h1>
    <div class="first-line">
      <span>年度</span>
      <input type="text" />
      <span>学期</span>
      <input type="text" />
      <span>教师</span>
      <input type="text" />
    </div>
    <div class="second-line">
      <span>学院</span>
      <input type="text" />
      <span>专业</span>
      <input type="text" />
      <span>日期</span>
      <input type="date" placeholder="xxxx/xx/xx" />
    </div>
    <div class="thrid-line">
      <span>本期主要经验</span>
      <div contenteditable></div>
    </div>
    <div class="forth-line">
      <span>本期不足之处</span>
      <div contenteditable></div>
    </div>
    <div class="fifth-line">
      <span>下期改进之处</span>
      <div contenteditable></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Print",
  data() {
    return {
      year: '',
    }
  }
};
</script>

<style scoped>
.print {
  width: 100%;
  height: 100%;
}
.first-line,
.second-line,
.thrid-line,
.forth-line,
.fifth-line {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 20px;
  margin-top: 20px;
}
.first-line > *,
.second-line > * {
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
}
.thrid-line > *,
.forth-line > *,
.fifth-line > * {
  min-height: 200px;
  line-height: 30px;
  border-radius: 5px;
}
.first-line span,
.second-line span,
.thrid-line span,
.forth-line span,
.fifth-line span {
  width: 11%;
  display: inline-block;
}
.first-line input,
.second-line input {
  width: 22%;
}
.thrid-line div,
.forth-line div,
.fifth-line div {
  padding: 0px 5px;
  width: 88%;
  height: 100%;
  border: 1px solid black;
  text-align: left;
}
</style>
