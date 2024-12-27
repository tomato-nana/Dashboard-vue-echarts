<template>
  <div class="head_panel_data">
    <slot name="data" class="data"> </slot>
    <slot name="describe" class="describe"> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.head_panel_data {
  text-align: center;
  line-height: 60px;
  .data {
    color: #2da8d8;
  }
  .describe {
    color: #fff;
    font-weight: normal;
  }
}
</style>