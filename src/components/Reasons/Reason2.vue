<template>
<div>

  <b-card-group deck>
    <b-card border-variant="light" >
      <!-- Chart of tertiary GER of Switzerland and China -->
      <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </b-card>
    <b-card border-variant="light" class="text-left">
      As shown from 2013 to 2017, the GER at the tertiary level is increasing in both countries,
      especially in China. While comparing the absolute value, the GER in Switzerland is at least 10% higher than in China
      within the five years.<br/>
      <br/>Internationally acknowledged that higher education is divided into three stages based on GER:
      GER below 15% is elite education stage; 15% - 50% is the popularization stage; More than 50% is universalization stage.
      In this way, Switzerland already entered into the third stage of universalization in 2013 while China is very close to the entry
      point of this stage in 2017.
    </b-card>
  </b-card-group>


  <b-card-group deck>
    <b-card border-variant="light" title="Entrance Rate to Top 200 in Switzerland">
      <b-card-text><h3><b>20.56%</b></h3></b-card-text>

      <b-list-group>
      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/eth.png" class="uni_img">
        <h5 class="uni_title">Swiss Federal Institute of Technology in Zurich</h5>
        <b-badge variant="danger" pill>13</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/epfl.png" class="uni_img">
        <h5 class="uni_title">Swiss Federal Institute of Technology in Lausanne</h5>
        <b-badge variant="danger" pill>38</b-badge>
      </b-list-group-item>

     <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/uzh.png" class="uni_img">
        <h5 class="uni_title">University of Zurich</h5>
        <b-badge variant="danger" pill>90</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/basel.png" class="uni_img">
        <h5 class="uni_title">University of Basel</h5>
        <b-badge variant="danger" pill>94</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/bern.png" class="uni_img2">
        <h5 class="uni_title">University of Bern</h5>
        <b-badge variant="danger" pill>113</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/geneava.svg" class="uni_img">
        <h5 class="uni_title">Univeristy of Geneva</h5>
        <b-badge variant="danger" pill>144</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/lausanne.png" class="uni_img">
        <h5 class="uni_title">University of Lausanne</h5>
        <b-badge variant="danger" pill>198</b-badge>
      </b-list-group-item>

    </b-list-group>

    </b-card> 
    <b-card border-variant="light"  title="Entrance Rate to Top 200 in China">
       <b-card-text><h3><b>0.26%</b></h3></b-card-text>

      <b-list-group>
      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/thu.png" class="uni_img2">
        <h5 class="uni_title">Tsinghua University</h5>
        <b-badge variant="danger" pill>23</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/pku.svg" class="uni_img2">
        <h5 class="uni_title">Peking University</h5>
        <b-badge variant="danger" pill>24</b-badge>
      </b-list-group-item>

     <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/stuc.png" class="uni_img2">
        <h5 class="uni_title">University of Science and Technology of China</h5>
        <b-badge variant="danger" pill>80</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/zju.png" class="uni_img2">
        <h5 class="uni_title">Zhejiang University</h5>
        <b-badge variant="danger" pill>107</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/fudan.png" class="uni_img2">
        <h5 class="uni_title">Fudan University</h5>
        <b-badge variant="danger" pill>109</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/nju.png" class="uni_img2">
        <h5 class="uni_title">Nanjing University</h5>
        <b-badge variant="danger" pill>144</b-badge>
      </b-list-group-item>

      <b-list-group-item class="list_item d-flex justify-content-between align-items-center">
        <img src="../../assets/img/shjtu.png" class="uni_img2">
        <h5 class="uni_title">Shanghai Jiao Tong University</h5>
        <b-badge variant="danger" pill>157</b-badge>
      </b-list-group-item>

    </b-list-group>

    </b-card>
  </b-card-group>

  <b-card border-variant="light" class="text-left">
      The entrance rate to the top 200 universities is calculated by the division of the top 200 universities' capacity provided by
      Times and the school-age population at the tertiary level provided by UN (Switzerland: 20.56% = 103,797 / 504,706; 
      China: 0.26% = 233,989 / 88,796,896). As shown above, the same for both countries, seven universities are 
      ranked as Top 200 in 2020. The capacity in China is two times of that in Switzerland. 
      However, due to large number of candidates in China, <b>the admission rate in China is only 1% of that in Switzerland</b>. 
      In China, <b>a student has to be the top 3 of 1000 colleagues to be admitted to eminent universities</b>.<br/>
      <br/>The high family expenditure and low admission rate have altogether made the college entrance examination in China 
      a heavy but unavoidable burden for the family. Want to learn more about Swiss and Chinese situations?
        Have a look at the following videos.
  </b-card>

  <b-card-group deck>
  <b-card border-variant="light" title="How is the ETH's first-year exam?">
        <youtube :video-id="videoId2" ref="youtube" @playing="playing"></youtube>
  </b-card>

  <b-card border-variant="light" title="What is Gaokao in China?">
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
      videoId: '6iHT1W8qaGc',
      videoId2: '__18iD-2mBo',
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
            type: 'bar',
            toolbar: {
                show: false
              }
        },
       dataLabels: {
          enabled: false
        },
        annotations: {
          yaxis: [
            {
              y: 50,
              borderColor: '#1E8449 ',
              label: {
                borderColor: '#1E8449 ',
                style: {
                  color: '#fff',
                  background: '#1E8449 '
                },
                text: 'Universalization Stage'
              }
            },
            {
              y: 15,
              borderColor: '#27AE60',
              label: {
                borderColor: '#27AE60',
                style: {
                  color: '#fff',
                  background: '#27AE60'
                },
                text: 'Popularization Stage'
              }
            },
            {
              y: 0,
              borderColor: '#7DCEA0',
              label: {
                borderColor: '#7DCEA0',
                style: {
                  color: '#fff',
                  background: '#7DCEA0'
                },
                text: 'Elite Stage'
              }
            },
          ],
        },
        title: {
            text: '2013-2017 Tertiary GER in Switzerland and China',
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
.uni_title{
  color: gray;
}
.list_item {
  height: 80px;
}
/* for swiss uni */
.uni_img{
  width: 110px;
  height: 40px;
}
/* for china uni */
.uni_img2{
  width: 70px;
  height: 60px;
}
iframe {
  width: 100%;
  max-width: 600px; /* Also helpful. Optional. */
}
</style>