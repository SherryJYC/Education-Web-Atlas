<template>
<div id="app">

  <!-- Chropleth map -->
  <!-- <l-map 
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
  </l-map>   -->

<div class="map-overlay top">
    <div class="map-overlay-inner">
        <h2>Gross Enrollment Ratio 2014-2018</h2>
        <label id="year"></label>
        <input id="slider" type="range" min="0" max="4" step="1" value="0" />
    </div>
    <div class="map-overlay-inner">
        <div id="legend" class="legend">
            <div class="bar"></div>
            <div>Year</div>
        </div>
    </div>
</div>

<MglMap 
  :accessToken="accessToken" 
  :mapStyle="mapStyle"
  :center="[50, 10]" 
  :zoom="1.5" 
  style="height: 500px;" 
>

  <MglNavigationControl position="top-right"/>
  <MglGeolocateControl position="top-right" />
</Mglmap>
  <!-- <MglMap
    :accessToken="accessToken"
    :mapStyle.sync="mapStyle"
  >
    <MglNavigationControl position="top-right"/>
    <MglGeolocateControl position="top-right" />
  </Mglmap> -->

</div>
</template>

<script>
// import 'leaflet/dist/leaflet.css';
// import {LMap} from 'vue2-leaflet';
// import {InfoControl, ReferenceChart, ChoroplethLayer} from 'vue-choropleth';
import {geojson} from '../../assets/json/countries_smallv';
import {GERPrimary2018} from '../../assets/json/global1';

import Mapbox from "mapbox-gl";
import {MglMap,MglNavigationControl,MglGeolocateControl} from "vue-mapbox";

export default {

  components: { 
    // LMap,
    // 'l-info-control': InfoControl, 
    // 'l-reference-chart': ReferenceChart, 
    // 'l-choropleth-layer': ChoroplethLayer
    MglMap,
    MglNavigationControl,
    MglGeolocateControl
  },

  data() {
    return {
      geojson,
      GERPrimary2018,
      
      accessToken: 'pk.eyJ1IjoiaGFvanVuOTYxMiIsImEiOiJjazlxNmNrcm0wMDRlM2xxa3E2bThldzZ5In0.L0F2hn-gnAvelHTUiOX0_w', // your access token. Needed if you using Mapbox maps
      mapStyle: 'mapbox://styles/mapbox/light-v10', // your map style

      // colorScale: ["#900C3F","#C70039", "#FF5733", "#FFC300"],
      // titleSetting: {
      //   text: 'Gender Parity Index in Primary Level'
      // },
      // value: {
      //   key: "Value",
      //   metric: "Gender Parity Index"
      // },
      // extraValues: [{
      //   key: "Country",
      //   metric: ""
      // }],
      // mapOptions: {
      //   attributionControl: false
      // }
    }
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },

  methods: {
    // function filterBy(month) {
    // var filters = ['==', 'month', month];
    // map.setFilter('earthquake-circles', filters);
    // map.setFilter('earthquake-labels', filters);

    // // Set the label to the month
    // document.getElementById('month').textContent = months[month];
    // } 

    // // Set filter to first month of the year
    // // 0 = January
    // filterBy(0);

    // document
    //     .getElementById('slider')
    //     .addEventListener('input', function(e) {
    //         var month = parseInt(e.target.value, 10);
    //         filterBy(month);
    //     });
  }
}
</script>

<style>
  /* .map-overlay {
      font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
      position: absolute;
      width: 25%;
      top: 0;
      left: 0;
      padding: 10px;
  }

  .map-overlay .map-overlay-inner {
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      padding: 10px;
      margin-bottom: 10px;
  }

  .map-overlay h2 {
      line-height: 24px;
      display: block;
      margin: 0 0 10px;
  }

  .map-overlay .legend .bar {
      height: 10px;
      width: 100%;
      background: linear-gradient(to right, #fca107, #7f3121);
  }

  .map-overlay input {
      background-color: transparent;
      display: inline-block;
      width: 100%;
      position: relative;
      margin: 0;
      cursor: ew-resize;
  } */

</style>