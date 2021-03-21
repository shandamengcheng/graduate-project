<template>
  <div class="overall">
    <textarea
      placeholder="最欣赏的方法或表现"
      v-model="overallData.performance"
    ></textarea>
    <textarea
      placeholder="给任课老师的建议"
      v-model="overallData.advice"
    ></textarea>
    <div class="personal-eval">
      <span>本人对听课的课程的内容熟悉程度：</span>
      <div>
        <input
          type="radio"
          id="veryFamiliar"
          name="veryFamiliar"
          value="非常熟悉"
          v-model="overallData.familiar"
        />
        <label for="veryFamiliar">非常熟悉</label>
        <input
          type="radio"
          id="familiar"
          name="familiar"
          value="熟悉"
          v-model="overallData.familiar"
        />
        <label for="veryFamiliar">熟悉</label>
        <input
          type="radio"
          id="NotFamiliar"
          name="NotFamiliar"
          value="不太熟悉"
          v-model="overallData.familiar"
        />
        <label for="veryFamiliar">不太熟悉</label>
        <input
          type="radio"
          id="totallyNotFamiliar"
          name="totallyNotFamiliar"
          value="完全不熟悉"
          v-model="overallData.familiar"
        />
        <label for="veryFamiliar">完全不熟悉</label>
      </div>
    </div>
    <div class="personal-eval">
      <span>建议推广主讲教师教学方法(具体说明)</span>
      <div>
        <input
          type="radio"
          id="yes"
          name="yes"
          value="是"
          v-model="overallData.isPromote"
        />
        <label for="yes">是</label>
        <input
          type="radio"
          id="no"
          name="no"
          value="否"
          v-model="overallData.isPromote"
        />
        <label for="no">否</label>
        <input
          type="text"
          v-model="overallData.promoteText"
          :disabled="overallData.isPromote === '否' ? true : false"
        />
      </div>
    </div>
    <div class="personal-eval">
      <span>建议主讲教师提升教学能力，学院（部、中心）继续听课跟进</span>
      <div>
        <input
          type="radio"
          id="follow"
          name="follow"
          value="需要跟进"
          v-model="overallData.needImprove"
        />
        <label for="follow">需要跟进</label>
        <input
          type="radio"
          id="not-follow"
          name="not-follow"
          value="不需要跟进"
          v-model="overallData.needImprove"
        />
        <label for="not-follow">不需要跟进</label>
      </div>
    </div>
    <div class="personal-eval">
      <span>其他建议</span>
      <input type="text" v-model="overallData.otherAdvice" />
    </div>
    <div class="personal-eval">
      <span>听课人签名：</span>
      <div>
        <input
          type="text"
          v-model="overallData.listenerName"
          class="sign-name"
        />
        <input type="date" v-model="overallData.listenTime" class="sign-time" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverallEvaluation",
  props: {
    overallData: {
      type: Object,
      default() {
        return {
          performance: "", // 最欣赏的表现
          advice: "", // 具体建议
          familiar: "", // 熟悉程度
          isPromote: "", // 是否建议推广
          promoteText: "", // 推广的具体说明
          needImprove: "", // 是否继续跟进
          otherAdvice: "", // 其他建议
          listenerName: "", // 听课人签名
          listenTime: "", // 听课时间
        };
      },
    },
  },
};
</script>

<style scoped>
.overall {
  width: 100%;
}
textarea {
  display: block;
  width: 90%;
  margin: auto;
  font-size: 15px;
  text-indent: 4ch;
  margin-top: 20px;
  min-height: 200px;
  max-height: 450px;
}
.personal-eval span {
  display: inline-block;
  width: 40%;
  padding: 0 10px;
  /* max-width: 50%; */
  /* min-width: 40%; */
  vertical-align: top;
  margin-right: 5px;
}
.personal-eval {
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  justify-items: center;
  text-align: left;
  margin-top: 10px;
}
.personal-eval > div {
  width: 50%;
}
.personal-eval > div input, .personal-eval > div label {
  margin-left: 5px;
}
.sign-name,
.sign-time {
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  border-radius: 0px;
  margin-right: 5px;
  vertical-align: bottom;
}
</style>
