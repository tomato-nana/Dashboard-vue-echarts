<template>
  <div class="column_item" ref="chart"></div>
</template>

<script>
import { evenBus } from "../../../main";

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入折线图图表，图表后缀都为 Chart
import { LineChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
]);

export default {
  props: {
    consumptionTrend: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      chartInstance: null,
      currentIndex: 0,
      xDate: [],
      yPersonalConsume: [],
      yTotalConsume: [],
      timer: "",
    };
  },
  created() {
    //兄弟组件传值，传入selectDate的index
    evenBus.$on("sendIndex", (index) => {
      this.currentIndex = index;
    });
  },

  watch: {
    //监听selectdate的index变化
    currentIndex() {
      this.updateChart();
    },
  },
  mounted() {
    this.initChart();

    //对更新后的dom进行操作
    this.timer = setTimeout(() => {
      this.updateChart();
    }, 100);

    // this.$nextTick(() => {
    //   this.updateChart();
    // });

    // new Promise((resolve) => {
    //   resolve();
    // }).then(() => {
    //   this.updateChart();
    // });

    // this.timer = setTimeout(() => {
    //   this.updateChart();
    // }, 1000);
  },

  beforeDestroy() {
    clearTimeout(timer);
  },

  methods: {
    /* 
    初始化图表
    */
    initChart() {
      //实例化
      this.chartInstance = echarts.init(this.$refs.chart);

      //配置初始化数据
      let initOption = {
        //曲线颜色
        color: ["#c8b674", "#18a9d4"],
        //标题
        title: {
          text: "▌消费趋势",
          top: "2%",
          left: "3%",
          textStyle: {
            color: "#18a9d4",
          },
        },
        //触发坐标轴信息
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#273f7d",
            },
          },
        },
        //图例图标
        legend: {
          textStyle: {
            color: "#18a9d4",
          },
          data: ["人均消费金额（元）", "消费总金额（元）"],
          left: "20%",
          top: "10%",
        },
        //grid组件相关配置
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          axisLabel: {
            color: "#18a9d4",
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#18a9d4",
          },
          // 修改分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
        series: [
          {
            name: "人均消费金额（元）",
            smooth: 0.6,
            type: "line",
            // 填充颜色设置
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(220, 200, 127, 0.9)", // 渐变色的起始颜色
                },
                {
                  offset: 1,
                  color: "rgba(1, 132, 213, 0.2)", // 渐变线的结束颜色
                },
              ]),
            },
          },
          {
            name: "消费总金额（元）",
            smooth: 0.6,
            type: "line",
            label: {
              show: true,
              position: "top",
              color: "#fff",
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.9)", // 渐变色的起始颜色
                },
                {
                  offset: 1,
                  color: "rgba(1, 132, 213, 0.2)", // 渐变线的结束颜色
                },
              ]),
            },
          },
        ],
      };
      this.chartInstance.setOption(initOption);
    },

    /* 
    更新图表
     */
    updateChart() {
      this.xDate = this.consumptionTrend[this.currentIndex].map((item) => {
        return item.dt;
      });
      this.yTotalConsume = this.consumptionTrend[this.currentIndex].map(
        (item) => {
          return item.day_avg;
        }
      );
      this.yPersonalConsume = this.consumptionTrend[this.currentIndex].map(
        (item) => {
          return item.day_sum;
        }
      );
      //配置服务器数据
      let dataOption = {
        xAxis: {
          data: this.xDate,
        },
        series: [
          {
            data: this.yTotalConsume,
          },
          {
            data: this.yPersonalConsume,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
  },
};
</script>

<style lang="less" scoped>
</style>




