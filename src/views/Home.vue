<template>
  <div class="home">

    <!-- Statement1 -->
    <Statement1/>
    <!-- Questions -->
    <Questions/>
    <v-divider/>

    <!-- Global Map1 -->
    <GlobalMap1/>
    <!-- Global Map2 -->
    <GlobalMap2/>
    <v-divider/>

    <!-- Reasons -->
    <Reasons/>
    <v-divider/>

    <!-- Trend1 -->
    <Trend1/>
    <!-- Trend2 -->
    <Trend2/>
    <v-divider/>
    
    <!-- Summary -->
    <Summary/>

  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Statement1 from '../components/Statement1'
import Questions from '../components/Questions'
import GlobalMap1 from '../components/GlobalMap1'
import GlobalMap2 from '../components/GlobalMap2'
import Reasons from '../components/Reasons'
import Trend1 from '../components/Trend1'
import Trend2 from '../components/Trend2'
import Summary from '../components/Summary'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


export default {
  name: 'Home',
  components: {
    Statement1,
    Questions,
    GlobalMap1,
    GlobalMap2,
    Reasons,
    Trend1,
    Trend2,
    Summary
  }
}
</script>