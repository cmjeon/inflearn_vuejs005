<template>
  <canvas ref='barChart' id="barChart" width="400" height="400"></canvas>
</template>

<script>
// import Chart from 'chart.js';
export default {
  props: ['propsdata'],
  mounted() {
    var ctx = this.$refs.barChart;
    // var ctx = document.getElementById('barChart');
    var myChart = new this.$_Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.propsdata,
      },
      options: {
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
        }
      }
    });
    console.log(myChart);
  }
}
</script>

<style>

</style>