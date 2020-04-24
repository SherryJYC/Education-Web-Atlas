<template>
<div>
  <v-container>
      <v-row
          align="center"
          justify="center"
        >
      <h4> Uneven educational resources </h4>
      </v-row>
  </v-container>

  <b-card-group deck>
    <b-card>
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Flag-map_of_Switzerland.svg" style="width:300px;height:200px;">
      <!-- <b-card-text>
        Top 200 by US ranking
      </b-card-text> -->
    </b-card> 
    <b-card>
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag-map_of_the_People%27s_Republic_of_China.svg" style="width:300px;height:200px;">
    </b-card>
  </b-card-group>

  <b-card-group deck>
    <b-card>
      <!-- Chart of tertinary GER of Switzerland and China -->
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </b-card>
  </b-card-group>

  <b-card-group deck>
    <b-card>
         <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    </b-card>
    <b-card
    title="Chinese College Entrance Exam"
       class="text-left">
       <b-card-text>
      Chinese College Entrance Exam is balabala,
      many students balaba, very competive
    </b-card-text>
    </b-card>
  </b-card-group>

    <b-card-group deck>
    <b-card>
      <b-card-text>
         Accordingly, some special phenomena appears. The school district houses is a concept of the property and real estate in school district area in China.
         According to the regulations of the Education Administration Department or the school, on the basis of the principle of free admission to the nearest school, 
         the school (mainly the key primary and secondary schools) recruits students within the designated geographical area. Students in this area can enjoy compulsory 
         education and enter the nearest school without exams. People call this area "the school district". Accordingly, the property and real estate in this area are called “school district houses”.
         Since the 1990s, the outstanding educational benefits of key schools have attracted a lot of parents to pay a large sum of money or use social resources to send their children to these schools.
      </b-card-text>
    </b-card>
  </b-card-group>

</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';



export default {
  components: {
    apexchart: VueApexCharts,
  },

  

  data() {
    return {
      videoId: 'z9RWgVbvklA',
      playerVars: {
        autoplay: 1
      },
      series: [{
        name: 'Switzerland',
        data: [56.27, 57.23, 57.71, 58.05, 59.56]
        }, {
        name: 'China',
        data: [32.43, 42.43, 46.04, 48.02, 49.07]
        }
      ],
      chartOptions: {
        chart: {
            type: 'bar'
        },
        title: {
            text: '2013-2017 Tertinery Gross Enrollment Ratio Comparison between Switzerland and China'
        },
        colors: ["#e07b39", "#FFC300"],
        xaxis: {
            categories: ['2013','2014','2015','2016','2017'],
            crosshair: true
        },
        yaxis: {
            min: 0,
            max: 100,
            title: {
                text: 'Gross Enrollment Ratio'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        }
      }
    }
  },
  methods: {
    playing() {
      console.log('we are watching!!!')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style>

</style>