<template>
  <div>
    <v-divider/>
    
  <v-parallax
    dark
    src="../assets/img/education_img.jpg"
    height="300"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Equality Education</h1>
        <h4 class="subheading sub-h4"><b>Welcome to this Atlas of Education</b></h4>
      </v-col>
    </v-row>
  </v-parallax>

<!-- Overview  -->
<v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Overview</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2">Part 1</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3">Part 2</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 4" step="4">Part 3</v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <b-card
       title="Welcome"
       class="text-left"
      >
      <br/>
      <b-card-text>
        Sustainable Development Goals (SDG) were adopted by all UN Member States in 2015 as a universal call to action to
      end poverty, protect the planet and ensure that all people enjoy peace and prosperity by 2030. Quality Education is Goal 4 (SDG 4)
      among all 17 goals to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
      In this atlas, we focus on Equality Education. Briefly speaking, we will give an overview of the nowaday global
      education from the equality aspect, then explore the reasons behind and finally take a look at future trends.
      </b-card-text>
      </b-card>

        <b-btn
          class="btn"
          @click="e1 = 2"
        >
          Continue
        </b-btn>

      </v-stepper-content>
      <v-stepper-content step="2">
        <br/>
        <b-card
       title="Part 1 - Current Situation of Global Education"
       class="text-left"
      >
      <b-card-text>
        To present the current situation of global education, the Global Enrollment Ratio (GER) and Gender Parity Index (GPI) 
        are leveraged to generate global maps from 2014 to 2018 at four education levels. 
        It helps to learn global and gender accessibility, which proves that 
        the education is unequally distributed worldwide by country and by gender.
        <br/><br/>
      </b-card-text>
      </b-card>
        <b-btn class="btn"
        @click="e1 = 1"
        >
          Overview
        </b-btn>
        <b-btn
          class="btn"
          @click="e1 = 3"
        >
          Part 2
        </b-btn>

      </v-stepper-content>
      <br/>

      <v-stepper-content step="3">
         <b-card
       title="Part 2 - Possible Reasons behind Unequal Education"
       class="text-left"
      >
      <b-card-text>
    To explore the possible reasons behind unequal education, we firstly use the national investment vs. family expenditure of 
    chosen countries. It shows different levels of commitment from both sides by country. 
     Secondly, the gross enrollment rate and the admission rate at the tertiary level in Switzerland and China are 
     presented to show the unequal distribution of educational resources. Thirdly, the relationship 
     between Adolescent Birth Rate and Gender Parity Index is explored.
      </b-card-text>
      </b-card>

       <b-btn class="btn"
        @click="e1 = 2"
        >
          Part 1
        </b-btn>

        <b-btn
          class="btn"
          @click="e1 = 4"
        >
          Part 3
        </b-btn>

      </v-stepper-content>

      <v-stepper-content step="4">
         <b-card
       title="Part 3 - Possible Trends in Future Education"
       class="text-left"
      >
      <b-card-text>      
        Two aspects, development of online education and the performance of female education, are chosen to show the 
        future trends of equality education. First, unicorns in the EdTech fields are given. It tells that online 
        education is increasingly popular these days. Second, female enrollment ratio worldwide, and in Switzerland 
        and China in 2017 are plotted to learn the performance at different levels. The time series from 2013 
        to 2017 in Switzerland and China are further shown to show the changes in these two countries.
      </b-card-text>
      </b-card>

      <b-btn class="btn"
        @click="e1 = 3"
        >
          Part 2
        </b-btn>

        <b-btn @click="goContent">Go to Content</b-btn>

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>

  
</div>
</template>

 <script>
  export default {
    data () {
      return {
        e1: 1,
      }
    },
    methods:{
      goContent: function () {
        // go to content page
        window.location.href = './Content';
      
      },
    }
  }
</script>
<style>
img{
  max-width: 100%;
  height: auto;
}
h1,.sub-h4{
 color: #A8322D;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000;
}
h3 {
  color: #A8322D;
}
.btn{
  margin: 10px;
  background-color: #A8322D;
  color: white;
}
</style>
