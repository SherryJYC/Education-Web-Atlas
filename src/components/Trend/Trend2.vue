<template>
  <div>
    <b-card-group deck>
      <b-card>
        <!-- chart of global female enrollment 2017  -->
        <apexchart type="line" height="350" :options="chartOptions1" :series="series1"></apexchart>
      </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card>
        <!-- radar chart of China female enrollment 2017  -->
        <apexchart type="radar" height="350" :options="chartOptions_china1" :series="series_china1"></apexchart>
      </b-card> 
      <b-card>
        <!-- radar chart of Swiss female enrollment 2017  -->
        <apexchart type="radar" height="350" :options="chartOptions_swiss1" :series="series_swiss1"></apexchart>
      </b-card>
    </b-card-group>
    <b-card-group deck>
      <b-card>
        <!-- chart of China female enrollment 2013-2017 timeseris  -->
        <apexchart type="line" height="350" :options="chartOptions_china2" :series="series_china2"></apexchart>
      </b-card> 
      <b-card>
        <!-- chart of Swiss female enrollment 2013-2017 timeseris -->
        <apexchart type="line" height="350" :options="chartOptions_swiss2" :series="series_swiss2"></apexchart>
      </b-card>
    </b-card-group>

    <b-card>SUMMARY PLACEHOLDER</b-card>

  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
var levels = ['Primary', 'Secondary', 'Short-cycle Tertiary', 'Bachelor', 'Master', 'Phd'];
export default {
  components:{
    apexchart: VueApexCharts
  },
  data() {
    return {
      // global
      series1: [
            {
              name: "Global Average",
              data: [48.48,48.63,50.87,53.15,52.91,44.70]
            }
          ],
          chartOptions1: {
            colors: ["#A8322D"],
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
                show: false
              }
            },
            dataLabels: {
              enabled: true,
            },
            stroke: {
              curve: 'smooth'
            },
            title: {
              text: 'Global Average Female Enrollment Percentage at Different Levels (2017)',
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
              min: 40,
              max: 60
            },

          },
          // China radar chart
          series_china1: [{
            name: 'Global Average',
            data: [48.48,48.63,50.87,53.15,52.91,44.70]
          }, {
            name: 'China',
            data: [46.42,47.05,50.49,53.26,48.80,38.90],
          }],
          chartOptions_china1: {
            colors:["#FFC300","#A8322D"],
            chart: {
              height: 350,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              }
            },
            title: {
              text: 'Female Enrollment Rate in China (2017)'
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
              labels: {
                formatter: function(val, i) {
                  if (i % 2 === 0) {
                    return val
                  } else {
                    return ''
                  }
                }
              }
            }
          },
          // China Timeseris chart
          series_china2: [{
              name: "2013",
              data: [46.33, 47.34, 51.20, 50.96, 47.27, 36.65]
            },
            {
              name: "2014",
              data: [46.34, 47.35, 51.03, 51.85, 46.32, 37.12]
            },
            {
              name: '2015',
              data: [46.32, 47.34, 51.04, 52.43, 47.37, 37.18]
            },
            { name: "2016",
              data: [46.34, 47.11, 50.96, 52.97, 47.90, 38.10]
            },
            {
              name: '2017',
              data: [46.42, 47.05, 50.49, 53.26, 48.80, 38.90]
            }
            
          ],
          chartOptions_china2: {
            colors:["#956013","#3C5A0F", "#FFC300","#0069B4","#A8322D"],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
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
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val 
                    }
                  }
                },
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
            data: [48.48,48.63,50.87,53.15,52.91,44.70]
          }, {
            name: 'Switzerland',
            data: [48.55,47.68,64.46,49.37,51.10,46.32],
          }],
          chartOptions_swiss1: {
            colors:["#FFC300","#A8322D"],
            chart: {
              height: 350,
              type: 'radar',
              dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
              }
            },
            title: {
              text: 'Female Enrollment Rate in Switzerland (2017)'
            },
            stroke: {
              width: 2
            },
            fill: {
              opacity: 0.1
            },
            markers: {
              size: 0
            },
            xaxis: {
              categories: levels,
            },
            yaxis: {
              min: 0,
              max: 80,
              labels: {
                formatter: function(val, i) {
                  if (i % 2 === 0) {
                    return val
                  } else {
                    return ''
                  }
                }
              }
            }
          },   
          // Swiss Timeseris chart
          series_swiss2: [{
              name: "2013",
              data: [48.53, 48.06, 58.23, 49.19,50.62, 44.90]
            },
            {
              name: "2014",
              data: [48.63, 47.83, 59.47, 49.11, 50.94, 45.20]
            },
            {
              name: '2015',
              data: [48.59, 47.83, 59.59, 49.19, 51.54, 45.83]
            },
            { name: "2016",
              data: [48.53, 47.77, 62.51, 49.28, 50.96, 46.17]
            },
            {
              name: '2017',
              data: [48.55, 47.68, 64.66, 49.37, 51.10, 46.32]
            }
          ],
          chartOptions_swiss2: {
            colors:["#956013","#3C5A0F", "#FFC300","#0069B4","#A8322D"],
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              },
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
            tooltip: {
              y: [
                {
                  title: {
                    formatter: function (val) {
                      return val + " %"
                    }
                  }
                },
                {
                  title: {
                    formatter: function (val) {
                      return val + " %"
                    }
                  }
                },
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