<template>
<div id="app"> 
<!-- Title -->
  <v-container>
      <v-row
          align="center"
          justify="center"
        >
      <h4>Global Gender Parity Index </h4>
      </v-row>
  </v-container>

<!-- Create tabs to switch between four education levels -->

<!-- Choropleth map of Gender Parity Index by different education levels -->
  <l-map 
  :center="[50, 10]" 
  :zoom="1.5" 
  style="height: 500px;" 
  :options="mapOptions">
    <l-choropleth-layer 
      :data="GPIPrimary2018" 
      :title="titleSetting"
      titleKey="Time" 
      idKey="Country" 
      :value="value" 
      :extraValues="extraValues" 
      geojsonIdKey="name" 
      :geojson="geojson" 
      :colorScale="colorScale">
        <template slot-scope="props">
          <l-info-control 
            :item="props.currentItem" 
            :unit="props.unit" 
            title="Gender Parity Index" 
            placeholder="Hover over a country"/>
          <l-reference-chart 
            title="Gender Parity Index" 
            :colorScale="colorScale" 
            :min="props.min" 
            :max="props.max" 
            position="topright"/>
        </template>
    </l-choropleth-layer>
</l-map>

<!-- Pie chart  -->
<b-card-group deck>
  <b-card>
    <apexchart type="pie" width="500" :options="chartOptions" :series="series1"></apexchart>
  </b-card> 
  <b-card
    title="Definition"
    class="text-left"
  >
  <b-card-text> The gender parity index (GPI) is the ratio of the female to male net enrolment ratio for primary, secondary and tertiary education levels. It is calculated by dividing the female
    value for the indicator by the male value for the indicator. A GPI equal to 1 indicates parity between females and males. In general, a value &lt; 1 indicates disparity in favor of
    males and a value &gt; 1 in favor of females. Gender parity is defined as a GPI between 0.97 and 1.03.
  </b-card-text>
  </b-card>
</b-card-group>
</div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap} from 'vue2-leaflet';
import {InfoControl, ReferenceChart, ChoroplethLayer} from 'vue-choropleth';
import {geojson} from '../../assets/json/countries_smallv';
import {GPIPrimary2018} from '../../assets/GPI/GPIPrimary2018';
import VueApexCharts from 'vue-apexcharts';
// import {Tabs, Tab} from 'vue-tabs-component';

export default {
    components: { 
    LMap,
    // 'tabs': Tabs,
    // 'tab': Tab,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer,
    apexchart: VueApexCharts
  },
  data() {
    return {
      geojson,
      GPIPrimary2018,
      colorScale: ["#900C3F","#C70039", "#FF5733", "#FFC300"],
      titleSetting: {
        text: 'Gender Parity Index in Primary Level'
      },
      value: {
        key: "Value",
        metric: "Gender Parity Index"
      },
      extraValues: [{
        key: "Country",
        metric: ""
      }],
      mapOptions: {
        attributionControl: false
      }, 
      series1: [70,53],
      chartOptions: {
        chart: {
          type: 'pie'
        },
        title: {
          text: "How many countries reach the gender parity in 2018"
        },
        colors: ["#FFC300","#6F6F6E"],
        labels: ['Countries reach gender parity', 'Countries Not reach gender parity'],
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true,
          },
          legend: {
            verticalAlign: 'center',
          }
        }
      }  
        
    }
  }
}
</script>

<style>

</style>