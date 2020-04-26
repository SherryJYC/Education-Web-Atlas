<template>
  <div class="home">
    <!-- Statement1 -->
    <Statement1/>
    <!-- Questions -->
    <blockquote class="blockquote normal-text block">
      Education is essential, and in Sustationable Development Goal from United Nation...
      In this atlas, we would explore the current situation of education from <b>global accessibility</b> and <b>gender</b> aspects
    </blockquote>
    
    <b-card class="title-text" id="p1">
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

    <b-card class="title-text" id="p2">
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

   <b-card class="title-text" id="p3">
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

    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
      id="float_btn"
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          class="float_btn_item"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>widgets</v-icon>
        </v-btn>
        <br/>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
        v-scroll-to="'#p3'"
      >
        <v-icon>filter_3</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
        v-scroll-to="'#p2'"
      >
        <v-icon>filter_2</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        v-scroll-to="'#p1'"
      >
        <v-icon>filter_1</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
        @click="scrollToTop"
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>

    </v-speed-dial>
    
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

// let p2 = document.body.getElementById("p2");


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
  },
  data: () => ({
      direction: 'top',
      fab: false,
      fling: false,
      hover: true,
      tabs: null,
      top: false,
      right: true,
      bottom: true,
      left: false,
      transition: 'slide-y-reverse-transition',
    }),
    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { class: 'purple', icon: 'account_circle' }
          case 'two': return { class: 'red', icon: 'edit' }
          case 'three': return { class: 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      },
    },
    methods: { 
      scrollToTop() {
        window.scrollTo(0,0);
      }
    },
    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      },
    },
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
#float_btn {
  position: fixed;
  margin-bottom: 3em;
}
.float_btn_item{
  color:white;
}
</style>>
