<template>
  <div class="head_panel">
    <head-panel-data>
      <template v-slot:data>
        <h2 class="data" v-if="consumptionAmount[0]">
          {{ showConsumptionAmount }}
        </h2>
      </template>
      <template v-slot:describe>
        <h4 class="describe">消费金额（元）</h4>
      </template>
    </head-panel-data>
    <div class="panel-footer"></div>
  </div>
</template>

<script>
import HeadPanelData from "./HeadPanelData.vue";
import { evenBus } from "../../../main";

export default {
  components: { HeadPanelData },

  props: {
    consumptionAmount: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    currentIndex: 0,
  }),

  created() {
    //兄弟组件传值，传入selectDate的index
    evenBus.$on("sendIndex", (index) => {
      this.currentIndex = index;
    });
  },

  //动态监听currentIndex变化
  computed: {
    showConsumptionAmount() {
      if (this.currentIndex == 0) {
        return this.consumptionAmount[0].day_count;
      } else if (this.currentIndex == 1) {
        return this.consumptionAmount[0].wk_count;
      } else {
        return this.consumptionAmount[0].mn_count;
      }
    },
  },
};
</script>

<style lang="less" scoped>
</style>