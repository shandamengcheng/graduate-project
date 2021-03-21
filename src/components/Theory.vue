<template>
  <div class="evaluation">
    <ul v-for="(item, index) in commonData" :key="index">
      哈哈哈哈
    </ul>
  </div>
</template>

<script>
export default {
  name: "Theory",
  props: {
    classType: String,
    evaluationObj: {
      type: Object,
      default() {
        return {
          atti1: '',
          atti2: '',
          abil1: '',
          abil2: '',
          abil3: '',
          abil4: '',
          abil5: '',
          method: '',
          perf1: '',
          perf2: ''
        }
      }
    }
  },
  data() {
    return {
      commonData: [
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
              bindVar: "method"
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
              bindVar: "perf1"
            },
            {
              content: "课堂表现积极、活跃",
              behavior: `大多数学生课堂表现活跃，学生之间、师生之间互动积极。`,
              bindVar: "perf2"
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped></style>
