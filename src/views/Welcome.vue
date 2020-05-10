<template>
  <div>
    <v-divider/>
    
  <!-- TODO: adjust statements and images -->
<v-parallax
    dark
    src="../assets/img/education_img.jpg"
    height="300"
  >
  <v-row/>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Quality Education</h1>
        <h4 class="subheading sub-h4"><b>Welcome to this Atlas of Education</b></h4>
      </v-col>
    </v-row>
  </v-parallax>

<v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1">Welcome</v-stepper-step>

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
        Quality education is Goal 4 of the Sustainable Development Goals, adopted by all United Nations Member States in 2015 
        as a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by 2030. 
        In this atlas, we focus on the equality of education. Briefly speaking, we aim to give an overview of the current situation of 
        global education from the equality aspect, and then explore the possible reasons behind, and finally take a look at future trends.
      </b-card-text>
      </b-card>

        <b-btn
          class="btn"
          @click="e1 = 2"
        >
          1st Part
        </b-btn>

      </v-stepper-content>
      <v-stepper-content step="2">
        <br/>
        <b-card
       title="Current Situation of Global Education"
       class="text-left"
      >
      <b-card-text>
        To present the current situation of global education, the Global Enrollment Ratio (GER) and Gender Parity Index (GPI) are leveraged to generate the global maps from 2014 to 2018 in four education levels. It helps to learn the overall performance and performance by gender, which proves that the education is unequally distributed worldwide.
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
          2nd Part
        </b-btn>

      </v-stepper-content>
      <br/>

      <v-stepper-content step="3">
         <b-card
       title="Possible Reasons behind Unequal Education"
       class="text-left"
      >
      <b-card-text>
     To explore the possible reasons behind unequal education, firstly, the national investment and family expenditure of chosen countries are used to create the map and the chart. It shows different levels of commitment from the national side and the family side by country. Secondly, the admission rate and the gross enrollment rate to the tertiary level in Switzerland and China are presented to show the unequal distribution of educational resources between the two countries. Thirdly, the scatter plot between Adolescent Birth Rate and Gender Parity Index is made to show the possible reason behind low female performance in education.
      </b-card-text>
      </b-card>

       <b-btn class="btn"
        @click="e1 = 2"
        >
          1st Part
        </b-btn>

        <b-btn
          class="btn"
          @click="e1 = 4"
        >
          3rd Part
        </b-btn>

      </v-stepper-content>

      <v-stepper-content step="4">
         <b-card
       title="Possible Trend of Futrue Education"
       class="text-left"
      >
      <b-card-text>      
        Two aspects, development of the education method and the female performance, are chosen to show the future trends of education. First, unicorns in the EdTech fields are plotted. It tells that online education is increasingly popular these days. Second, female enrollment worldwide, and in Switzerland and China in 2017 are plotted to learn the performance at different levels. The female enrollment from 2013 to 2017 in Switzerland and China are further created to show the changes in these two countries.
      </b-card-text>
      </b-card>

      <b-btn class="btn"
        @click="e1 = 3"
        >
          2nd Part
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
