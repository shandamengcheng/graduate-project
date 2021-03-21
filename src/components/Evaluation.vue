<template>
  <div class="evaluation">
    <div class="part">
      <span>项目</span>
      <div class="context">
        <div>
          <div class="content">内容</div>
          <div class="behavior header">推荐如下有效的教学行为</div>
          <div class="bindvar">
            <div>评价等级</div>
            <div>优, 良, 中, 合格, 不合格, 不适用（含+、-）</div>
          </div>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(item, index) in displayData" :key="index" class="part">
        <span>{{ item.proName }}</span>
        <div class="context">
          <div v-for="(val, key) in item.value" :key="key">
            <div class="content" v-if="val.content !== ''">
              {{ val.content }}
            </div>
            <template v-if="!Array.isArray(val.behavior)">
              <div class="behavior">{{ val.behavior }}</div>
              <input
                type="text"
                class="bindvar"
                v-model="evaluationObj[val.bindVar]"
              />
            </template>
            <template v-else>
              <div class="container">
                <div
                  v-for="(item, index) in val.behavior"
                  :key="index"
                  class="row"
                >
                  <div class="inner-behavior">{{ item }}</div>
                  <input
                    type="text"
                    class="inner-bindvar"
                    v-model="evaluationObj[val.bindVar[index]]"
                  />
                </div>
              </div>
            </template>
          </div>
        </div>
      </li>
    </ul>
    <div class="total">
      <span>总体评价等级</span>
      <input type="text" class="bindvar" v-model="evaluationObj.total">
    </div>
  </div>
</template>

<script>
export default {
  name: "Theory",
  props: {
    classType: String,
    evaluationObj: Object,
    displayData: Array,
  },
};
</script>

<style scoped>
.evaluation {
  width: 100%;
  margin: auto;
}
ul {
  list-style: none;
  padding: 0;
}
.part {
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
}
.part > span {
  vertical-align: middle;
  width: 80px;
  border-right: 0.5px solid rgba(180, 178, 178, 0.5);
  border-bottom: 0.5px solid rgba(180, 178, 178, 0.5);
}
.context {
  width: calc(100% - 80px);
}
.context > div {
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5px solid rgba(180, 178, 178, 0.5);
}
.content {
  width: 150px;
  border-right: 0.5px solid rgba(180, 178, 178, 0.5);
}
.context .header {
  text-align: center;
}
.behavior {
  width: calc(100% - 210px);
  text-align: left;
  padding-left: 3px;
}
.bindvar, .inner-bindvar {
  width: 60px;
  min-height: 60px;
  min-width: 20px;
  align-self: stretch;
  border: 0.5px dotted;
  outline: 0.5px;
  text-align: center;
}
.bindvar > div {
  border-bottom: 0.5px solid rgba(180, 178, 178, 0.5);
}
.container {
  width: calc(100% - 150px);
}
.row {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 0.5px solid rgba(180, 178, 178, 0.5);
}
.inner-behavior {
  width: calc(100% - 60px);
  text-align: left;
  padding-left: 3px;
}
.total {
  width: 100%;
  display: flex;
  border-bottom: 0.5px solid rgba(180, 178, 178, 0.5);
}
.total span {
  width: calc(100% - 60px);
}
</style>
