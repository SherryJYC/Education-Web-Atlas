<template>
<div>
    <b-card></b-card>
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
import {pair_post,pair_lowersecond,pair_uppersecond, pair_primary, pair_bachelor} from '../../assets/reason2';
export default {
  components: { 
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
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
          },
          {
            name: "Bachelor",
            data: pair_bachelor,
          }
          ],
          chartOptions: {
            chart: {
              height: 350,
              type: 'scatter',
              zoom: {
                enabled: true,
                type: 'xy'
              }
            },
            xaxis: {
              title: "Adolescent Birth Rate ",
              tickAmount: 10,
              labels: {
                formatter: function(val) {
                  return parseFloat(val).toFixed(1)
                }
              }
            },
            yaxis: {
              title: "Gender Parity Index",
              tickAmount: 7
            }
          },
    }
  }
}
</script>

<style>

</style>