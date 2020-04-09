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
    <Reason1/>
    <Reason2/>
    <Reason3/>
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
import Statement1 from '../components/Statements/Statement1'
import Questions from '../components/Statements/Questions'
import GlobalMap1 from '../components/GlobalMap/GlobalMap1'
import GlobalMap2 from '../components/GlobalMap/GlobalMap2'
import Reason1 from '../components/Reasons/Reason1'
import Reason2 from '../components/Reasons/Reason2'
import Reason3 from '../components/Reasons/Reason3'
import Trend1 from '../components/Trend/Trend1'
import Trend2 from '../components/Trend/Trend2'
import Summary from '../components/Statements/Summary'

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
    Reason1,
    Reason2,
    Reason3,
    Trend1,
    Trend2,
    Summary
  }
}
</script>
