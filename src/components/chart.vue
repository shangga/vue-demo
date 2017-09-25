<template>
  <div class="chart" :class="'chart' + index">
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  props: {
    option: {
      type: Object,
      require: true
    },
    index: {
      require: true
    }
  },
  data () {
    return {}
  },
  created () {
  },
  mounted () {
    this.myChart = echarts.init(document.querySelector('.chart' + this.index))
    this.myChart.setOption(this.option)
  }
}
</script>
<style scoped>
  .chart {
    height: 300px;
    width: 30%;
  }
</style>
