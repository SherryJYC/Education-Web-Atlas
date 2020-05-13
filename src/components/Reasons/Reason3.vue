<template>
<div>
    <b-card-group deck>
      <b-card border-variant="light" >
       <apexchart type="scatter" height="350" :options="chartOptions" :series="series"></apexchart>
      </b-card> 
      <b-card border-variant="light" class="text-left">
      <b-card-text>
      To learn the possible reasons behind gender inequality, the <mark>Adolescent Birth Rate (ABR)</mark> is adopted to find if it has certain 
        relationships with GPI. <br/>
        <br/>
        The ABR is defined as the number of births given by 1,000 women aged 15–19.
         If there is a general negative trend: the higher the adolescent birth rate, the lower the GPI (more in 
        favor of male), then we can conclude young ladies devote to the family at an early stage tend to quit school education.<br/>
        <br/>While for either all levels or especially upper secondary level (cover mostly the age 15-19), there is no obvious negative 
        trend between the ABR and GPI worldwide.
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
                show: false             
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