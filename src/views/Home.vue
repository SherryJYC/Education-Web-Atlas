<template>
  <div class="home">
    <!-- Statement1 -->
    <Statement1/>
    <!-- Questions -->
    <blockquote class="blockquote normal-text block startquote">
      Education is essential as a life-long experience. One of the most important parts is the school education.
      In this atlas, we will go through the current situation, possible reasons behind, and future trends of education.
      First of all, let us explore together the current situation of education from two aspects of <mark><b>global accessibility</b></mark> and <mark><b>gender accessibility</b></mark>.
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
          <b>Accessibility to education is imbalanced <br/><br/>
            by country<br/>
          by gender<br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>
    

    <!-- Global Map1 -->
    <h2 class="subheader-text"><b>Education Accessibility in Different Countries</b></h2>
    <b-card class="normal-text block startquote">
      <mark><b>Gross Enrollment Ratio (GER)</b></mark> is chosen to assess global accessibility. It is defined as the total enrollment within a country in a specific level of education, regardless of age, 
      expressed as a percentage of the population in the official age group corresponding to this level of education. The choropleth maps from 2014 to 2018 at four educational
      levels, primary, lower secondary, upper secondary and tertiary shown below demonstatre the situation of global accessibility.
    </b-card>
    <smart-widget class="globalmap">
    <div class="layout-center">
      <GlobalMap1/>
    </div>
    </smart-widget>
    <b-card class="normal-text block startquote">
      We consider GER around 100% (95% - 105%) to be the optimal cases. A low GER means inadequate opportunities to be enrolled in school education. GER can be over 100% 
      as it includes students who exceed the official age group. For instance, students repeating a grade will be enrolled late and students who advance quickly will be younger than their classmates.
      Since the latter case is a low-possibility event. We consider a high GER happens when students are enrolled late. <br/>
      <br/>As shown in the map, in specific regions of South America and Africa, GER is either much lower than 95% or much higher than 105%. It shows that 
        educational opportunities are low there, further proves the unequal education worldwid. Also, it is found that the performance is quite different among different levels. The enrollment ratio at the tertiary level is obviously lower than 
        the other three levels almost for all countries.
    </b-card>

    <!-- Global Map2 -->
    <h2 class="subheader-text"><b>Education Accessibility of Different Genders</b></h2>
    <b-card class="normal-text block startquote">
      <mark><b>Gender Parity Index (GPI)</b></mark> is used to evaluate gender accessibility. It is calculated as the quotient of the number 
      of females by the number of males enrolled in a given stage of education. A GPI equal to 1 indicates parity between females and males. 
      GPI value &lt; 1 indicates a disparity in favor of males and a value &gt; 1 in favor of females. Similarly, the choropleth maps from 2014 to 2018 
      at four educational levels are created to show the situation of gender accessibility.
    </b-card>
    <smart-widget class="globalmap">
    <div class="layout-center">
      <GlobalMap2/>
    </div>
    </smart-widget>
    <b-card class="normal-text block startquote">
      A GPI between 0.97 and 1.03 indicates parity between the genders by UNESCO. A GPI below 0.97 indicates a disparity in favor of males. 
      A GPI above 1.03 indicates a disparity in favor of females.<br/>
    <br/>From the overviews at four levels, we can see most countries reach gender parity at the primary level while least countries reach
      equality at the tertiary level. Although primary level performs best worldwide, some countries in Arica still do not reach gender parity. 
      Plus, at the tertiary level, most countries are in favor of females.
  </b-card>

    <v-divider/>
    <!-- Reasons -->
    <blockquote class="blockquote normal-text block">
      After exploration about the current situation, it raises our interest why this would happen.
      In the second part, three chosen perspectives, <b>the educational expenditure by nation and by family</b>, 
      <b>educational resources distribution</b>, <b>relationship between the adolescent birth rate and GPI</b>
      are presented to explore the possible reasons behind unequal education.
  </blockquote>
   <v-divider/>
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
        <h4 class="subheading subtitle-text"><b>Education is expensive and a heavy burden to a family in some regions.<br/>
          High-quality education resources are distribued unevenly worldwide.<br/><br/>
          The above altogether make the competitions in some regions much more severe than others. <br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>

 
    <h2 class="subheader-text"><b>Expensive Education</b></h2>
    <b-card class="normal-text block">
      <mark><b>The investment of education is mainly from the national investmant and familay investment.</b></mark> In the following choropleth maps, 
      the proportion of Gross Dometic Product (GDP) devoted to education in 2016 is used to show education investment in Western Europe and
      Eastern Asia. The benchmark is suggested by UN to allocate 4% to 6% of GDP to education. <br/>
      <br/>Further, the annual family expenditure of one parent on education (including
       pre-primary to tertiary level) for one child is ploted against the average annual salary in this country.
    </b-card>
    <b-card>
    <div class="layout-center">
      <Reason1/>
    </div>
    </b-card>
    <b-card class="normal-text block">
        While looking at the plot of family expenditure, education is quite costly
        in some chosen regions, especially when compared with the average salary. Comparing family expenditure
        and average salary proves education can be a burden for a normal family. For instance, in China, 
        the family does not have a high average salary compared to other regions, but they devote a lot to education. 
        The large variance between regions also depends on different contexts.<br/>
        <br/>To conclude, the nation has devoted the expenditure as suggested, while the family still affords or even 
        suffers a lot since high-quality education is expensive in some regions.
    </b-card>


    <h2 class="subheader-text"><b>Imbalanced Education Resources</b></h2>
    <b-card class="normal-text block">
      <mark><b>Tertiary education in Switzerland and China is focused here.</b></mark>The GER at the tertiary level of both countries 
      between 2013 and 2017 is plotted to show imbalance. Besides, the entrance rate to top 200 universities given 
      by Times in 2020 are given for more insight.
    </b-card>
    <b-card>
    <div class="layout-center">
      <Reason2/>
    </div>
    </b-card>


    <h2 class="subheader-text"><b>Gender Inequality</b></h2>
    <smart-widget>
    <div class="layout-center">
      <Reason3/>
    </div>
    </smart-widget>

    <v-divider/>
    <!-- Reasons -->
    <blockquote class="blockquote normal-text block">
      Last but not least, we are interested in how equality education would evolve in the future, and if the 
      future trends would help to achieve equality education. We will explore the future trends of education
       in the third part from the aspects of <b>online learning</b> and <b>female performances</b>.
  </blockquote>
   <v-divider/>
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
        <h4 class="subheading subtitle-text"><b>
          Online education is prospering and will continue to this trend in the future.<br/><br/>
          Gender parity is not reached yet at most of the levels worldwide. <br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>

    <!-- Trend1 -->
    <h2 class="subheader-text"><b>Online Education: the Focus of Market</b></h2>
    <b-card class="normal-text block">
      The fundings to the EdTech Unicorns from 2014 to 2019 are plotted below to show the changes along
      time. Plus, the exact EdTch companies in 2019 are given by country in the donut chart to show details of companies. 
    </b-card>
    <smart-widget>
    <div class="layout-center">
      <Trend1/>
    </div>
    </smart-widget>

    <!-- Trend2 -->
    <h2 class="subheader-text"><b>Increasing Female Enrollment</b></h2>
    <b-card class="normal-text block">
      To learn the performances on female education worldwide, the percentage of global average female enrollment at different levels
      in 2017 is plotted below. Switzerland and China are further chosen to make comparisons by the radar chart and the 
      time series line chart.
    </b-card>
    <smart-widget>
    <div class="layout-center">
      <Trend2/>
    </div>
    </smart-widget>


  <b-card title="Summary" class="blockquote normal-text block">
    <br/>
    In this atlas, we first explored the current situation of global and gender accessibility. Education is unevenly distributed 
    by country and by gender from the overview. <br/>
    <br/>
    Then, the possible reasons behind the phenomena are analyzed from 
    three aspects of nation vs. family expenditure, educational resources, and the adolescent 
    birth ratio to females. We concluded that education is quite expensive and education resources are sparse in some 
    regions. <br/>
    <br/>
    Eventually, the future trends of education are analyzed from the aspects of online learning and female 
    enrollments. The prosperity of online learning shows us a bright future to reach equality education on one day. For 
    the developments of gender parity, although there are more female students enrolled in tertiary education,
    enrollment ratio at the Ph.D. level is quite low. Females should also be given more emphasis at this level in the future. 
  </b-card>

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
.startquote{
  padding:20px;
}
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
