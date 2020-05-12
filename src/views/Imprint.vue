<template>
<div id="app">
<!-- Content -->
 
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
        <h1 class="display-1 font-weight-thin mb-4">About Us</h1>
        <h4 class="subheading sub-h4"><b>Introduction to Our Project</b></h4>
      </v-col>
    </v-row>
  </v-parallax>
<!--     
    Add everthing that relates to this atlas project: The course, the aim of the project, 
    the involved persons, the software used, copyright notes. -->
    <div>
    <b-card
    header="About this project"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    >
    <b-card-group>
    <b-card title="Course Description">
      <b-card-text  class="text">
       This is a course project for the Multimedia Cartography of Geomatics Master program in ETH Zurich 2020.      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">{{last_update}}</small>
      </template>
    </b-card>

    <b-card title="Project Objective" >
      <b-card-text  class="text">
       This project is based on the sustainable Development Goal 4 of the United Nations. Its objective is to provide users 
       a vision of education equality using the map and statistical charts. 
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">{{last_update}}</small>
      </template>
    </b-card>

    <b-card title="Software Dependency">
      <b-card-text  class="text">
        This project is developed based on the Vue.js framework. <br/><br/>
        Used packages include Vuetify, Mapbox, Apex and Bootstrap.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">{{last_update}}</small>
      </template>
    </b-card>
  </b-card-group>

    </b-card>
    </div>

    <!-- Teams and Members -->
    <div>
    <b-card
    header="Teams and Members"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    >
    <b-card-group deck>
      <b-card>
      <v-img src="../assets/img/person.png" height="210" contain alt="person_img" />
        <b-card-text class="text">
          <b>Yuchang Jiang </b><br/> 
          A Master student in ETH Zurich, majored in Geomatics <br/>
          Interested in front-end design, include but not limited to <br/>
          web page design, data visualization and movie editing.
        </b-card-text>
        <b-button class="btn_red" href="https://github.com/SherryJYC">Github</b-button>
      </b-card>

      <b-card>
      <v-img src="../assets/img/person.png" height="210" contain alt="person_img" />
        <b-card-text class="text">
          <b> Haojun Cai </b><br/>
          A Master student in ETH Zurich, majored in Geomatics <br/>
          Interested in social data science, include but limited to <br/>
          education and physcology.
        </b-card-text>
        <b-button class="btn_red" href="https://github.com/HaojunCai">Github</b-button>
      </b-card>
    </b-card-group>

    </b-card>
    </div>

    <!-- References  -->
    <div>
    <b-card
    header="References"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    >
    <b-card-group deck>
      <b-card class="text">
        <b-card-text >
          Data References
        </b-card-text>
        <v-row>
          <b-button class="btn_red" href="http://data.uis.unesco.org/" >
          Database of Sustainable Development Goal 4</b-button>
        </v-row>
        <v-row>
          <b-button class="btn_red" href="http://www.gov.cn/xinwen/2017-10/26/content_5234507.htm" >
          Education Report of Chinese Government</b-button>
        </v-row>
        <v-row>
          <b-button class="btn_red" href="https://www.hsbc.com.hk/content/dam/hsbc/hk/docs/premier/sc/education-report-sc.pdf" >
          HSBC Education Report in 2017</b-button>
        </v-row>
        <v-row>
          <b-button class="btn_red" href="https://www.worlddata.info/average-income.php" >
          Data of World Average Wage</b-button>
        </v-row>
        <v-row>
          <b-button class="btn_red" href="https://data.unicef.org/resources/data_explorer/unicef_f/" >
          Database of Children and Women Situation</b-button>
        </v-row>
      </b-card>

      <b-card class="text">
        <b-card-text>
          Image References
        </b-card-text>
        All charts and maps are produced by ourselves.<br/>
        All images are from online sources.
      </b-card>
    </b-card-group>

    </b-card>
    </div>
   
</div>
</template>
<script>
export default {
  data: () => ({
      last_update: "Last Update in May 2020"
    }),
}
</script>
<style scoped>
.btn_red{
  background-color: #A8322D;
  color: white;
}
.text{
  text-align: left;
  margin: 2em
}
</style>