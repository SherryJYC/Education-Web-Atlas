<template>
<div id="app"> 
<!-- Title -->
  <v-container>
      <v-row
          align="center"
          justify="center"
        >
      <h4>Global Gross Enrollment Ratio </h4>
      </v-row>
  </v-container>

<!-- Create tabs to switch between four education levels -->

<!-- Choropleth map of Gross Enrollment Ratio by different education levels -->
  <l-map 
  :center="[50, 10]" 
  :zoom="1.5" 
  style="height: 500px;" 
  :options="mapOptions">
    <l-choropleth-layer 
      :data="GERPrimary2018" 
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
            title="Gross Enrollment Ratio" 
            placeholder="Hover over a country"/>
          <l-reference-chart 
            title="Gross Enrollment Ratio" 
            :colorScale="colorScale" 
            :min="props.min" 
            :max="props.max" 
            position="topright"/>
        </template>
    </l-choropleth-layer>
</l-map>
</div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap} from 'vue2-leaflet';
import {InfoControl, ReferenceChart, ChoroplethLayer} from 'vue-choropleth';
import {geojson} from '../../assets/countries_smallv';
import {GERPrimary2018} from '../../assets/GER/GERPrimary2018';
// import {Tabs, Tab} from 'vue-tabs-component';

export default {
  components: { 
    LMap,
    // 'tabs': Tabs,
    // 'tab': Tab,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer
  },
  data() {
    return {
      geojson,
      GERPrimary2018,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      titleSetting: {
        text: 'Gross Enrollment Ratio in Primary Level'
      },
      value: {
        key: "Value",
        metric: "Gross Enrollment Ratio"
      },
      extraValues: [{
        key: "Country",
        metric: ""
      }],
      mapOptions: {
        attributionControl: false
      }     
    }
  }
}
</script>

<style>

</style>