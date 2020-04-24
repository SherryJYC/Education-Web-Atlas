<template>
  <div class="home">

    <!-- Statement1 -->
    <Statement1/>
    <!-- Questions -->
    <blockquote class="blockquote normal-text block">
      Education is essential, and in Sustationable Development Goal from United Nation...
      In this atlas, we would explore the current situation of education from <b>global accessibility</b> and <b>gender</b> aspects
    </blockquote>
    
    <b-card class="title-text">
      <b-card-header>
        <h2><b> How is the global situation of education?</b></h2>
      </b-card-header>
    </b-card>
    <v-parallax
    dark
    src="../assets/img/title_img.jpg"
    height="300"
  >
  <v-row/>
    <v-row
      align="left"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h4 class="subheading subtitle-text"><b>To assess the global situation of equal education, two factors will be used:<br/>
          <br/>Global Gross Enrollment Ratio <br/>
          Gender Parity Index 
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>
    

    <!-- Global Map1 -->
    <smart-widget title="Global Gross Enrollment Ratio">
    <div class="layout-center">
      <GlobalMap1/>
    </div>
    </smart-widget>

    <!-- Global Map2 -->
    <smart-widget title="Global Gender Parity Index">
    <div class="layout-center">
      <GlobalMap2/>
    </div>
    </smart-widget>
    

    <!-- Reasons -->

    <b-card class="title-text">
      <b-card-header>
        <h2><b> What are the reasons behind inequality of education?</b></h2>
      </b-card-header>
    </b-card>

    <v-parallax
    dark
    src="../assets/img/title_img.jpg"
    height="300"
  >
  <v-row/>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h4 class="subheading subtitle-text"><b>There are three possible reasons:<br/><br/>
          Education is expensive <br/>
          Young girls devote to family at an early stage <br/>
          Imbalanced education resources in different regions <br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>

    

    <smart-widget title="Expensive education">
    <div class="layout-center">
      <Reason1/>
    </div>
    </smart-widget>

    <smart-widget title="Gender inequality of education">
    <div class="layout-center">
      <Reason2/>
    </div>
    </smart-widget>

    <smart-widget title="Imbalanced education resources">
    <div class="layout-center">
      <Reason3/>
    </div>
    </smart-widget>

   <b-card class="title-text">
      <b-card-header>
        <h2><b> What is the current trend of education </b></h2>
      </b-card-header>
    </b-card>

    <v-parallax
    dark
    src="../assets/img/title_img.jpg"
    height="300"
  >
  <v-row/>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h4 class="subheading subtitle-text"><b>Possible future trends of education:<br/><br/>
          Education becomes the focus of market <br/>
          More females have enrolled in education <br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>

    <!-- Trend1 -->
    <smart-widget title="Education becomes the focus of market">
    <div class="layout-center">
      <Trend1/>
    </div>
    </smart-widget>
    <!-- Trend2 -->
    <!-- Trend1 -->
    <smart-widget title="Increasing trend for female enrollment">
    <div class="layout-center">
      <Trend2/>
    </div>
    </smart-widget>
    <v-divider/>
    
    <!-- Summary -->
    <Summary/>

  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Statement1 from '../components/Statements/Statement1'
//import Questions from '../components/Statements/Questions'
import GlobalMap1 from '../components/GlobalMap/GlobalMap1'
import GlobalMap2 from '../components/GlobalMap/GlobalMap2'
import Reason1 from '../components/Reasons/Reason1'
import Reason2 from '../components/Reasons/Reason2'
import Reason3 from '../components/Reasons/Reason3'
import Trend1 from '../components/Trend/Trend1'
import Trend2 from '../components/Trend/Trend2'
import Summary from '../components/Statements/Summary'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


export default {
  name: 'Home',
  components: {
    Statement1,
    // Questions,
    GlobalMap1,
    GlobalMap2,
    Reason1,
    Reason2,
    Reason3,
    Trend1,
    Trend2,
    Summary,
  }
}
</script>

<style scoped>
.normal-text {
  text-align: left;
  padding-left: 5em;
  padding-right: 5em;
}
.title-text {
  color: white;
  background-color:  #A8322D;
}
.subtitle-text{
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000;
}
.block{
 margin: 10px;
}
</style>>
