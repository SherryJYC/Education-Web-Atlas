<template>
<div id="app">

  <!-- Tabs control -->
  <v-app id="inspire">
    <v-card>
      <v-tabs
        v-model="tab"
        background-color="primary"
        fixed-tabs
        dark
      >
        <v-tab
          v-for="item in items"
          :key="item.tab"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
          <v-card>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>

  <!-- Chropleth map -->
  <svg ref="svg" height="300" width="500">
    <path
      v-for="state in stateData"
      :key="state.feature.id"
      :d="pathGenerator(state.feature)"
      :style="{
        fill: state.color,
        stroke: 'darkslategray'
      }"
    />
    <circle
      v-for="city in cityData"
      :key="city.city"
      :cx="city.x"
      :cy="city.y"
      :r="city.size"
      :style="{
        fill: city.color,
        stroke: 'darkslategray',
        opacity: 0.8
      }"
    ></circle>
  </svg>

</div>
</template>

<script>
import * as d3 from "d3";
// import axios from "axios";
import {geojson} from '../../assets/countries_smallv';
import {GERPrimary2018} from '../../assets/GER/GERPrimary2018';

// import {happiestCities} from '../../assets/happiestCities';
// import {happiestStates} from '../../assets/happiestStates';

export default {
  data(){
    return{
      geojson,
      GERPrimary2018,
      // statesJson: null,
      // happiestCities, // Shown above and in JSFiddle
      // happiestStates, // Shown above and in JSFiddle

      tab: null,
      items: [
        { tab: 'Primary', content: "Tab 2" },
        { tab: 'Lower secondary', content: 'Tab 2 Content' },
        { tab: 'Upper secondary', content: 'Tab 3 Content' },
        { tab: 'Tertinary', content: 'Tab 4 Content' },
      ],
    }
  },

  computed: {
    // Typical projection for showing all states scaled and positioned appropriately
    projection () {
      return d3.geoMercator().scale(600).translate([250, 150])
    },

    // Function for converting GPS coordinates into path coordinates
    pathGenerator () {
      return d3.geoPath().projection(this.projection)
    },

    // Combine the states GeoJSON with a rank-based gradient
    stateData () {
      return this.geojson ? this.geojson.features.map(feature => {
        let state = this.GERPrimary2018.find(state => state.Country === feature.properties.name)
        return {
          feature,
          color: this.stateColor(state.Value)
        }
      }) : []
    },

    // Construct the city data to be used by the circle elements
    // cityData () {
    //   return this.happiestCities.map(city => {
    //     return {
    //       city: city.city,
    //       x: this.projection([city.lng, city.lat])[0],
    //       y: this.projection([city.lng, city.lat])[1],
    //       color: this.cityColor(city.rank),
    //       size: this.citySize(city.rank)
    //     }
    //   })
    // },

    // Interpolate from red to green in the domain 50 to 1 (our ranking)
    stateColor () {
      return d3.scaleSequential().domain([Math.max(GERPrimary2018.Value), Math.min(GERPrimary2018.Value)]).interpolator(d3.interpolateRdYlGn);
    },

    // Interpolate between two green colors for the happiest cities
    // cityColor () {
    //   return d3.scaleLinear().domain([20, 1]).range(['#32a852', '#10732b'])
    // },

    // Interpolate between two sizes for the happiest cities
    // citySize () {
    //   return d3.scaleLinear().domain([20, 1]).range([5, 15])
    // }
  },

  // On creation, get the GeoJSON
  // created: function () {
  //   axios.get('https://api.github.com/gists/e0d1b7950ced31369c903bed0cead7b1')
  //     .then(response => {
  //     this.statesJson = JSON.parse(response.data.files['us_features.json'].content)
  //   })
  //     .catch(error => {
  //     console.log(error)
  //   })
  // }
}
</script>

<style>

</style>