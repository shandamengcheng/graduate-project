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

        <Evaluation
          slot="evaluation"
          :evaluationObj="
            evaluationData[componentType[infoData.classtype].toLowerCase()]
          "
          :classType="infoData.classtype"
          :displayData="
            displayData[componentType[infoData.classtype].toLowerCase()]
          "
        />

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
      <button @click="uploadRecordToServer" class="uploadSheetData">上传数据</button>
    </div>
  </div>
</template>

<script>
import RecordInfo from "@/components/RecordInfo";
import Header from "@/components/Header";
import Evaluation from "@/components/Evaluation";
import Environment from "@/components/Environment";
import OverallEvaluation from "@/components/OverallEvaluation";
import FollowUpRecord from "@/components/FollowUpRecord";

export default {
  name: "Record",
  data() {
    return {
      envir: "",
      componentType: {
        理论课: "Evaluation",
        学生汇报课: "Report",
        实验课: "Experiment",
        体育课: "Physical",
        公益课程理论课: "WelfareTheory",
        公益课程实践课: "WelfarePractice",
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
        evaluation: {
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
          total: "",
        },
        report: {
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
          perf3: "",
          total: "",
        },
        experiment: {
          envir1: "",
          envir2: "",
          guide1: "",
          guide2: "",
          guide3: "",
          guide4: "",
          manage1: "",
          manage2: "",
          perf: "",
          total: "",
        },
        physical: {
          atti1: "",
          atti2: "",
          abil1: "",
          abil2: "",
          abil3: "",
          abil4: "",
          method1: "",
          method2: "",
          perf1: "",
          perf2: "",
          total: "",
        },
        welfaretheory: {
          atti1: "",
          atti2: "",
          atti3: "",
          abil1: "",
          abil2: "",
          abil3: "",
          abil4: "",
          method: "",
          perf1: "",
          perf2: "",
          total: "",
        },
        welfarepractice: {
          abil1: "",
          abil2: "",
          abil3: "",
          abil4: "",
          abil5: "",
          abil6: "",
          abil7: "",
          abil8: "",
          perf1: "",
          perf2: "",
          total: "",
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
      displayData: {
        experiment: [
          {
            proName: "实验环境与实验准备",
            value: [
              {
                content: "",
                behavior: `实验规章制度有悬挂上墙；实验场地整洁，实验室教学环境符合卫生和安全的要求。`,
                bindVar: "envir1",
              },
              {
                content: "",
                behavior: `实验仪器、工具、材料齐备， 且处于良好的使用状态。`,
                bindVar: "envir2",
              },
            ],
          },
          {
            proName: "教师指导过程",
            value: [
              {
                content: "",
                behavior: `对实验目的、实验内容、要求及注意事项的交代清楚明确。`,
                bindVar: "guide1",
              },
              {
                content: "",
                behavior: `教师能熟练操作和使用实验仪器（或软件工具），
                能及时发现实验中出现的问题，并恰当地引导学生自行合理解决。`,
                bindVar: "guide2",
              },
              {
                content: "",
                behavior: `实验内容充实，与实验大纲一致；讲授时间与实验操作时间分配比例恰当。`,
                bindVar: "guide3",
              },
              {
                content: "",
                behavior: `实验教师让学生独立完成实验、重视操作能力训练。`,
                bindVar: "guide4",
              },
            ],
          },
          {
            proName: "课堂组织管理",
            value: [
              {
                content: "",
                behavior: `课堂组织管理	每组实验人数安排合理（指在每套仪器设备上同时完成本实验项目的人数），
                学生能得到充分的动手操作机会。`,
                bindVar: "manage1",
              },
              {
                content: "",
                behavior: `按时上课，实验课堂秩序良好，有效管理课堂；实验过程中指导教师始终在场，
                指导教师人数安排能满足指导学生实验的需求。`,
                bindVar: "manage2",
              },
            ],
          },
          {
            proName: "学生表现",
            value: [
              {
                content: "",
                behavior: `学生缺席、迟到现象少（低于5%）；学生能跟随老师的讲课节奏；
                不存在与课堂无关的手机、电脑使用情况或低头做其他事情等现象。`,
                bindVar: "perf",
              },
            ],
          },
        ],
        evaluation: [
          {
            proName: "教学态度",
            value: [
              {
                content: "教学认真，备课细致",
                behavior: `向学生指出具体并对学习有指导性的目标；有教学内容提纲;
         对所下结论提供证据信息；结束时有总结。`,
                bindVar: "atti1",
              },
              {
                content: "讲课精神饱满，举止得体，仪容整洁",
                behavior: `多数时间是面向学生的（不是面对电脑或屏幕），能与大多数学生沟通。`,
                bindVar: "atti2",
              },
            ],
          },
          {
            proName: "教学能力",
            value: [
              {
                content: "声音宏亮，外语或普通话发音准确，表达流畅",
                behavior: `对关键的用词有解释；注重用语的准确、科学性。`,
                bindVar: "abil1",
              },
              {
                content: "时间安排合理，节奏控制好",
                behavior: `能从容完成授课计划；提问并给予学生时间思考；内容过渡合理。`,
                bindVar: "abil2",
              },
              {
                content: "条理性强，内容熟练，运用启发式教学",
                behavior: `讲授有条理；对学生表现给予及时反馈；不需要逐字读PPT；
              鼓励学生自由提问讨论并可随时应对学生的问题。`,
                bindVar: "abil3",
              },
              {
                content: "内容符合大纲要求，重点突出",
                behavior: `一节课的知识点数量适当；收尾时强调重点；示范对重点知识的应用；
              提出进一步学习的参考文献；给学生创造应用知识的机会。`,
                bindVar: "abil4",
              },
              {
                content: "理论联系实际；反映学科进展",
                behavior: `采用具体事例帮助学生理解；结合学科较新热点或引用较新文献。`,
                bindVar: "abil5",
              },
            ],
          },
          {
            proName: "教学手段",
            value: [
              {
                content: "内容简明扼要；合理使用多媒体教学手段",
                behavior: `PPT应清晰；图示应与课程内容相匹配；合理运用图片、视频等资料；
              多媒体技术运用应服务于课堂教学，避免干扰正常教学秩序情况。`,
                bindVar: "method",
              },
            ],
          },
          {
            proName: "学生表现",
            value: [
              {
                content: "迟到现象少，听课率高",
                behavior: `学生缺席、迟到现象少（低于5%）；学生能跟随老师的讲课节奏；
              不存在与课堂无关的手机、电脑使用情况或低头做其他事情等现象。`,
                bindVar: "perf1",
              },
              {
                content: "课堂表现积极、活跃",
                behavior: `大多数学生课堂表现活跃，学生之间、师生之间互动积极。`,
                bindVar: "perf2",
              },
            ],
          },
        ],
        report: [
          {
            proName: "教学态度",
            value: [
              {
                content: "反馈及时，备课充分",
                behavior: `针对学生的汇报，能及时作出意见反馈，向学生指出具体并对学习有指导性的修改目标；
                对所下结论提供证据信息；汇报结束能够对汇报内容进行适当点评。`,
                bindVar: "atti1",
              },
              {
                content: "聆听汇报时精神饱满，态度认真 ，举止得体，仪容整洁",
                behavior: `多数时间是面向学生的，能与汇报人进行有效沟通。`,
                bindVar: "atti2",
              },
            ],
          },
          {
            proName: "教学能力",
            value: [
              {
                content: "声音宏亮，英语或普通话发音准确，表达流畅",
                behavior: `对关键的用词有解释；注重用语的准确、科学性。`,
                bindVar: "abil1",
              },
              {
                content: "时间安排合理，节奏控制好",
                behavior: `能提醒学生把控好汇报时间，从容完成课堂计划，提问并给予学生时间思考；内容过渡合理。`,
                bindVar: "abil2",
              },
              {
                content: "条理性强，内容熟练，运用启发式教学",
                behavior: `讲授有条理；对学生表现给予及时反馈；鼓励学生自由提问讨论并可随时应对学生的问题。`,
                bindVar: "abil3",
              },
              {
                content: "课堂氛围把控得当，兼顾把控汇报人与聆听者学习节奏",
                behavior: `汇报人汇报时，能引导全体学生参与学习，把控课堂纪律。`,
                bindVar: "abil4",
              },
              {
                content: "理论联系实际；反映学科进展",
                behavior: `采用具体事例帮助学生理解；结合学科较新热点或引用较新文献。`,
                bindVar: "abil5",
              },
            ],
          },
          {
            proName: "教学手段",
            value: [
              {
                content: "合理引导学生使用多媒体教学手段",
                behavior: `针对学生PPT出现的问题（如：PPT不清晰；图示与课程内容不匹配；图片、视频等资料运用不合理等）能指出并提出修改建议；
                引导学生合理应用多媒体技术，避免干扰正常教学秩序。`,
                bindVar: "method",
              },
            ],
          },
          {
            proName: "学生表现",
            value: [
              {
                content: "迟到现象少，听课率高",
                behavior: `学生缺席、迟到现象少（低于5%）；学生能跟随汇报人、老师的讲课节奏；
                不存在与课堂无关的手机、电脑使用情况或低头做其他事情等现象。`,
                bindVar: "perf1",
              },
              {
                content: "课堂表现积极、活跃",
                behavior: `大多数学生课堂表现活跃，学生之间、师生之间互动积极。`,
                bindVar: "perf2",
              },
              {
                content: "汇报认真，准备充分",
                behavior: `汇报人准备充分，汇报时态度认真。`,
                bindVar: "perf3",
              },
            ],
          },
        ],
        physical: [
          {
            proName: "教学态度",
            value: [
              {
                content: "教学认真，备课细致",
                behavior: `教师按时到达授课运动场地；准时上、下课，不擅离课堂；
                课堂表现显示教师课前备课充分`,
                bindVar: "atti1",
              },
              {
                content: "讲课精神饱满，举止得体，仪容整洁",
                behavior: `穿运动服和运动鞋上课；明确本次课内容及学习目标；平等对待学生，耐心辅导；
                在课堂上不使用手机等通信工具。`,
                bindVar: "atti2",
              },
            ],
          },
          {
            proName: "教学能力",
            value: [
              {
                content: "教学内容符合大纲，安排合理",
                behavior: `项目特点突出；有身体素质练习内容；符合大纲要求。`,
                bindVar: "abil1",
              },
              {
                content: "讲解精确规范，教学方法适应学生学习需要",
                behavior: `讲解清晰、示范动作准确规范；身体素质练习手段科学；教学方法有实效；
                能因材施教, 注重学生个性发展及培养自我锻炼能力。`,
                bindVar: "abil2",
              },
              {
                content: "运动量适宜，教学能促进学生身体素质的发展",
                behavior: `科学安排心肺功能锻炼内容，运动量适宜，有助于促进学生体质水平的提高；
                能促进学生运动技术、技能水平和身体素质的全面发展。`,
                bindVar: "abil3",
              },
              {
                content: "师生间互动良好",
                behavior: `师生之间互动良好，能够激发学生的学习兴趣与主动性；
                注重终身体育意识及创新能力培养。`,
                bindVar: "abil4",
              },
            ],
          },
          {
            proName: "教学手段",
            value: [
              {
                content: "教学措施得当，有安全意识",
                behavior: [
                  "热身准备活动充分，达到项目要求；对突发事故处理及时、科学、合理，如未发生可不评价。",
                  "教学措施能有助于增进学生身心健康，有助于培养学生的积极进取、团结协作和集体主义精神；教学中始终贯彻安全意识教育。",
                ],
                bindVar: ["method1", "method2"],
              },
            ],
          },
          {
            proName: "学生表现",
            value: [
              {
                content: "迟到现象少，听课率高",
                behavior: `学生缺席、迟到现象少（低于5%）；学生能跟随老师的讲课节奏；
              不存在与课堂无关的手机、电脑使用情况或低头做其他事情等现象。`,
                bindVar: "perf1",
              },
              {
                content: "课堂表现积极、活跃",
                behavior: `大多数学生课堂表现活跃，学生之间、师生之间互动积极。`,
                bindVar: "perf2",
              },
            ],
          },
        ],
        welfaretheory: [
          {
            proName: "教学态度",
            value: [
              {
                content: "课堂掌控有序",
                behavior: `能对课堂进行管理；课堂纪律好。`,
                bindVar: "atti1",
              },
              {
                content: "教学认真，备课细致",
                behavior: `课程开始时向学生指出具体的学习目标；有教学内容提纲。`,
                bindVar: "atti2",
              },
              {
                content: "讲课精神饱满，举止得体，仪容整洁",
                behavior: `课程中能有效地引导学生；多数时间是面向学生的（不是面对电脑或屏幕）；
                能与大多数学生沟通。`,
                bindVar: "atti3",
              },
            ],
          },
          {
            proName: "教学能力",
            value: [
              {
                content: "对学生有引导，表达流畅",
                behavior: `对学生的计划或分享给予及时反馈，能及时指出学生的不足；
                对关键的用词有解释；注重用语的准确、科学性。`,
                bindVar: "abil1",
              },
              {
                content: "时间安排合理，节奏控制好",
                behavior: `课程内容安排适当；能让学生始终保持学习兴趣。`,
                bindVar: "abil2",
              },
              {
                content: "条理性强，内容熟练，运用启发式教学",
                behavior: `讲授或指导有条理，从简单到复杂；老师对自己的计划或总结到位、评价合理；
                鼓励学生自由提问讨论并可随时应对学生的问题；`,
                bindVar: "abil3",
              },
              {
                content: "理论联系实际；反映该服务内容的新进展",
                behavior: `理论讲授内容与该课程的实践环节紧密结合；采用具体事例帮助学生理解。`,
                bindVar: "abil4",
              },
            ],
          },
          {
            proName: "教学手段",
            value: [
              {
                content: "合理使用多媒体教学手段",
                behavior: `老师自己上课使用的PPT应清晰；图示应与课程内容相匹配；
                能引导学生合理运用相片、视频、报告、论文等多种形式进行课程设计或总结。`,
                bindVar: "method",
              },
            ],
          },
          {
            proName: "学生表现",
            value: [
              {
                content: "迟到现象少，听课率高",
                behavior: `学生缺席、迟到现象少（低于5%）；学生能跟随老师的讲课节奏；
              不存在与课堂无关的手机、电脑使用情况或低头做其他事情等现象。`,
                bindVar: "perf1",
              },
              {
                content: "课堂表现积极、活跃",
                behavior: `大多数学生课堂表现活跃，学生之间、师生之间互动积极。`,
                bindVar: "perf2",
              },
            ],
          },
        ],
        welfarepractice: [
          {
            proName: "教师表现",
            value: [
              {
                content: "沟通与交流",
                behavior: `老师在课程中平易近人、令人信任，与学生们进行交流互动，注重培养学生们的交流和沟通能力。`,
                bindVar: "abil1",
              },
              {
                content: "知识传授及价值观引导",
                behavior: `老师不仅传授公益知识，同时引导学生们如何做人（如如何具有奉献精神和积极、乐观向上的价值取向等）。`,
                bindVar: "abil2",
              },
              {
                content: "启发思考和能力培养",
                behavior: `老师能启发学生们从多方面思考问题，注重培养学生们综合采用多种思维方式分析问题与解决问题的能力。`,
                bindVar: "abil3",
              },
              {
                content: "活动准备及秩序维护",
                behavior: `老师在服务前与学生们们一起详细讨论活动方案，活动过程中能够维持活动安全有序。`,
                bindVar: "abil4",
              },
              {
                content: "服务实践与示范",
                behavior: `老师严格按照活动方案进行实践服务，亲身示范如何安全、有效地进行服务。`,
                bindVar: "abil5",
              },
              {
                content: "突发事件处理",
                behavior: `老师能有效而及时地处理突发事件与紧急情况。`,
                bindVar: "abil6",
              },
              {
                content: "指导和观察",
                behavior: `老师能指导学生们如何与服务对象进行交流沟通，观察服务对象的行为和情感变化，
                进行资料的收集和整理。`,
                bindVar: "abil7",
              },
              {
                content: "总结与反思",
                behavior: `老师对实践服务进行总结到位、评价合理，在反思、分享过程中注意对学生们进行情感、态度、
                价值观和环保意识等方面的教育。`,
                bindVar: "abil8",
              },
            ],
          },
          {
            proName: "学生表现",
            value: [
              {
                content: "出席与参与情况",
                behavior: `学生缺席、迟到现象少（低于5%）；学生们都能有条不紊开展公益服务活动，
                分工明确，各司其职。`,
                bindVar: "perf1",
              },
              {
                content: "表现积极、活跃",
                behavior: `大多数学生表现活跃，学生之间、师生之间互动积极。`,
                bindVar: "perf2",
              },
            ],
          },
        ],
      },
    };
  },
  components: {
    RecordInfo,
    Header,
    Evaluation,
    Environment,
    OverallEvaluation,
    FollowUpRecord,
  },
  methods: {
    updateEnvir: function(value) {
      this.envir = value;
      console.log(this.envir);
    },
    uploadRecordToServer: function() {
      console.log(this.evaluationData);
    },
    updateClassType: function(e) {
      const type = e.target.value;
      const infoList = this.infoData.infoList;
      switch (type) {
        case "实验课":
          {
            const first = infoList.shift();
            infoList.unshift([
              {
                name: "实验项目名称",
                type: "text",
                proName: "projectName",
              },
            ]);
            infoList.unshift(first);
          }
          break;
        case "理论课":
        case "学生汇报课":
        case "体育课":
        case "公益课程理论课":
        case "公益课程实践课": {
          let length = infoList.length;
          let pos;
          for (let i = 0; i < length; i++) {
            if (
              Array.isArray(infoList[i]) &&
              infoList[i].length === 1 &&
              infoList[i][0].name == "实验项目名称"
            ) {
              pos = i;
              break;
            }
          }
          if (pos) {
            infoList.splice(pos, 1);
          }
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
  min-width: 120px;
  height: 30px;
  outline: none;
  border: 0.5px solid rgba(180, 178, 178, 0.5);
}
.record-main {
  width: 80%;
  height: 100%;
  overflow: auto;
  border: 0.5px solid rgba(180, 178, 178, 0.5);
}
.uploadSheetData {
  width: 40%;
  min-width: 50px;
  outline: none;
  margin: 5px auto;
  height: 50px;
  font-size: 1em;
  cursor: pointer;
  color: white;
  background: #304156;
}
</style>
