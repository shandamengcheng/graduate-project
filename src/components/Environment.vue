<template>
  <div class="environment">
    <textarea @input="updataEval"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Environment',
  methods: {
    updataEval: function(e) {
      this.$emit('updateText', e.target.value);
    }
  }
}
</script>

<style scoped>
.environment {
  width: 100%;
  margin-top: 20px;
  /* min-height: 200px; */
}
.environment textarea {
  width: 90%;
  min-height: 200px;
  font-size: 15px;
  text-indent: 4ch;
  display: block;
  margin: auto;
}
</style>