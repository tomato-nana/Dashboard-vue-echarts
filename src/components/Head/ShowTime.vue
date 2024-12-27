<template>
  <div class="showTime">
    <span>{{ nowDate }}</span>
    <span>{{ nowWeek }}</span>
    <span>{{ nowTime }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      nowWeek: "",
      nowDate: "",
      nowTime: "",
    };
  },
  mounted() {
    let _this = this;
    this.timer = setInterval(() => {
      this.setNowTimes();
    }, 1000);
  },
  methods: {
    setNowTimes() {
      let myDate = new Date();
      // console.log(myDate)
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.nowDate = yy + "年" + mm + "月" + dd + "日";
      this.nowTime = hou + ":" + min + ":" + sec;
      this.nowWeek = week;
    },
  },
};
</script>

<style lang="less" scoped>
.showTime {
  text-align: center;
  line-height: 42px;
  flex: 2;
  cursor: default;
  // background-color: red;
  color: #2da8d8;
}
</style>