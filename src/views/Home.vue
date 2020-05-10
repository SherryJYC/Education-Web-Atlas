<template>
  <div class="home">
    <!-- Statement1 -->
    <Statement1/>
    <!-- Questions -->
    <blockquote class="blockquote normal-text block">
      Education is essential as a life-long experience. One of the most important parts is the school education.
      In this atlas, we will go through the current situation, possible reasons behind, and future trends of education.
      First of all, let us explore together the current situation of education from two aspects of <b>global accessibility</b> and <b>gender accessibility</b>.
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
        <h4 class="subheading subtitle-text">
          <b>Accessibility to school education is different by country,<br/>
          by educational level,<br/>
          by gender.<br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>
    

    <!-- Global Map1 -->
    <h2 class="subheader-text"><b>Global Accessibility</b></h2>
    <blockquote class="blockquote normal-text block">
      Gross Enrollment Ratio (GER) is chosen to assess global accessibility. It is defined as the total enrollment within a country in a specific level of education, regardless of age, 
      expressed as a percentage of the population in the official age group corresponding to this level of education. The choropleth maps from 2014 to 2018 at four educational
      levels, primary, lower secondary, upper secondary and tertiary are created to show the situation of global accessibility.
    </blockquote>
    <smart-widget class="globalmap">
    <div class="layout-center">
      <GlobalMap1/>
    </div>
    </smart-widget>
    <blockquote class="blockquote normal-text block">
      <p>We consider GER around 100% (95% - 105%) to be the optimal cases. A low GER means inadequate opportunities to be enrolled in school education. GER can be over 100% 
      as it includes students who exceed the official age group. For instance, students repeating a grade will be enrolled late and students who advance quickly will be younger than their classmates.
      Since the latter case is a low-possibility event. We consider a high GER happens when students are enrolled late. </p>
      <p>As shown in the map, in specific regions of South America and Africa, GER is either much lower than 95% or much higher than 105%. It shows that 
        educational opportunities are low there, further proves the unequal education worldwide. Also, it is found that the performance is quite different among different levels. The enrollment ratio at the tertiary level is obviously lower than 
        the other three levels almost for all countries.</p>
    </blockquote>

    <!-- Global Map2 -->
    <h2 class="subheader-text"><b>Gender Accessibility</b></h2>
    <blockquote class="blockquote normal-text block">
      Gender Parity Index (GPI) is used to evaluate gender accessibility. It is calculated as the quotient of the number 
      of females by the number of males enrolled in a given stage of education. A GPI equal to 1 indicates parity between females and males. 
      GPI value &lt; 1 indicates a disparity in favor of males and a value &gt; 1 in favor of females. Similarly, the choropleth maps from 2014 to 2018 
      at four educational levels are created to show the situation of gender accessibility.
    </blockquote>
    <smart-widget class="globalmap">
    <div class="layout-center">
      <GlobalMap2/>
    </div>
    </smart-widget>
    <blockquote class="blockquote normal-text block">
    <p>A GPI between 0.97 and 1.03 indicates parity between the genders by UNESCO. A GPI below 0.97 indicates a disparity in favor of males. 
      A GPI above 1.03 indicates a disparity in favor of females.</p>
    <p>From the overviews at four levels, we can see most countries reach gender parity at the primary level while least countries reach
      equality at the tertiary level. Although primary level performs best worldwide, some countries in Arica still do not reach gender parity. 
      Plus, at the tertiary level, most countries are in favor of females.</p>
    <p>In the second part, three chosen perspectives, <b>the educational expenditure by nation and by family</b>, 
    <b>educational resources distribution</b>, <b>relationship between the adolescent birth rate and GPI</b>
    are presented to explore the possible reasons behind unequal education.
    </p>
  </blockquote>


    <!-- Reasons -->
    <blockquote class="blockquote normal-text block">
      In the second part, three chosen perspectives, <b>the educational expenditure by nation and by family</b>, 
      <b>educational resources distribution</b>, <b>relationship between the adolescent birth rate and GPI</b>
      are presented to explore the possible reasons behind unequal education.
  </blockquote>
    <b-card class="title-text" id="p2">
      <b-card-header>
        <h2><b> What are the reasons behind the education inequality?</b></h2>
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

 
    <h2 class="subheader-text"><b>Expensive Education</b></h2>
    <!-- <blockquote class="blockquote normal-text block">
      The proportion of Gross Dometic Product (GDP) devoted to education in 2016 is used to create the choropleth map for chosen countries.
       The benchmark is suggested by the UN to allocate 4% to 6% of GDP to education. Further, the family expenditure on education from 
       pre-primary to tertiary education (对吗 with respect to the yearly (对吗 average salary is plotted.
    </blockquote> -->
    <smart-widget>
    <div class="layout-center">
      <Reason1/>
    </div>
    </smart-widget>
    <!-- <blockquote class="blockquote normal-text block">
        According to the suggested benchmark, most of the chosen countries reach the given educational commitment. Besides, countries in North
        Europe performs quite well with around 7% GDP's devotion or even higher. While looking from the plot, the education is quite costly
        in some chosen countries/regions, especially when compared with the average salary. 工资是年平均工资吗 再总结一下哪些国家对教育的投入是
        年平均工资的几倍 To conclude, the nation has devoted the expenditure as suggested, while the family still affords or even 
        suffers a lot since high-quality education is expensive in some regions.
  </blockquote> -->


    <h2 class="subheader-text"><b>Imbalanced Education Resources</b></h2>
    <!-- <blockquote class="blockquote normal-text block">
      Tertiary education in Switzerland and China is focused here. The entrance rate to top 200 universities given by Times in 2020 are 
      given on the figure. The GER at the tertiary level between 2013 and 2017 is plotted.
    </blockquote> -->
    <smart-widget>
    <div class="layout-center">
      <Reason2/>
    </div>
    </smart-widget>


    <h2 class="subheader-text"><b>Gender Inequality</b></h2>
    <smart-widget>
    <div class="layout-center">
      <Reason3/>
    </div>
    </smart-widget>

   <b-card class="title-text" id="p3">
      <b-card-header>
        <h2><b> What are the future trends of education?</b></h2>
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
    <h2 class="subheader-text"><b>Education: the Focus of Market</b></h2>
    <smart-widget>
    <div class="layout-center">
      <Trend1/>
    </div>
    </smart-widget>

    <!-- Trend2 -->
    <h2 class="subheader-text"><b>Increasing Female Enrollment</b></h2>
    <smart-widget>
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
.globalmap{
  height: 600px;
}
.normal-text {
  text-align: left;
  padding-left: 1em;
  padding-right: 1em;
}
.title-text {
  color: white;
  background-color:  #A8322D;
}
.subtitle-text{
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000;
}
.subheader-text{
text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000;
color:white;
background-color: lightgrey;
padding: 10px;
margin-top:5px;
border-radius: 25px;
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
