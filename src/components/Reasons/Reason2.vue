<template>
<div>

  <b-card border-variant="light" >
    <!-- Chart of tertiary GER of Switzerland and China -->
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </b-card>

  <b-card border-variant="light" class="text-left">
    As shown in the plot, from 2013 to 2017, the GER at the tertiary level is increasing in both countries,
    especially in China. While to compare with the absolute value, the GER in Switzerland is at least 10% higher than in China. 
    Internationally acknowledged that higher education is divided into three stages based on GER:
    GER below 15% is elite education stage; 15% - 50% is the popularization stage; More than 50% is universalization stage.
    In this way, Switzerland already entered into the third stage of universalization in 2013 while China is very close to the entry
    point of this stage in 2017. 
  </b-card>

  <b-card-group deck>
    <b-card border-variant="light" title="Entrance Rate to Top 200 Universities">
      <b-card-text>20.56% = 103,797 / 504,706</b-card-text>
      <img src="../../assets/img/reason2_ch.png" style="width:300px;margin-top:30px">
    </b-card> 
    <b-card border-variant="light"  title="Entrance Rate to Top 200 Universities">
       <b-card-text>0.26% = 233,989 / 88,796,896</b-card-text>
      <img src="../../assets/img/reason2_cn.png" style="width:300px">
    </b-card>
  </b-card-group>

  <b-card border-variant="light" class="text-left">
      The entrance rate to the top 200 universities is calculated by the division of the top 200 universities's capacity provided by
      Times and school age population at the tertiary level provided by UN. Same for both countries, seven universities are ranked 
      as Top 200 in 2020. The capacity of them in China is two times of that in Switzerland. However, due to the large
      candidates in China, the admission rate in China is only 1% of that in Switzerland. In China, a student has to be 
      the top 3 of 1000 colleagues to be admitted to eminent universities. <br/>
      <br/>The high family expenditure and low admission rate has altogether made the college entrance examination in China 
        a heavy but unavoidable burden for family. Want to learn more about Gaokao (China College Entrance Exam)? 
        Have a look at the following videos.
  </b-card>

  <b-card-group deck>
  <b-card border-variant="light" title="What is Gaokao?">
        <youtube :video-id="videoId2" ref="youtube" @playing="playing"></youtube>
  </b-card>

  <b-card border-variant="light" title="A Documentary for Gaokao in China">
        <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
  </b-card>
  </b-card-group>


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
        dataLabels: {
              enabled: false
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
iframe {
  width: 100%;
  max-width: 600px; /* Also helpful. Optional. */
}
</style>