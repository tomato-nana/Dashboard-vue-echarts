<template>
  <div class="column_item" ref="chart"></div>
</template>

<script>
// //引入 ECharts 主模块
// import * as echarts from "echarts";

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
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
  BarChart,
  CanvasRenderer,
]);

export default {
  props: {
    botDevice: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      chartInstance: null,
      timer: "",
    };
  },
  beforeDestroy() {
    clearTimeout(timer);
  },

  mounted() {
    this.initChart();
    //对更新后的dom进行操作
    this.timer = setTimeout(() => {
      this.updateChart();
    }, 100);
  },

  methods: {
    /*
     初始化图标
     */
    initChart() {
      //实例化
      this.chartInstance = echarts.init(this.$refs.chart);

      //配置初始化数据
      let initOption = {
        //标题
        title: {
          text: "▌机器分布数量",
          top: "4%",
          left: "3%",
          textStyle: {
            color: "#2da8d8",
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
        //grid组件相关配置
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            axisLabel: {
              interval: 0,
              rotate: 45,
              color: "#2da8d8",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            // 修改分割线的颜色
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
            axisLabel: {
              color: "#2da8d8",
            },
          },
        ],
        series: [
          {
            type: "bar",
            label: {
              show: true,
              position: "top",
              textStyle: {
                color: "white",
              },
            },
            itemStyle: {
              //圆角设置
              barBorderRadius: [15, 15, 0, 0],
              //柱状图颜色渐变
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#02f6e9",
                },
                {
                  offset: 1,
                  color: "#02f6a9",
                },
              ]),
            },
          },
        ],
      };
      //传入参数
      this.chartInstance.setOption(initOption);
    },
    /*
     更新图表
     */
    updateChart() {
      const buildingName = this.botDevice.map((item) => {
        return item.buildingName;
      });
      const devices = this.botDevice.map((item) => {
        return item.devices;
      });
      //配置服务器数据
      let dataOption = {
        xAxis: [
          {
            data: buildingName,
          },
        ],
        series: [
          {
            data: devices,
          },
        ],
      };
      this.chartInstance.setOption(dataOption);
    },
  },
};
</script>

<style>
</style>