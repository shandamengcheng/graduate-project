<template>
  <div class="base-info">
    <ul>
      <li v-for="(item, index) in infoData.infoList" :key="index">
        <template v-if="Array.isArray(item)">
          <div v-for="(info, key) in item" :key="key" class="info-row">
            <span>{{ info.name }}: </span>
            <input :type="info.type" v-model="infoData[info.proName]" />
          </div>
        </template>
        <template v-else>
          <div class="info-row checkbox">
            <span>{{ item.name }}</span>
            <template v-for="(val, key) in item.arr">
              <div :key="key">
                <input
                  :type="item.type"
                  :id="val"
                  :value="val"
                  v-model="infoData[item.proName]"
                />
                <label :for="val">{{ item.value[val] }}</label>
              </div>
            </template>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecordInfo",
  props: {
    infoData: {
      type: Object,
      default() {
        return {
          company: "",
          teacher: "",
          classroom: "",
          classtime: "",
          classname: "",
          classid: "",
          projectName: "",
          classtype: "",
          listType: [],
          infoList: [],
          "stu-all-number": 0,
          "stu-real-number": 0,
        };
      },
    },
  },
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style scoped>
.base-info {
  width: 100%;
  margin-top: 2%;
}
ul {
  list-style: none;
  padding: 0;
  width: 100%;
  height: 100%;
}
ul li {
  width: 100%;
  /* height: 20%; */
  height: 40px;
  padding-top: 5px;
  display: flex;
  justify-content: flex-start;
}
li .info-row {
  width: 50%;
  display: flex;
  justify-content: center;
}
.info-row span {
  width: 50%;
}
.base-info .checkbox {
  width: 80%;
  margin: auto;
}
.checkbox span {
  width: 20%;
}
.checkbox div {
  width: 25%;
}
input {
  border-radius: 5px;
}
</style>
