<template>
  <div class="home">
    戴护具
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/views/Login";

export default {
  name: 'Home',
  components: {
    Login,
  }
}
</script>

<style scoped>
  .home {
    min-height: 100%;
    width: 100%;
    background-color: #2d3a4b;
    color: white;
    overflow: hidden;
  }
</style>
