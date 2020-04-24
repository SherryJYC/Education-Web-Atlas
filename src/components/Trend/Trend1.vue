<template>
  <div>
    <b-card-group deck>
      <b-card>
        <!-- chart of EdTech Funding  -->
       <apexchart type="bar" height="350" width="600" :options="chartOptions" :series="series"></apexchart>
      </b-card> 
      <b-card>
        <!-- chart of EdTech in 2019 -->
        <apexchart type="donut" width="500" :options="chartOptions1" :series="series1"></apexchart>
      </b-card>
    </b-card-group>
    <b-card>SUMMARY PLACEHOLDER</b-card>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
export default {
  components: { 
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [{
            name: 'USA',
            data: [55,213,159,110,40,290]
          }, {
            name: 'India',
            data: [0,30,145,110,540,200]
          }, {
            name: 'China',
            data: [162,561,450,800,1540,950]
          }],
          chartOptions: {
            colors:["#A8322D","#e07b39","#FFC300"],
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: true
              },
              zoom: {
                enabled: true
              }
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom',
                  offsetX: -10,
                  offsetY: 0
                }
              }
            }],
            plotOptions: {
              bar: {
                horizontal: false,
              },
            },
            xaxis: {
              categories: ['2014','2015','2016','2017','2018','2019'],
              position: 'bottom',
              title: {text: "Year"}
            },
            yaxis: {
              title: {text: "USD Millions"}
            },
            title:{text: "EdTech Unicorn Fundings"},
            legend: {
              position: 'right',
              offsetY: 40
            },
            fill: {
              opacity: 1
            }
          },
          // pie chart
          series1: [21,14,65],
          chartOptions1: {
            labels: ['USA', 'India', 'China'],
            colors: ["#A8322D","#e07b39","#FFC300"],
            title: {
              text: "EdTechs in 2019"
            },
            tooltip: {
              y:{
              formatter(value) {
                if (value == 65){
                  return "Yuanfudao, Hujiang, VIPKid, 17Zuoye, Knowbox, iTutorGroup, Zhangmen, Huike"
                }
                else if (value == 14){
                  return "ByJu’s"
                }
                else {
                  return "Duolingo, Guild Education, Coursera, Age of Learning, Udacity"
                }
              }
              }
            },
            chart: {
              height: 350,
              type: 'donut',
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                  name: {
                    fontSize: '22px',
                  },
                  value: {
                    fontSize: '16px',
                  }
                }
              }
            }
          }
        }
    }
  }

</script>

<style>

</style>