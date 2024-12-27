<template>
  <div class="column_msg">
    <h3>▇ 最新消费</h3>
    <div class="box-card" id="parent">
      <div class="child" id="child1">
        <p v-for="(item, index) in newColumnMsg" :key="index" class="text">
          {{ item.settleTime | formatDate }} {{ item.studentId }} 使用
          {{ item.consumptionAmount }} 纯水表消费(电源版)
        </p>
      </div>
      <div class="child" id="child2"></div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../../assets/js/formatDate";
import { msgScroll } from "../../assets/js/msgScroll";

export default {
  props: {
    columnMsg: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      newColumnMsg: [],
      timer1: "",
      timer2: "",
    };
  },

  created() {
    //排序后先赋值一次
    this.newColumnMsg = [
      ...this.columnMsg.sort((a, b) => {
        return b.settleTime - a.settleTime;
      }),
    ];
    // this.timer2 = setTimeout(() => {
    //   this.newColumnMsg = [
    //     ...this.columnMsg.sort((a, b) => {
    //       return b.settleTime - a.settleTime;
    //     }),
    //   ];
    // }, 200);
  },

  mounted() {
    //消息滚动
    msgScroll();

    //定时赋值
    this.timer1 = setInterval(() => {
      this.newColumnMsg = [
        ...this.columnMsg.sort((a, b) => {
          return b.settleTime - a.settleTime;
        }),
      ];
    }, 1000 * 60 * 60 * 24);
  },
  beforeDestroy() {
    clearInterval(this.timer2);
    clearInterval(this.timer1);
  },

  filters: {
    //时间格式化
    formatDate(time) {
      var data = new Date(time);
      return formatDate(data, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style lang="less" scoped>
.column_msg {
  flex: 2;
  // background-color: yellow;
  margin-top: 10px;
  cursor: default;
}

h3 {
  padding: 12px 20px;
  color: #2da8d8;
}
.box-card {
  color: #2da8d8;
  height: 150px;
  overflow-y: scroll;
  #child {
    height: auto;
  }
  .text {
    font-size: 14px;
    padding: 11px 20px;
  }
}
</style>