<template>
  <div class="follow-up-recrd">
    <div class="radioPart">
      <div>
        <input
          type="radio"
          id="teacher"
          name="teacher"
          value="与被听课教师/教学单位负责人/教学管理服务中心交流、反馈了意见"
          v-model="followUpData.choice"
        />
        <label for="teacher"
          >与被听课教师/教学单位负责人/教学管理服务中心交流、反馈了意见</label
        >
      </div>
      <div>
        <input
          type="radio"
          id="college"
          name="college"
          value="教研室/系/院/组织了交流讨论"
          v-model="followUpData.choice"
        />
        <label for="college">教研室/系/院/组织了交流讨论</label>
        <input
          type="radio"
          id="edit"
          name="edit"
          value="建议修订课程目标"
          v-model="followUpData.choice"
        />
        <label for="edit">建议修订课程目标</label>
      </div>
    </div>
    <div class="info-line" v-for="(item, index) in listInfo" :key="index">
      <span>{{ item.name }}</span>
      <div class="content">
        <textarea
          name="advice"
          v-model="followUpData[item.textareaName]"
        ></textarea>
        <div>
          <span>签名: </span>
          <input type="text" v-model="followUpData[item.signName]" />
          <input type="date" v-model="followUpData[item.signTime]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowUpRecord",
  props: {
    followUpData: {
      type: Object,
      default() {
        return {
          choice: "", // 选择后续的操作
          listenerAdv: "", // 听课老师建议
          listenerName: "", // 听课教师签名
          listenSignTime: "", // 听课教师签名时间
          collegeAdv: "", // 学院建议
          collegeName: "", // 学院签名
          collegeTime: "", // 学院签名时间
          teacherPlan: "", // 主讲教师的反思及整改方案
          teacherName: "", // 主讲教师签名
          teacherTime: "", // 主讲教师签名时间
          managerAdv: "", //  教学管理部门意见
          managerName: "", // 教学部门签名
          managerTime: "", // 教学部门签名时间
        };
      },
    },
  },
  data() {
    return {
      listInfo: [
        {
          name: "（跟进听课）听课教师意见及建议",
          textareaName: "listenerAdv",
          signName: "listenerName",
          signTime: "listenSignTime",
        },
        {
          name: "学院（部、中心）跟进意见",
          textareaName: "collegeAdv",
          signName: "collegeName",
          signTime: "collegeTime",
        },
        {
          name: "主讲教师反思及整改方案",
          textareaName: "teacherPlan",
          signName: "teacherName",
          signTime: "teacherTime",
        },
        {
          name: "教学管理、服务部门意见",
          textareaName: "managerAdv",
          signName: "managerName",
          signTime: "managerTime",
        },
      ],
    };
  },
};
</script>

<style scoped>
.follow-up-recrd {
  width: 100%;
}
.radioPart {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
.radioPart div label,
.radioPart div input {
  margin-left: 10px;
}
.info-line {
  width: 90%;
  margin: auto;
  border: 1px solid rgba(180, 178, 178, 0.5);
  border-radius: 5px;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
}
.info-line span {
  align-self: center;
  width: 20%;
  height: 100%;
}
.content {
  width: 70%;
}
.content textarea {
  min-height: 200px;
  width: 100%;
}
.content input {
  margin-left: 5px;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  border-radius: 0px;
}
</style>
