<template>
  <div class="column_map_act">
    <div class="act1"></div>
    <div class="act2"></div>
    <div class="act3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.column_map_act {
  //   position: relative;
  //   height: 930px;
  z-index: -999;
  .act1 {
    position: absolute;
    width: 30%;
    height: 59%;
    top: 50%;
    left: 51%;
    transform: translate(-50%, -50%);
    background: url(../../assets/img/map.png);
    background-size: 100% 100%;
    opacity: 0.2;
  }
  .act2 {
    position: absolute;
    width: 30%;
    height: 59%;
    top: 50.3%;
    left: 50.9%;
    transform: translate(-50%, -50%);
    background: url(../../assets/img/lbx.png);
    background-size: 100% 100%;
    animation: rotate1 15s linear infinite;
    opacity: 0.6;
  }
  .act3 {
    position: absolute;
    width: 32%;
    height: 63%;
    top: 49.3%;
    left: 50.9%;
    transform: translate(-50%, -50%);
    background: url(../../assets/img/jt.png);
    background-size: 100% 100%;
    animation: rotate2 15s linear infinite;
    opacity: 0.6;
  }
  @keyframes rotate1 {
    form {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate2 {
    form {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}
</style>