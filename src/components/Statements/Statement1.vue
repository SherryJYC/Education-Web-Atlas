<template>
  <div>
    <v-divider/>
    
  <!-- TODO: adjust statements and images -->
<v-parallax
    dark
    src="../../assets/img/education_img.jpg"
  >
  <v-row/>
    <v-row
      align="center"
      justify="center"
    >
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">Equality Education</h1>
        <h4 class="subheading"><b>There is still a long way to reach education equality worldwide.</b></h4>
      </v-col>
    </v-row>
  </v-parallax>

  
</div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
img{
  max-width: 100%;
  height: auto;
}
h1,h4{
 color: #A8322D;
 text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000;
}


</style>