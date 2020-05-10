<template>
<div>
  <b-card class="text-left">
      Tertiary education in Switzerland and China is focused here. The GER at the tertiary level between 2013 and 2017 is plotted.
      Plus, the entrance rate to top 200 universities given by Times in 2020 are given later. 
  </b-card>

  <!-- <v-container>
      <v-row
          align="center"
          justify="center"
        >
      <h4> Uneven educational resources </h4>
      </v-row>
  </v-container> -->

  <b-card>
    <!-- Chart of tertiary GER of Switzerland and China -->
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </b-card>

  <b-card class="text-left">
    As shown in the plot, from 2013 to 2017, the GER at the tertiary level is increasing in both countries,
    especially in China. While to compare with the absolute value, the GER in Switzerland is at least 10% higher than in China. 
    Internationally acknowledged that higher education is divided into three stages based on GER:
    GER below 15% is elite education stage; 15% - 50% is the popularization stage; More than 50% is universalization stage.
    In this way, Switzerland already entered into the third stage of universalization in 2013; China is very close to the entry
    point of this stage in 2017. 
  </b-card>

  <b-card-group deck>
    <b-card title="Entrance Rate to Top 200 Universities">
      <img src="../../assets/img/reason2_ch.png" style="width:300px">
      <!-- <b-card-text>
        Top 200 by US ranking
      </b-card-text> -->
    </b-card> 
    <b-card>
      <img src="../../assets/img/reason2_cn.png" style="width:300px">
    </b-card>
  </b-card-group>

  <b-card-group deck>
    <b-card
    title="20.56% = 103,797 / 504,706"
       class="text-center">
    </b-card>
    <b-card
    title="0.26% = 233,989 / 88,796,896"
       class="text-center">
    </b-card>
  </b-card-group>

  <b-card class="text-left">
      <p>The entrance rate to the top 200 universities is calculated by the division of the top 200 universities's capacity provided by
      Times and school age population at the tertiary level provided by UN. Same for both countries, seven universities are ranked 
      as Top 200 in 2020. The capacity of them in China is two times of that in Switzerland. However, due to the large
      candidates in China, the admission rate 100 times less than in Switzerland. In China, a twelfth-grade student has to be 
      the top 3 our of 1000 colleagues to be admitted to eminent universities. </p>
      <p>The high family expenditure and low admission rate has altogether made the college entrance examination in China 
        a high-risk investment. Want to learn more about it? Have a look at the following videos.</p>

  </b-card>

  <b-card title="What is GAOKAO?">
        <youtube :video-id="videoId2" ref="youtube" @playing="playing"></youtube>
  </b-card>

  <b-card title="Documentary Film of Colledge Entrance Examination in China">
        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
  </b-card>

    <!-- <b-card
    title="Chinese College Entrance Exam"
       class="text-left">
       <b-card-text>
      Chinese College Entrance Exam is balabala,
      many students balaba, very competive
    </b-card-text>
    </b-card> -->

  <!-- <b-card>
    <b-card-text class="text-left">
        Accordingly, some special phenomena appears. The school district houses is a concept of the property and real estate in school district area in China.
        According to the regulations of the Education Administration Department or the school, on the basis of the principle of free admission to the nearest school, 
        the school (mainly the key primary and secondary schools) recruits students within the designated geographical area. Students in this area can enjoy compulsory 
        education and enter the nearest school without exams. People call this area "the school district". Accordingly, the property and real estate in this area are called “school district houses”.
        Since the 1990s, the outstanding educational benefits of key schools have attracted a lot of parents to pay a large sum of money or use social resources to send their children to these schools.
    </b-card-text>
  </b-card> -->

</div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import {swiss_ratio,china_ratio} from '../../assets/json/reason2';



export default {
  components: {
    apexchart: VueApexCharts,
  },

  data() {
    return {
      videoId: 'z9RWgVbvklA',
      videoId2: '6iHT1W8qaGc',
      swiss_ratio,
      china_ratio,
      playerVars: {
        autoplay: 1
      },
      series: [{
        name: 'Switzerland',
        data: swiss_ratio
        }, {
        name: 'China',
        data: china_ratio
        }
      ],
      chartOptions: {
        chart: {
            type: 'bar'
        },
        title: {
            text: '2013-2017 Tertiary Gross Enrollment Ratio Comparison between Switzerland and China',
            style: {
                fontSize: '15px'
              },
        },
        colors: ["#A8322D", "#FFC300"],
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