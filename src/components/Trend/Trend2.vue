<template>
  <div>
    <b-card-group deck>
      <b-card border-variant="light" >
        <!-- chart of global female enrollment 2017  -->
        <apexchart type="line" height="500" :options="chartOptions1" :series="series1"></apexchart>
      </b-card>
    </b-card-group>

    <b-card border-variant="light" class="text-left">
        <br/>In a sentence, the world almost reaches the gender parity at the short-cycle tertiary level in 2017, 
        is close to it at primary and secondary levels, but still far at bachelor, master, and especially Ph.D. level. 
        To compare with the global average, Switzerland has better performances on gender equality at the primary, bachelor,
         master, and Ph.D. levels. China is better at short-cycle tertiary, bachelor, and master levels. It is evident that 
         the gender inequality needs to be paid attention at short-cycle tertiary level in Swizterland, and primary and Ph.D. 
         levels in China.
    </b-card>

    <!-- <b-card-group deck>
      <b-card border-variant="light" > -->
        <!-- radar chart of Swiss female enrollment 2017  -->
        <!-- <apexchart type="radar" height="400" :options="chartOptions_swiss1" :series="series_swiss1"></apexchart>
      </b-card>
      <b-card border-variant="light" > -->
        <!-- radar chart of China female enrollment 2017  -->
        <!-- <apexchart type="radar" height="400" :options="chartOptions_china1" :series="series_china1"></apexchart>
      </b-card> 
    </b-card-group> -->

    <b-card-group deck>
      <b-card border-variant="light" >
        <!-- chart of Swiss female enrollment 2013-2017 timeseris -->
        <apexchart type="line" height="350" :options="chartOptions_swiss2" :series="series_swiss2"></apexchart>
      </b-card>
      <b-card border-variant="light" >
        <!-- chart of China female enrollment 2013-2017 timeseris  -->
        <apexchart type="line" height="350" :options="chartOptions_china2" :series="series_china2"></apexchart>
      </b-card> 
    </b-card-group>

    <b-card border-variant="light" class="text-left">
        From the graph, firstly, at the primary and secondary levels, both countries do not show apparent changes within the five years.
         Secondly, there are no noticeable changes in Switzerland at bachelor and master levels. For these three levels in China, they 
         all increase by around 2% within five years. The bachelor level in China is more in favor of females in 2017. Thirdly, 
         Switzerland is more in favor of females at the short-cycle tertiary level in 2013 with 58% and continues to increase
          within five years to 64% in 2017. However, it does not affect females to enter the bachelor level.
    </b-card>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import {global_avg, china_2017, china_2016,china_2015,china_2014,china_2013,
swiss_2017,swiss_2016,swiss_2015,swiss_2014,swiss_2013} from '../../assets/json/trend2';
var levels = ['Primary', 'Secondary', 'Short-cycle Tertiary', 'Bachelor', 'Master', 'Phd'];
export default {
  components:{
    apexchart: VueApexCharts
  },
  data() {
    return {
      global_avg,
      china_2017,china_2016,china_2015,china_2014,china_2013,
      swiss_2017,swiss_2016,swiss_2015,swiss_2014,swiss_2013,
      // global
      series1: [
            {
              name: "Global Average",
              data: global_avg
            },
             {
              name: "Switzerland",
              data: swiss_2017
            },
             {
              name: "China",
              data: china_2017
            }
          ],
          chartOptions1: {
            colors: ["#6F6F6E","#A8322D", "#FFC300"],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: true,
                type: 'xy'
              },
              dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
              },
              toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 30,
                tools: {
                  download: false,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                },            
              }
            },
            dataLabels: {
              enabled: false,
            },        
            stroke: {
              curve: 'smooth'
            },
            title: {
              text: 'Global Average Female Enrollment Percentage at Different Levels (2017)',
              style: {
                fontSize: '15px'
              },
              align: 'left'
            },
            grid: {
              borderColor: '#e7e7e7',
              row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
              },
            },
            markers: {
              size: 1
            },
            xaxis: {
              categories: levels,
              title: {
                text: 'Education Level'
              }
            },
            yaxis: {
              title: {
                text: 'Percent (%)'
              },
              min: 35,
              max: 65
            },

          },
          // China radar chart
          series_china1: [{
            name: 'Global Average',
            data: global_avg
          }, {
            name: 'China',
            data: china_2017
          }],
          chartOptions_china1: {
            colors:["#FFC300","#A8322D"],
            chart: {
              height: 500,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              },
              // toolbar: {
              //   show: false 
              // }
            },
            title: {
              text: 'Female Enrollment Rate in China (2017)',
              style: {
                fontSize: '15px'
              },
            },
            stroke: {
              width: 2
            },
            fill: {
              opacity: 0.1
            },
            markers: {
              size: 1
            },
            xaxis: {
              categories: levels,
            },
            yaxis: {
              min: 0,
              max: 80,
              formatter: function(val) {
                  return val
                }
            }
          },
          // China Timeseris chart
          series_china2: [{
              name: "2013",
              data: china_2013
            },
            {
              name: "2014",
              data: china_2014
            },
            {
              name: '2015',
              data: china_2015
            },
            { name: "2016",
              data: china_2016
            },
            {
              name: '2017',
              data: china_2017
            }
            
          ],
          chartOptions_china2: {
            colors:["#956013","#3C5A0F", "#FFC300","#0069B4","#A8322D"],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: true
              },
              toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 30,
                tools: {
                  download: false,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                },            
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [2, 3, 2, 3, 2],
              curve: 'straight',
              dashArray: [5, 5, 5, 5, 0]
            },
            title: {
              text: 'Female Enrollment Rate in China (2013-2017)',
              style: {
                fontSize: '15px'
              },
              align: 'left'
            },
            legend: {
              tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '%'
              }
            },
            markers: {
              size: 0,
              hover: {
                sizeOffset: 6
              }
            },
            yaxis:{
              min: 35,
              max: 65,
              title:{text: "Enrollment Rate"}
            },
            xaxis: {
              categories: levels,
              title:{text: "Education Level"}
            },
            annotations: {
              xaxis: [
                {
                  x: 'Short-cycle Tertiary',
                  x2: 'Phd',
                  fillColor: "#A8322D",
                  label: {
                    text: 'Large Variation'
                  }
                }
              ]
            },
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val
                    }
                  }
                }
              ]
            },
            grid: {
              borderColor: '#f1f1f1',
            }
          },
          // Swiss radar chart
          series_swiss1: [{
            name: 'Global Average',
            data: global_avg
          }, {
            name: 'Switzerland',
            data: swiss_2017
          }],
          chartOptions_swiss1: {
            colors:["#FFC300","#A8322D"],
            chart: {
              height: 500,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              },
              // toolbar: {
              //   show: false 
              // }
            },
            title: {
              text: 'Female Enrollment Rate in Switzerland (2017)',
              style: {
                fontSize: '15px'
              },
            },
            stroke: {
              width: 2
            },
            fill: {
              opacity: 0.1
            },
            markers: {
              size: 1
            },
            xaxis: {
              categories: levels,
            },
            yaxis: {
              min: 0,
              max: 80,
              formatter: function(val) {
                  return val
                }
            }
          },
          // Swiss Timeseris chart
          series_swiss2: [{
              name: "2013",
              data: swiss_2013
            },
            {
              name: "2014",
              data: swiss_2014
            },
            {
              name: '2015',
              data: swiss_2015
            },
            { name: "2016",
              data: swiss_2016
            },
            {
              name: '2017',
              data: swiss_2017
            }
          ],
          chartOptions_swiss2: {
            colors:["#956013","#3C5A0F", "#FFC300","#0069B4","#A8322D"],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: true
              },
              toolbar: {
                show: true,
                offsetX: 0,
                offsetY: 30,
                tools: {
                  download: false,
                  selection: true,
                  zoom: true,
                  zoomin: true,
                  zoomout: true,
                  pan: true,
                },            
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: [2, 3, 2, 3, 2],
              curve: 'straight',
              dashArray: [5, 5, 5, 5, 0]
            },
            title: {
              text: 'Female Enrollment Rate in Switzerland (2013-2017)',
              align: 'left'
            },
            legend: {
              tooltipHoverFormatter: function(val, opts) {
                return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
              }
            },
            markers: {
              size: 0,
              hover: {
                sizeOffset: 6
              }
            },
            yaxis:{
              min: 35,
              max: 65,
              title:{text: "Enrollment Rate"}
            },
            xaxis: {
              categories: levels,
              title:{text: "Education Level"}
            },
            annotations: {
              xaxis: [
                {
                  x: 'Secondary',
                  x2: 'Bachelor',
                  fillColor: "#A8322D",
                  label: {
                    text: 'Large Variation'
                  }
                }
              ]
            },
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val + " %"
                    }
                  }
                }
              ]
            },
            grid: {
              borderColor: '#f1f1f1',
            }
          },      
    }
    
  }
}
</script>

<style>

</style>