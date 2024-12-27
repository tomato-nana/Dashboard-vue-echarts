<template>
  <div class="homepage">
    <!-- 头部 -->
    <Head />
    <!-- 页面主体 -->
    <MainBox />
  </div>
</template>

<script>
import Head from "./Head/Head";
import MainBox from "./MainBox/MainBox";

export default {
  name: "HomePage",
  components: {
    Head,
    MainBox,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
