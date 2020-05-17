<template>
  <div>
    <b-card-group deck>
      <b-card border-variant="light" >
        <!-- chart of EdTech Funding  -->
       <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
      </b-card> 
      <b-card border-variant="light" >
        <!-- chart of EdTech in 2019 -->
        <apexchart type="donut" height="350" :options="chartOptions1" :series="series1"></apexchart>
      </b-card>
  </b-card-group>
  <b-card border-variant="light"  class="text-left normal-text">
    <mark>A unicorn company is a private company with a valuation of over $1 billion</mark>. 
    In January 2020, 14 EdTech Unicorns around the world have collectively raised over $6.6 billion of total funding 
    in the last decade. As shown in the left graph, the fundings to EdTech unicorns have been increasing 
    rapidly in the last five years.
    EdTech Unicorns are centered in three countries, China, the United States, and India. To further look at the companies, 
    almost all of them focus on online learning education services. It gives an insight that e-learning is increasingly 
    popular these days. With the assumption that online education could help to promote equality education, it can help 
    to step towards equal education.
  </b-card>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import {china_years,india_years,usa_years,country3_2019} from "../../assets/json/trend1"
export default {
  components: { 
    apexchart: VueApexCharts
  },
  data() {
    return {
      china_years,
      usa_years,
      india_years,
      country3_2019,
      series: [{
            name: 'USA',
            data: usa_years
          }, {
            name: 'India',
            data: india_years
          },{
            name: 'China',
            data: china_years
          }],
          chartOptions: {
            colors:["#A8322D","#e07b39","#FFC300"],
            chart: {
              type: 'bar',
              height: 350,
              stacked: true,
              toolbar: {
                show: false
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
            title:{
              text: "EdTech Unicorn Fundings",
              style: {
                  fontSize: '15px'
                },
            },
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
              text: "EdTechs in 2019",
              style: {
                fontSize: '15px'
              },
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
              toolbar: {
                show: false 
              }
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
.normal-text{
  text-align: left;
  padding-left: 10%;
  max-width: 90%;
}
</style>