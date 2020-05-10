<template>
<div>
    <b-card-group deck>
      <b-card>
       <apexchart type="scatter" height="350" :options="chartOptions" :series="series"></apexchart>
      </b-card> 
      <b-card class="text-left">
      <b-card-text>
      To learn the possible reasons behind gender inequality, the adolescent birth rate is adopted to find if it has certain 
        relationships with GPI by scatterplot. The rate is defined as the number of births to women ages 15–19 per 1,000 women.
         If there is a general negative trend that the higher the adolescent birth rate, the lower the GPI (more in 
        favor of male), then we can conclude young ladies devote to the family so as to quit school education at an early stage.<br/>
      While after observation of either all levels or especially upper secondary level, there is no such obvious negative trend
        between the adolescent birth rate and GPI. It is indeed for some countries, they have a low GPI and a high adolescent birth 
        rate meanwhile, but we can not conclude such trends worldwide. So there is no definite relationship between adolescent birth
        rate and GPI.
      </b-card-text>
      </b-card>
    </b-card-group>
  </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import {pair_post,pair_lowersecond,pair_uppersecond, pair_primary, pair_bachelor} from '../../assets/json/reason3';
export default {
  components: { 
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
            name: "Bachelor",
            data: pair_bachelor,
          },
        {
            name: "Post Secondary",
            data: pair_post,
          },
          {
            name: "Upper Secondary",
            data: pair_uppersecond
          },
          {
            name: "Lower Secondary",
            data: pair_lowersecond
          },
          {
            name: "Primary",
            data: pair_primary
          }
          ],
          chartOptions: {
            colors:["#A8322D", "#FFC300","#0069B4","#72791C","#956013"],
            chart: {
              height: 350,
              type: 'scatter',
              toolbar: {
                show: true             
              }
            },
            xaxis: {
              title: {text: "Adolescent Birth Rate "},
              tickAmount: 10,
              labels: {
                formatter: function(val) {
                  return parseFloat(val).toFixed(1)
                }
              }
            },
            yaxis: {
              title: {text:"Gender Parity Index"},
              tickAmount: 7
            },
            title: {
              text: 'Adolescent Birth Rate VS Gender Parity Index',
              style: {
                fontSize: '15px'
              },
            },
          },
    }
  }
}
</script>

<style>

</style>