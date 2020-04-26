<template>
<div>
    <b-card-group deck>
      <b-card>
       <apexchart type="scatter" height="350" :options="chartOptions" :series="series"></apexchart>
      </b-card> 
      <b-card
       title="Definition"
       class="text-left"
      >
      <b-card-text>
      Adolescent birth rate: number of live births to adolescent women per 1,000 adolescent women
      </b-card-text>
      <b-card-text>
      Gender parity index: female / male enrollment rate
      </b-card-text>
      </b-card>
    </b-card-group>
  </div>

</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import {pair_post,pair_lowersecond,pair_uppersecond, pair_primary, pair_bachelor} from '../../assets/json/reason2';
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
          },{
            name: "Lower Secondary",
            data: pair_lowersecond
          },
          {
            name: "Upper Secondary",
            data: pair_uppersecond
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
              zoom: {
                enabled: true,
                type: 'xy'
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
              text: 'Adolescent Birth Rate VS Gender Parity Index'
            },
          },
    }
  }
}
</script>

<style>

</style>