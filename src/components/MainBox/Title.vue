<template>
  <div class="box">
    <div class="demo1">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
    <div class="demo2"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.box {
  position: relative;
  .demo1 {
    display: flex;
  }

  .demo1 i {
    height: 10px;
    width: 12px;
    background: #18a9d4;
    margin: 1px;
    opacity: 1;
    transition-duration: 2s;
    transform: skewX(-25deg);
  }
  .demo1 i:hover {
    opacity: 0;
    transition-duration: 0.2s;
  }
  .demo2 {
    position: absolute;
    left: 14.5%;
    bottom: 1px;
    width: 175px;
    height: 2px;
    background-color: #18a9d4;
    opacity: 1;
    transition-duration: 2s;
  }

  .demo2:hover {
    opacity: 0;
    transition-duration: 0.2s;
  }
}
</style>