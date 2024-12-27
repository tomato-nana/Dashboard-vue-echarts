<template>
  <div class="head_panel">
    <head-panel-data>
      <template v-slot:data>
        <h2 class="data" v-if="consumptionWater[0]">
          {{ showConsumptionWater }}
        </h2>
      </template>
      <template v-slot:describe>
        <h4 class="describe">消费水量（升）</h4>
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
    consumptionWater: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data: () => ({
    currentIndex: 0,
  }),

  //兄弟组件传值，传入selectDate的index
  created() {
    evenBus.$on("sendIndex", (index) => {
      this.currentIndex = index;
    });
  },

  //动态监听currentIndex变化
  computed: {
    showConsumptionWater() {
      if (this.currentIndex == 0) {
        return this.consumptionWater[0].day_count;
      } else if (this.currentIndex == 1) {
        return this.consumptionWater[0].wk_count;
      } else {
        return this.consumptionWater[0].mn_count;
      }
    },
  },
};
</script>

<style>
</style>