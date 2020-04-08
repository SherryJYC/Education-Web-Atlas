<template>
<div id="app">
<!-- Banner -->
 <v-app-bar
      app
    >
      <v-toolbar-title
      >{{title}}</v-toolbar-title>
      <v-spacer />
        <b-button-group>
          <b-button variant="outline-primary"><router-link to="/">Home</router-link></b-button>
          <b-button variant="outline-primary"><router-link to="/imprint">Imprint</router-link></b-button>
        </b-button-group>
 </v-app-bar>

<!-- Content -->
    <router-view/>

<!-- Footer -->
<v-footer app>
  <span>Education Atlas &copy; Yuchang Jiang, Haojun Cai, 2020 ETHz</span>
</v-footer>

</div>
</template>
<script>

export default {
  data: () => ({
      title: "Atlas of Equal Education"
    })
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
