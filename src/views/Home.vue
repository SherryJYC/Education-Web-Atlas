<template>
  <div class="home">
    <!-- Statement1 -->
    <Statement1/>
    
    <Menu/>

    <blockquote class="blockquote normal-text block startquote">
      Education is essential as a life-long experience. One of the most important parts is the school education.
      In this atlas, we will go through the current situation, possible reasons behind, and future trends of equality school education.
      First of all, let us explore together the current situation from two aspects of <b>global accessibility</b>
      and <b>gender accessibility</b>.
    </blockquote>
    
    <b-card class="title-text" id="p1">
      <b-card-header>
        <h2><b> Part 1 - How is the global situation of education?</b></h2>
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
          <b>Accessibility to education is imbalanced<br/><br/>
            by country<br/>
          by gender<br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>
    

    <!-- Global Map1 -->
    <h2 class="subheader-text"><b>Education Accessibility in Different Countries</b></h2>
    <b-card border-variant="light" class="normal-text block startquote">
      <mark>Gross Enrollment Ratio (GER)</mark> is chosen to assess global accessibility. It is defined as the total enrollment 
      within a country in a specific level of education, regardless of age, expressed as a percentage of the population in the official
       age group corresponding to this level of education. 
       <!-- The choropleth maps from 2014 to 2018 at four educational
      levels, primary, lower secondary, upper secondary and tertiary shown below demonstatre the situation of global accessibility. -->
    </b-card>
    <b-card border-variant="light" class="globalmap">
    <div class="layout-center">
      <GlobalMap1/>
    </div>
    </b-card>
    <b-card border-variant="light" class="normal-text block startquote">
      <!-- We consider GER around 100% (95% - 105%) to be the optimal cases. -->
      A low GER means inadequate opportunities to be enrolled in school. While GER can be over 100% 
      as it includes students who exceed the official age group. For instance, students repeating a grade or 
      advancing quickly are not within the age group.
      Since the latter is a low-possibility event, we consider a high GER happens when students are enrolled late. 
      In the map, in specific regions of South America and Africa, GER is either much lower than 95% 
      or much higher than 105%. It shows that educational opportunities are low there, <b>further proves 
      the unequal education worldwide</b>. Also, the performance is quite different 
      among different levels. The enrollment ratio at the tertiary level is lower than 
        the others worldwide.
    </b-card>

    <!-- Global Map2 -->
    <h2 class="subheader-text"><b>Education Accessibility of Different Genders</b></h2>
    <b-card border-variant="light" class="normal-text block startquote">
      <mark>Gender Parity Index (GPI)</mark> is used to evaluate gender accessibility. It is calculated as the quotient of the number 
      of females by the number of males enrolled in a given stage of education. A GPI equal to 1 indicates parity between females and males. 
      GPI value &lt; 1 indicates a disparity in favor of males and a value &gt; 1 in favor of females. 
      <!-- Similarly, the choropleth maps from 2014 to 2018 at four educational levels are created to show the situation of gender accessibility. -->
    </b-card>
    <b-card border-variant="light" class="globalmap">
    <div class="layout-center">
      <GlobalMap2/>
    </div>
    </b-card>
    <b-card border-variant="light" class="normal-text block startquote">
      A GPI between <mark> 0.97 and 1.03 indicates gender parity </mark> by UNESCO. A GPI below 0.97 indicates a 
      disparity in favor of males. A GPI above 1.03 indicates a disparity in favor of females. From the overviews at four 
      levels, we can see countries perform best at the primary level 
    while worst at the tertiary level. Although the primary level performs best worldwide, 
    some countries in Arica still do not reach gender parity. 
      Plus, at the tertiary level, most countries are in favor of females. In summary, <b>gender parity is not reached yet 
      worldwide and countries vary from each other</b>.
  </b-card>

    <v-divider/>
    <!-- Reasons -->
    <blockquote class="blockquote normal-text block">
      It raises our interest in why inequality would happen on education.
      In the second part, three chosen perspectives, <b>the educational expenditure by nation and by family</b>, 
      <b>educational resources distribution</b>, <b>relationship between the adolescent birth rate and GPI</b>
      are presented to explore the possible reasons behind unequal education.
  </blockquote>
   <v-divider/>
    <b-card class="title-text" id="p2">
      <b-card-header>
        <h2><b> Part 2 - What are the reasons behind the education inequality?</b></h2>
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
    <b-card border-variant="light" class="normal-text block">
      The investment of education is mainly from the national investment and family investment.
      These two aspects in chosen regions and countries are depicted by GDP devotion and family expenditure on education.
      The benchmark for state GDP devotion on education is <mark>4% to 6% of GDP, suggested by UN.</mark>.
     
    </b-card>
    <b-card border-variant="light" >
    <div class="layout-center">
      <Reason1/>
    </div>
    </b-card>
    <b-card border-variant="light" class="normal-text block">
        While looking at the family expenditure, education is quite costly in some regions, especially when compared 
        with the average salary. It proves education can be a burden for a normal family. For instance, in China, 
        the family does not have a high average salary compared to other regions, but they devote a lot to education. 
        The large variance between regions also depends on different state contexts.<b>To conclude, the nation has
        devoted the expenditure as suggested, while the family still affords or even 
        suffers a lot since high-quality education is expensive in some regions.</b>
    </b-card>


    <h2 class="subheader-text"><b>Imbalanced Education Resources</b></h2>
    <b-card border-variant="light" class="normal-text block">
     Tertiary education in Switzerland and China is focused here. GER and the entrance rate to top 200 
      universities are given for more insight.
    </b-card>
    <b-card border-variant="light" >
    <div class="layout-center">
      <Reason2/>
    </div>
    </b-card>


    <h2 class="subheader-text"><b>Gender Inequality</b></h2>
    <b-card border-variant="light" >
    <div class="layout-center">
      <Reason3/>
    </div>
    </b-card>

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
        <h2><b> Part 3 - What are the future trends in education?</b></h2>
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
          Gender parity still needs to be paid much attention at most of the levels worldwide. <br/>
          </b></h4>
      </v-col>
    </v-row>
  </v-parallax>

    <!-- Trend1 -->
    <h2 class="subheader-text"><b>Online Education: the Focus of Market</b></h2>
    <b-card border-variant="light" class="normal-text block">
      The fundings to the EdTech Unicorns from 2014 to 2019 are plotted below to show the changes along
      time. Plus, the exact EdTch companies in 2019 are given by country. 
    </b-card>
    <b-card border-variant="light" >
    <div class="layout-center">
      <Trend1/>
    </div>
    </b-card>

    <!-- Trend2 -->
    <h2 class="subheader-text"><b>Increasing Female Enrollment</b></h2>
    <b-card border-variant="light" class="normal-text block">
    We use the female enrollment ratio to learn female education worldwide. 
    The cases from 2013 to 2017 in Switzerland and China are focused on exploring the 
    developments along with the time.
    </b-card>
    <b-card border-variant="light" >
    <div class="layout-center">
      <Trend2/>
    </div>
    </b-card>


  <b-card title="Summary" class="blockquote normal-text block">
    <br/>
    In this atlas, we first explore the current situation of global and gender accessibility. Education is unevenly distributed 
    by country and by gender from the overview. <br/>
    <br/>
    Then, the possible reasons behind the phenomena are analyzed from 
    three aspects of nation vs. family expenditure, educational resources, and the adolescent 
    birth ratio to females. We conclude that education is quite expensive and education resources are sparse in some 
    regions. <br/>
    <br/>
    Eventually, the future trends of education are analyzed from the aspects of online learning and female enrollments. 
    The prosperity of online learning shows a bright future to reach equality education on one day. For gender parity, 
    more devotion to females is required at the primary and secondary levels due to their importance. Also, females should 
    be given more emphasis at the Ph.D. level in the future.
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
import Menu from '../components/Menu'

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
    Menu
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
