<template>
  <div class="selectDate">
    <el-button
      type="primary"
      plain
      round
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: index === currentIndex }"
      @click="itemClick(index)"
      >{{ item }}</el-button
    >
  </div>
</template>

<script>
import { evenBus } from "../../main";

export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      // console.log(index);

      //事件总线发送index
      evenBus.$emit("sendIndex", index);
    },
  },
};
</script>

<style lang="less" scoped>
// .active {
//   // background-color: #fff;
//   background-color: #1a4899;
//   border-bottom: 2px solid #fff;
//   span {
//     color: #fff;
//   }
// }

// .selectDate {
//   flex: 2;
//   display: flex;
//   .select_data_item {
//     flex: 1;
//     margin: 5px 10px;
//     cursor: pointer;
//     border-radius: 25%;
//     text-align: center;
//     line-height: 42px;
//     color: #2da8d8;
//   }
// }
.selectDate {
  flex: 2;
  display: flex;
  .button {
    flex: 1;
  }
}

.el-button.is-round {
  border-radius: 20px;
  padding: 12px 40px;
}

.active {
  background: #409eff !important;
  border-color: #2187e7 !important;
  color: #fff !important;
}
</style>