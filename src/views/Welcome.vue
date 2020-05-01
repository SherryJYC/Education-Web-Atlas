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
        <h1 class="display-1 font-weight-thin mb-4">Equal Education</h1>
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
        This is the menu for our atlas
      </b-card-text>
      </b-card>

        <b-btn
          class="btn"
          @click="e1 = 2"
        >
          Detailed Menu
        </b-btn>

      </v-stepper-content>
      <v-stepper-content step="2">
        <br/>
        <b-card
       title="Current Situation of Global Education"
       class="text-left"
      >
      <b-card-text>
        To assess the current situation of global education, global enrollment ratio and gender parity index are leverageed.
      </b-card-text>
      </b-card>
        <b-btn class="btn"
        @click="e1 = 1"
        >
          Last Step
        </b-btn>
        <b-btn
          class="btn"
          @click="e1 = 3"
        >
          Next Step
        </b-btn>

      </v-stepper-content>
      <br/>

      <v-stepper-content step="3">
         <b-card
       title="The Reasons behind Inequal Education"
       class="text-left"
      >
      <b-card-text>
     Three possible reasons are ...
      </b-card-text>
      </b-card>

       <b-btn class="btn"
        @click="e1 = 2"
        >
          Last Step
        </b-btn>

        <b-btn
          class="btn"
          @click="e1 = 4"
        >
          Next Step
        </b-btn>

      </v-stepper-content>

      <v-stepper-content step="4">
         <b-card
       title="Possible Trend of Education"
       class="text-left"
      >
      <b-card-text>
      Possible trends are ...
      </b-card-text>
      </b-card>

      <b-btn class="btn"
        @click="e1 = 3"
        >
          Last Step
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
