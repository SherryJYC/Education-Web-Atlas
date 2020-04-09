<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item>
        <v-container>
            <v-row
                align="center"
                justify="center"
            >
                <Reason1/>
            </v-row>
         </v-container>
    </v-carousel-item>
    <v-carousel-item>
        <v-container>
            <v-row
                align="center"
                justify="center"
            >
                <h1> Reason 2 Placeholder </h1>
            </v-row>
         </v-container>
    </v-carousel-item>
    <v-carousel-item>
        <v-container>
            <v-row
                align="center"
                justify="center"
            >
                <h1> Reason 3 Placeholder </h1>
            </v-row>
         </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import Reason1 from './Reason1'
export default {
    components:{
        Reason1
    }

}
</script>

<style>

</style>