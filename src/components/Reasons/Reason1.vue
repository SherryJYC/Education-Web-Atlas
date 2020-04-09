<template>
<div>
<!-- choropleth map of national investment in education (compare western europe and eastern asia)-->
  <l-map 
  :center="[50.8182, 40.2275]" 
  :zoom="3" 
  style="height: 500px;" 
  :options="mapOptions">
    <l-choropleth-layer 
      :data="nationalInvestData" 
      titleKey="time" 
      idKey="country_name" 
      :value="value" 
      :extraValues="extraValues" 
      geojsonIdKey="ADMIN" 
      :geojson="geojson" 
      :colorScale="colorScale">
        <template slot-scope="props">
          <l-info-control 
            :item="props.currentItem" 
            :unit="props.unit" 
            title="National Investment" 
            placeholder="Hover over a country"/>
          <l-reference-chart 
            title="National Investment" 
            :colorScale="colorScale" 
            :min="props.min" 
            :max="props.max" 
            position="topright"/>
        </template>
    </l-choropleth-layer>
</l-map>
<!-- chart of average salary VS family expenditure on education -->
<apexchart type="bar" height="440" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap} from 'vue2-leaflet';
import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth';
import {geojson} from '../../assets/countries';
import {nationalInvestData} from '../../assets/WEInvest';
import VueApexCharts from 'vue-apexcharts';

export default {
    components: { 
    LMap,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer,
    apexchart: VueApexCharts
  },
  data() {
    return {
      geojson,
      nationalInvestData,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "invest",
        metric: "% GDP"
      },
      extraValues: [{
        key: "country_name",
        metric: ""
      }],
      mapOptions: {
        attributionControl: false
      },
      currentStrokeColor: '3d3213',
      type: "stackedbar2d",
      width: "100%",
      height: "100%",
      dataFormat: "json",
      series: [{
            name: 'Family Expenditure',
            data: [132161,99378,70939,58464,42892,36402,25479,24862,22812,22602,18909,18422,16863,16708
            ]
          },
          {
            name: 'Average Salary',
            data: [-50300,-40880,-59770,-63080,-9460,-53230,-10590,-41770,-9180,-44940,-2020,-3840,-2800,-41080
            ]
          }
          ],
          chartOptions: {
            chart: {
              type: 'bar',
              height: 440,
              stacked: true
            },
            colors: ['#008FFB', '#FF4560'],
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '80%',
            
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1,
              colors: ["#fff"]
            },
            
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            yaxis: {
              min: -132200,
              max: 132200,
              title: {
                // text: 'country',
              },
            },
            tooltip: {
              shared: false,
              x: {
                formatter: function (val) {
                  return val
                }
              },
              y: {
                formatter: function (val) {
                  return "$ "+Math.abs(val)
                }
              }
            },
            title: {
              text: 'Family Expenditure on Education VS Average Salary'
            },
            xaxis: {
              categories: ['HK', 'UAE','Singapore','USA','China','Australia','Malaysia','UK','Mexico','Canada','India',
              'Indonesia','Egypt','France'
              ],
              title: {
                text: '$ USD'
              },
              labels: {
                formatter: function (val) {
                  return "$ " + Math.abs(Math.round(val)) 
                }
              }
            },
          },
          
    }
  },
}
</script>


<style>

</style>