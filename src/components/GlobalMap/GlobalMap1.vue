<template>
<div id="app">

<!-- Tabs control -->
<!-- <v-card>
  <v-tabs
    background-color="white"
    color="deep-purple accent-4"
    left
  >
    <v-tab>Primary</v-tab>
    <v-tab>Lower Secondary</v-tab>
    <v-tab>Upper Scondary</v-tab>
    <v-tab>Tertinary</v-tab>
    <v-tab-item :key="1"><v-stepper v-model="e1"></v-stepper></v-tab-item>
    <v-tab-item :key="2"><v-stepper v-model="e2"></v-stepper></v-tab-item>
  </v-tabs>
</v-card> -->

<!-- Stepper to switch between different years -->
<v-stepper v-model="e1">
  <v-stepper-header>
    <v-stepper-step :complete="e1" step="1">2014</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="2">2015</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="3">2016</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="4">2017</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="5">2018</v-stepper-step>
  </v-stepper-header>

  <v-stepper-items>
    <v-stepper-content step="1">
      <v-btn class="btn" @click="e1 = 2">Next Year</v-btn>        
      <!-- choropleth map -->
      <b-card>
        <l-map ref="mymap1"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERPrimary2014" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="2">
      <v-btn class="btn" @click="e1 = 1">Last Year</v-btn>
      <v-btn class="btn" @click="e1 = 3">Next Yaer</v-btn>        
      <!-- choropleth map -->
      <b-card>
        <l-map ref="mymap2"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERPrimary2015" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="3">
      <v-btn class="btn" @click="e1 = 2">Last Year</v-btn>
      <v-btn class="btn" @click="e1 = 4">Next Year</v-btn>       
      <!-- choropleth map -->
      <b-card>
        <l-map ref="mymap3"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERPrimary2016" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="4">
      <v-btn class="btn" @click="e1 = 3">Last Year</v-btn>
      <v-btn class="btn" @click="e1 = 5">Next Year</v-btn>        
      <!-- choropleth map -->
      <b-card>
        <l-map ref="mymap4"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERPrimary2017" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="5">
      <v-btn class="btn" @click="e1 = 4">Last Year</v-btn>        
      <!-- choropleth map -->
      <b-card>
        <l-map ref="mymap5"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERPrimary2018" 
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
      </b-card>

    </v-stepper-content>    

  </v-stepper-items>
</v-stepper>

<!-- <v-stepper v-model="e2">
  <v-stepper-header>
    <v-stepper-step :complete="e1" step="1">2014</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="2">2015</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="3">2016</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="4">2017</v-stepper-step>
    <v-divider></v-divider>
    <v-stepper-step :complete="e1" step="5">2018</v-stepper-step>
  </v-stepper-header>

  <v-stepper-items>
    <v-stepper-content step="1">
      <v-btn class="btn" @click="e1 = 2">Next Year</v-btn>        
      <b-card>
        <l-map ref="mymap1"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERLowersecondary2014" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="2">
      <v-btn class="btn" @click="e1 = 1">Last Year</v-btn>
      <v-btn class="btn" @click="e1 = 3">Next Yaer</v-btn>        
      <b-card>
        <l-map ref="mymap2"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERLowersecondary2015" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="3">
      <v-btn class="btn" @click="e1 = 2">Last Year</v-btn>
      <v-btn class="btn" @click="e1 = 4">Next Year</v-btn>       
      <b-card>
        <l-map ref="mymap3"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERLowersecondary2016" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="4">
      <v-btn class="btn" @click="e1 = 3">Last Year</v-btn>
      <v-btn class="btn" @click="e1 = 5">Next Year</v-btn>        
      <b-card>
        <l-map ref="mymap4"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERLowersecondary2017" 
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
      </b-card>

    </v-stepper-content>

    <v-stepper-content step="5">
      <v-btn class="btn" @click="e1 = 4">Last Year</v-btn>        
      <b-card>
        <l-map ref="mymap5"
        :center="[50, 10]" 
        :zoom="1.5" 
        style="height: 500px;" 
        :options="mapOptions">
          <l-choropleth-layer 
            :data="GERLowersecondary2018" 
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
      </b-card>

    </v-stepper-content>    

  </v-stepper-items>
</v-stepper> -->

</div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import {LMap} from 'vue2-leaflet';
import {InfoControl, ReferenceChart, ChoroplethLayer} from 'vue-choropleth';
import {geojson} from '../../assets/json/countries_smallv';
import {GERLowersecondary2014,GERLowersecondary2015,GERLowersecondary2016,GERLowersecondary2017,GERLowersecondary2018,
GERPrimary2014,GERPrimary2015,GERPrimary2016,GERPrimary2017,GERPrimary2018} from '../../assets/json/global1';

export default {
  components: { 
    'l-map': LMap,
    'l-info-control': InfoControl, 
    'l-reference-chart': ReferenceChart, 
    'l-choropleth-layer': ChoroplethLayer,
  },

  mounted() {  
    var map = null;

    switch (this.e1) {     
      case 1: map = this.$refs.mymap1;
        break;
      case 2: map = this.$refs.mymap2;
        break;
      case 3: map = this.$refs.mymap3;
        break;
      case 4: map = this.$refs.mymap4;
        break;
      case 5: map = this.$refs.mymap5;
        break;
    }

    this.$nextTick(() => map.mapObject._onResize());
  },

  data(){
    return{
      e1: 1,
      // e2: 1,
      // mymaps: ["mymap1","mymap2","mymap3","mymap4","mymap5"],
      geojson,
      GERPrimary2014,GERPrimary2015,GERPrimary2016,GERPrimary2017,GERPrimary2018,
      GERLowersecondary2014,GERLowersecondary2015,GERLowersecondary2016,GERLowersecondary2017,GERLowersecondary2018,
      colorScale: ["e7d090", "e9ae7b", "de7062"],
      value: {
        key: "Value",
        metric: ""
      },
      extraValues: [{
        key: "Country",
        metric: ""
      }],
      mapOptions: {
        attributionControl: false
      },   
    }
  },


}

</script>

<style>

</style>