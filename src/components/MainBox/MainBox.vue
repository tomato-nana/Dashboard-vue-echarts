<template>
  <div class="mainbox" v-if="columnMsg.length">
    <div class="column">
      <Title class="box1" />
      <column-item-1 :consumptionTrend="consumptionTrend" />
      <Title class="box2" />
      <column-item-2 :rechargeTrend="rechargeTrend" />
    </div>
    <div class="column">
      <column-map-act />
      <column-map />
      <column-msg :columnMsg="columnMsg" />
    </div>
    <div class="column">
      <Title class="box3" />
      <column-item-4 :consumptionWaterTrend="consumptionWaterTrend" />
      <Title class="box4" />
      <column-item-5 :botDevice="botDevice" />
    </div>
  </div>
</template>

<script>
import ColumnItem1 from "./ColumnItems/ColumnItem1.vue";
import ColumnItem2 from "./ColumnItems/ColumnItem2.vue";
import ColumnItem4 from "./ColumnItems/ColumnItem4.vue";
import ColumnItem5 from "./ColumnItems/ColumnItem5.vue";

import ColumnMapAct from "./ColumnMapAct";
import ColumnMap from "./ColumnMap";
import ColumnMsg from "./ColumnMsg";

import {
  getConsumptionTrend,
  getRechargeTrend,
  getConsumptionWaterTrend,
  getBotDevice,
  getColumnMsg,
} from "../../network/homepage";
import Title from "./Title.vue";

export default {
  components: {
    ColumnItem1,
    ColumnItem2,
    ColumnItem4,
    ColumnItem5,

    ColumnMapAct,
    ColumnMap,
    ColumnMsg,
    Title,
  },
  data() {
    return {
      consumptionTrend: [],
      rechargeTrend: [],
      consumptionWaterTrend: [],
      botDevice: [],

      columnMsg: [],
      timer: "",
    };
  },

  created() {
    this.getConsumptionTrend();
    this.getRechargeTrend();
    this.getConsumptionWaterTrend();
    this.getBotDevice();

    this.getColumnMsg();
  },

  methods: {
    /* 
    网络请求相关方法
     */
    //请求消费趋势
    async getConsumptionTrend() {
      // getConsumptionTrend().then((res) => {
      //   this.consumptionTrend = res;
      // });
      const res = await getConsumptionTrend();
      this.consumptionTrend = res;
    },
    //请求充值趋势
    async getRechargeTrend() {
      // getRechargeTrend().then((res) => {
      //   this.rechargeTrend = res;
      // });
      const res = await getRechargeTrend();
      this.rechargeTrend = res;
    },
    //请求消耗水量趋势
    getConsumptionWaterTrend() {
      getConsumptionWaterTrend().then((res) => {
        this.consumptionWaterTrend = res;
      });

      // const res = getConsumptionWaterTrend();
      // this.consumptionWaterTrend = res;
    },
    //请求机器分布
    async getBotDevice() {
      // getBotDevice().then((res) => {
      //   this.botDevice = res;
      // });
      const res = await getBotDevice();
      this.botDevice = res;
    },

    //请求滚动信息
    getColumnMsg() {
      getColumnMsg().then((res) => {
        const data = res.Data.data;
        this.columnMsg = data;
        // console.log("++++++请求成功+++++++");
      });
    },
  },

  mounted() {
    //定时器重复请求---->一天请求一次
    this.timer = setInterval(this.getColumnMsg, 1000 * 60 * 60 * 24);
  },
  beforeDestroy() {
    //离开时，销毁定时器
    clearInterval(this.timer);
  },
};
</script>


<style lang="less" scoped>
.mainbox {
  display: flex;
  .column {
    flex: 2;
    display: flex;
    margin: 15px 20px 0 20px;
    height: 730px;
    flex-direction: column;
    .column_item {
      flex: 1;
      margin: 15px 0;
      position: relative;
      background: url(../../assets/img/line\(1\).png) rgba(255, 255, 255, 0.03);
    }
  }
  .column:nth-child(2) {
    flex: 4;
    display: flex;
    flex-direction: column;
  }

  .column:nth-child(1) .box1 {
    position: relative;
    top: 40px;
    left: 189px;
    z-index: 999;
  }
  .column:nth-child(1) .box2 {
    position: relative;
    top: 40px;
    left: 189px;
    z-index: 999;
  }
  .column:nth-child(3) .box3 {
    position: relative;
    top: 40px;
    left: 189px;
    z-index: 999;
  }
  .column:nth-child(3) .box4 {
    position: relative;
    top: 50px;
    left: 189px;
    z-index: 999;
  }
}
</style>