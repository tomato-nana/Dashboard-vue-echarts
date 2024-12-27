<template>
  <div class="head">
    <div class="head_hd">
      <select-date :titles="['今天', '近7天', '近30天']" />
      <h1>运营数据中心</h1>
      <show-time />
    </div>

    <div class="head_bd">
      <head-panel-1 :consumptionAmount="consumptionAmount" />
      <head-panel-2 :rechargeAmount="rechargeAmount" />
      <head-panel-3 :consumptionWater="consumptionWater" />
      <head-panel-4 :deviceCount="deviceCount" />
      <head-panel-5 :personnelCount="personnelCount" />
    </div>
  </div>
</template>

<script>
import HeadPanel1 from "./HeadPanels/HeadPanel1.vue";
import HeadPanel2 from "./HeadPanels/HeadPanel2.vue";
import HeadPanel3 from "./HeadPanels/HeadPanel3.vue";
import HeadPanel4 from "./HeadPanels/HeadPanel4.vue";
import HeadPanel5 from "./HeadPanels/HeadPanel5.vue";

import SelectDate from "./SelectDate.vue";
import ShowTime from "./ShowTime.vue";

import {
  getConsumptionAmount,
  getRechargeAmount,
  getConsumptionWater,
  getDeviceCount,
  getPersonnelCount,
} from "../../network/homepage";

export default {
  components: {
    HeadPanel1,
    HeadPanel2,
    HeadPanel3,
    HeadPanel4,
    HeadPanel5,
    SelectDate,
    ShowTime,
  },

  data() {
    return {
      consumptionAmount: [],
      rechargeAmount: [],
      consumptionWater: [],
      deviceCount: [],
      personnelCount: [],
    };
  },

  created() {
    this.getConsumptionAmount();
    this.getRechargeAmount();
    this.getConsumptionWater();
    this.getDeviceCount();
    this.getPersonnelCount();
  },

  methods: {
    /*
    网络请求相关方法  
    */
    //请求消费金额
    getConsumptionAmount() {
      getConsumptionAmount().then((res) => {
        this.consumptionAmount = res;
      });
    },
    //请求充值金额
    getRechargeAmount() {
      getRechargeAmount().then((res) => {
        this.rechargeAmount = res;
      });
    },
    //请求消费水量
    getConsumptionWater() {
      getConsumptionWater().then((res) => {
        this.consumptionWater = res;
      });
    },
    //请求设备数
    getDeviceCount() {
      getDeviceCount().then((res) => {
        this.deviceCount = res;
      });
    },
    //请求用户数
    getPersonnelCount() {
      getPersonnelCount().then((res) => {
        this.personnelCount = res;
      });
    },
  },
};
</script>

<style lang="less" scoped>
.head_hd {
  display: flex;
  position: relative;

  h1 {
    flex: 5;
    cursor: default;
    text-align: center;
    background-image: -webkit-linear-gradient(top right, #2da8d8, #3191be);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.head_bd {
  display: flex;
  .head_panel {
    flex: 1;
    margin: 15px 10px 0 10px;
    height: 130px;

    //边框四角
    position: relative;
    border: 1px solid rgba(25, 186, 139, 0.17);
    background: url(../../assets/img/line\(1\).png) rgba(255, 255, 255, 0.03);
    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
      content: "";
    }
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid #02a6b5;
      border-top: 2px solid #02a6b5;
      content: "";
    }
  }
}
</style>