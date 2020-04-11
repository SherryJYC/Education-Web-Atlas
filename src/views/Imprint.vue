<template>
<div id="app">
<!-- Content -->
 

    <div>
      <b-carousel
    id="carousel-no-animation"
    style="text-shadow: 0px 0px 2px #000"
    no-animation
    indicators
    img-width="1024"
    img-height="480"
    >
    <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10">
        <h1>About this Atlas of Education</h1>
    </b-carousel-slide>
    </b-carousel>
    </div>
    <v-divider/>
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
      <b-card-text>
        This is a course project for Multimedia Cartography in Master program of Geomatics in ETHz 2020.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated in April 2020</small>
      </template>
    </b-card>

    <b-card title="Porject Objective" >
      <b-card-text>
        This project is based on Atlas of Sustaianble Development Goal of United States. Its objective is to 
        provide visualization of statistics for users and help user understand the current inequality of education.
      </b-card-text>
      <template v-slot:footer>
        <small class="text-muted">Last updated in April 2020</small>
      </template>
    </b-card>

    <b-card title="Software Dependency">
      <b-card-text>
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
        <b-card-text>
          Yuchang Jiang: a Master student in ETHz
        </b-card-text>
        <b-button href="#" variant="primary">Personal Homepage</b-button>
      </b-card>

      <b-card img-src="https://placekitten.com/1000/300" img-alt="Card image" img-top>
        <b-card-text>
          Haojun Cai: a Master student in ETHz
        </b-card-text>
        <b-button href="#" variant="primary">Personal Homepage</b-button>
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
      <b-card >
        <b-card-text>
          Data References
        </b-card-text>
        <b-button href="#" variant="primary">Link</b-button>
      </b-card>

      <b-card >
        <b-card-text>
          Image References
        </b-card-text>
        <b-button href="#" variant="primary">Link</b-button>
      </b-card>
    </b-card-group>

    </b-card>
    </div>
   
</div>
</template>