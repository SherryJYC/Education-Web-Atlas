<template>
<div id="app">
<!-- Banner -->
 <v-app-bar id="banner"
      app
    >
      <v-toolbar-title id="text"
      >
      {{title}}
      </v-toolbar-title>
      <v-spacer />
        
          <!-- <v-btn class="button"><router-link class="link" to="/"><b>Welcome</b></router-link></v-btn>
          <v-btn class="button"><router-link class="link" to="/Content"><b>Content</b></router-link></v-btn>
          <v-btn class="button"><router-link class="link" to="/imprint"><b>Imprint</b></router-link></v-btn> -->
        
 </v-app-bar>

<!-- Content -->
    <router-view/>

<!-- Footer -->
<v-footer app id="footer">
  <span>Education Atlas &copy; Yuchang Jiang, Haojun Cai, 2020 ETH Zurich</span>
</v-footer>

</div>
</template>
<script>

export default {
  data: () => ({
      title: "Equality Education"
    })
}
</script>

<style lang="scss">
#app {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';//'Times New Roman', Times, serif; //Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#banner{
  background-color: #A8322D;
  color:white;
}
#text{
  color: white;
}
.button{
  margin: 1pt;
}

.link{
  color: #A8322D;
  text-decoration: none;
}
.link:hover{
  color: #A8322D;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E %3Cpath fill='none' stroke='%23453886' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E");
  background-position: bottom;
  background-repeat: repeat-x;
  background-size: 20%;
  border-bottom: 0;
  padding-bottom: .3em;
  text-decoration: none;
}


</style>
