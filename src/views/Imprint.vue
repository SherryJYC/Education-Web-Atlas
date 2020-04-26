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
        <h4 class="subheading sub-h4"><b>Introduction of Our Project</b></h4>
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
        This is a course project for Multimedia Cartography in Master program of Geomatics in ETHz 2020.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated in April 2020</small>
      </template>
    </b-card>

    <b-card title="Porject Objective" >
      <b-card-text  class="text">
        This project is based on Atlas of Sustaianble Development Goal of United States. Its objective is to 
        provide visualization of statistics for users and help user understand the current inequality of education.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated in April 2020</small>
      </template>
    </b-card>

    <b-card title="Software Dependency">
      <b-card-text  class="text">
        This project is developed based on Vue.js.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated in April 2020</small>
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
      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text class="text">
          <b>Yuchang Jiang </b><br/> 
          a Master student in ETHz, majored in Geomatics <br/>
          I am interested in front-end design, include but not limited to <br/>
          web page design, data visualization, 3D drawing and movie editing
        </b-card-text>
        <b-button class="btn_red" href="https://github.com/SherryJYC">Personal Homepage</b-button>
      </b-card>

      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text class="text">
          <b> Haojun Cai </b><br/>
          a Master student in ETHz, majored in Geomatics <br/>
          I am interested in data science, include but limited to <br/>
          education and physcology
        </b-card-text>
        <b-button class="btn_red" href="https://github.com/HaojunCai">Personal Homepage</b-button>
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
          Database of Sustainable development goals</b-button>
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
          Database of Childern and Women Situation</b-button>
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