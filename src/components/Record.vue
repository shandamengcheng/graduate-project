<template>
  <div class="record">
    <select
      name="用途类型"
      id="usage-type"
      :value="infoData.classtype"
      class="class-type"
      @change="updateClassType"
    >
      <option value="理论课" selected>理论课</option>
      <option value="学生汇报课">学生汇报课</option>
      <option value="实验课">实验课</option>
      <option value="体育课">体育课</option>
      <option value="公益课程理论课">公益课程理论课</option>
      <option value="公益课程实践课">公益课程实践课</option>
    </select>
    <div class="record-main">
      <h1>汕头大学听课记录表</h1>
      <RecordInfo :infoData="infoData" />
      <Header :classtype="infoData.classtype">
        <Environment
          slot="environment"
          v-if="infoData.classtype !== '实验课'"
          @updateText="updateEnvir"
        />

        <component
          :is="componentType[infoData.classtype]"
          slot="evaluation"
          :evaluationObj="evaluationData[componentType[infoData.classtype].toLowerCase()]"
          :classType="infoData.classtype"
        ></component>

        <OverallEvaluation
          slot="overallEvaluation"
          :overallData="overallData"
        />

        <FollowUpRecord
          slot="followUpRecord"
          v-if="
            overallData.needImprove === '需要跟进' &&
              overallData.otherAdvice.trim() !== ''
          "
          :followUpData="followUpData"
        />
      </Header>
    </div>
    <!-- <button @click="uploadRecordToServer">show</button> -->
  </div>
</template>

<script>
import RecordInfo from "@/components/RecordInfo";
import Header from "@/components/Header";
import Theory from "@/components/Theory";
import Environment from "@/components/Environment";
import OverallEvaluation from "@/components/OverallEvaluation";
import FollowUpRecord from "@/components/FollowUpRecord";
import Experiment from '@/components/Experiment';
import Physical from '@/components/Physical';
import WelfareTheory from '@/components/WelfareTheory';
import WelfarePractice from '@/components/WelfarePractice';

export default {
  name: "Record",
  data() {
    return {
      envir: "",
      componentType: {
        '理论课': "Theory",
        '学生汇报课': "Theory",
        '实验课': "Experiment",
        '体育课': "Physical",
        '公益课程理论课': "WelfareTheory",
        '公益课程实践课': "WelfarePractice",
      },
      infoData: {
        company: "",
        teacher: "",
        classroom: "",
        classtime: "",
        classname: "",
        classid: "",
        projectName: "",
        classtype: "理论课",
        listType: [],
        "stu-all-number": "",
        "stu-real-number": "",
        infoList: [
          [
            {
              name: "开课单位",
              type: "text",
              proName: "company",
            },
            {
              name: "课程名称",
              type: "text",
              proName: "classname",
            },
          ],
          [
            {
              name: "开课班号",
              type: "text",
              proName: "classid",
            },
            {
              name: "授课教师",
              type: "text",
              proName: "teacher",
            },
          ],
          [
            {
              name: "听课时间",
              type: "datetime-local",
              proName: "classtime",
            },
            {
              name: "地点",
              type: "text",
              proName: "classroom",
            },
          ],
          [
            {
              name: "学生应到人数",
              type: "number",
              proName: "stu-all-number",
            },
            {
              name: "学生实到人数",
              type: "number",
              proName: "stu-real-number",
            },
          ],
          {
            name: "听课类型",
            type: "checkbox",
            proName: "listType",
            arr: ["teacher", "leader", "supervise"],
            value: {
              teacher: "教师听课",
              leader: "领导听课",
              supervise: "督导听课",
            },
          },
        ],
      },
      evaluationData: {
        theory: {
          atti1: "",
          atti2: "",
          abil1: "",
          abil2: "",
          abil3: "",
          abil4: "",
          abil5: "",
          method: "",
          perf1: "",
          perf2: "",
        },
      },
      overallData: {
        performance: "",
        advice: "",
        familiar: "",
        isPromote: "",
        promoteText: "",
        needImprove: "",
        otherAdvice: "",
        listenerName: "",
        listenTime: "",
      },
      followUpData: {
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
      },
    };
  },
  components: {
    RecordInfo,
    Header,
    Theory,
    Environment,
    Physical,
    Experiment,
    WelfarePractice,
    WelfareTheory,
    OverallEvaluation,
    FollowUpRecord,
  },
  methods: {
    updateEnvir: function(value) {
      this.envir = value;
      console.log(this.envir);
    },
    uploadRecordToServer: function() {
      // console.log(this.infoData);
      // console.table(this.overallData);
      // console.log({ followUpData: this.followUpData });
    },
    updateClassType: function(e) {
      const type = e.target.value;
      const infoList = this.infoData.infoList;
      switch (type) {
        case "实验课": {
          const first = infoList.shift();
          infoList.unshift(first, [
            {
              name: "实验项目名称",
              type: "text",
              proName: "projectName",
            },
          ]);
        }
      }
      this.infoData.classtype = type;
    },
  },
};
</script>

<style scoped>
.record {
  display: flex;
  width: 100%;
  height: calc(100vh - 50px);
  overflow: auto;
  justify-content: space-evenly;
}
.class-type {
  /* width: 10%; */
  min-width: 120px;
  height: 30px;
  border: 1px solid blue;
}
.record-main {
  width: 80%;
  height: 100%;
  overflow: auto;
  border: 1px solid blue;
}
</style>
