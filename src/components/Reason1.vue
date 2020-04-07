<template>
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
</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap} from 'vue2-leaflet';
import { InfoControl, ReferenceChart, ChoroplethLayer } from 'vue-choropleth';
import {geojson} from '../assets/countries';
import {nationalInvestData} from '../assets/WEInvest';

export default {
    components: { 
    LMap,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer 
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
      currentStrokeColor: '3d3213'
    }
  },
}
</script>


<style>

</style>