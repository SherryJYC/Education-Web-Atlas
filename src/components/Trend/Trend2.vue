<template>
  <div>
    <b-card-group deck>
      <b-card>
        <!-- chart of global female enrollment 2017  -->
        <apexchart type="line" height="350" :options="chartOptions1" :series="series1"></apexchart>
      </b-card>
    </b-card-group>

    <b-card class="text-left">
        As from the line chart, fewer females are enrolled at the primary, secondary and phd levels. In contrast, more females 
        devote to bachelor and master levels. It is approximately half and a half at the short-cycle tertiary level. To further check the 
        gender parity, GPI is returned for each level as <mark>0.94, 0.95, 1.04, 1.13, 1.12, 0.81</mark>. Observed from GPI, the world is 
        close to the gender parity at the short-cycle tertiary level in 2017. Female is obviously more engaged in the school education at 
        the bachelor and master level; however, it sharply decreases at the Ph.D. level. Speaking of the primary and secondary level, 
        which are provisioned to be free, publicly funded, and equitable quality by SDG 4, the world is more in favor of males on average.
    </b-card>

    <b-card-group deck>
      <b-card>
        <!-- radar chart of Swiss female enrollment 2017  -->
        <apexchart type="radar" height="400" :options="chartOptions_swiss1" :series="series_swiss1"></apexchart>
      </b-card>
      <b-card>
        <!-- radar chart of China female enrollment 2017  -->
        <apexchart type="radar" height="400" :options="chartOptions_china1" :series="series_china1"></apexchart>
      </b-card> 
    </b-card-group>

    <b-card class="text-left">
        Switzerland and China are further chosen to make comparisons with the global average female enrollment percentage 
        at different levels in 2017. From the radar chart, Switzerland has reached or is very close to the global average value 
        for females at the primary, secondary, master, and Ph.D. levels. The female enrollment rate is slightly far from the 
        global average at the bachelor level, but it is apparently ahead of the global average at the short-cycle tertiary level 
        by the value of 64%. For China, the female enrollment ratio is very close to or higher than the global average at primary, 
        secondary, short-cycle tertiary, and bachelor levels. While it starts to drop down at the master level, and even more reduction 
        at the Ph.D. level with around 40%. To compare these two countries, Switzerland has many more females enrolled at the short-cycle 
        tertiary level and more at the Ph.D. level. The following time series line chart gives concrete values at different levels in 
        Switzerland and China from 2013 to 2017. 
    </b-card>

    <b-card-group deck>
      <b-card>
        <!-- chart of Swiss female enrollment 2013-2017 timeseris -->
        <apexchart type="line" height="350" :options="chartOptions_swiss2" :series="series_swiss2"></apexchart>
      </b-card>
      <b-card>
        <!-- chart of China female enrollment 2013-2017 timeseris  -->
        <apexchart type="line" height="350" :options="chartOptions_china2" :series="series_china2"></apexchart>
      </b-card> 
    </b-card-group>

    <b-card class="text-left">
        From the graph, first, at the primary and secondary levels, both countries do not show obvious changes within the five years, 
        and they still do not reach gender parity at these two stages. Second, the same that no noticeable changes in Switzerland at 
        the bachelor and master levels, but they distribute around 50%. At the Ph.D. level, it rises to 46.32% in 2017 by around 1% 
        increase within the five years. For these three levels in China, they all increase by around 2% within five years. The bachelor 
        level in China is more in favor of females in 2017. However, the female enrollment ratio begins to decrease at the master level 
        to 47%. It continues to decrease to 37% at the Ph.D. level. Thirdly, Switzerland is more in favor of females at the short-cycle 
        tertiary level already in 2013 with the ratio of 58% and this trend continues to increase within five years to 64% in 2017. 
        But meanwhile, there is no obvious change at the bachelor level. So we can not conclude there are certain relationships between 
        the short-cycle tertiary level and bachelor level. In the other sentence, although more females enter the short-cycle tertiary 
        level, which is practically based, occupationally-specific and prepare students to enter the labor market and may also provide 
        a pathway to other tertiary education programs, it does not affect females to enter the bachelor level.
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
                show: true
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
              min: 40,
              max: 60
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
              toolbar: {
                show: true 
              }
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
                show: true 
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
              toolbar: {
                show: true 
              }
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
                show: true 
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