<template>
  <div class="header">
    <Title v-if="classtype !== '实验课'">
      <h2 slot="first-title">教学环境观察</h2>
      <p slot="second-title">
        请观察教室安排是否合理，教室设备，教室采光、通风、
        噪音、温度等环境条件是否符合教学要求以及其他可能影响到教学效果的环境因素。
      </p>
    </Title>
    <slot name="environment"></slot>
    <Title>
      <template v-if="classtype !== '实验课'">
        <h2 slot="first-title">评价</h2>
      </template>
      <template v-else>
        <h2 slot="first-title">观察清单</h2>
      </template>
    </Title>
    <slot name="evaluation"></slot>
    <Title>
      <h2 slot="first-title">总体评价</h2>
    </Title>
    <slot name="overallEvaluation"></slot>
    <Title>
      <h2 slot="first-title">跟进记录</h2>
      <p slot="second-title">勾选“需要跟进”及跟进“其他建议”时填写</p>
    </Title>
    <slot name="followUpRecord"></slot>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "Header",
  props: {
    classtype: String,
  },
  components: {
    Title,
  },
};
</script>

<style scoped></style>
