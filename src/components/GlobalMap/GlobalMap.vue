<template>
<div>
  <div id="map"></div>

    <!-- Bottom left: Timeslider container -->
    <div id='console'>
        <br>
        <!-- Counter that updates as slider is changed to declare selected value -->
        <label class="control-label">Time Slider - Year:</label>
        <input type="text"  id="yearCount" readonly>
            
        <!-- Spacing -->
        <br>
        <br>
        
        <!-- jQuery Slider -->
        <div id="slider" style="width:100%;" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"></div>
    </div>

    <!-- <div class="map-overlay top">
        <div class="map-overlay-inner">
            <h2>Significant earthquakes in 2015</h2>
            <input id="month" 
                type="text" 
                class="Disable" 
                value="" /> 
            <input id="slider" type="range" min="0" max="11" step="1" value="0" />
        </div>
        <div class="map-overlay-inner">
            <div id="legend" class="legend">
                <div class="bar"></div>
                <div>Magnitude (m)</div>
            </div>
        </div>
    </div> -->

    <!-- Bottom right: Map Legend -->
    <div class='legend-container'>
        <div class='legend' id='legend' >
            <h2>Gross Enrollment Ratio</h2> <p>%</p>
            <hr/>
            
            <!-- Div where the dynamic legend is created  -->	
            <div class='legend' id='cd-legend' >
            </div>
            
            <hr/>
            <!-- <b> tag bolding text -->
            <p><b>by countries with valid data</b></p>
        </div>
    </div>

</div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import JQuery from 'jquery';

let $ = JQuery;

export default {
    data: () => ({
      accessToken: 'pk.eyJ1Ijoic2hlcnJ5anljIiwiYSI6ImNqb2pteTAzdjA2YmszdXBqanZ2YmNlM2wifQ.2_9XWJxI8fDvh4d_hLlrWA',
    }),

    mounted(){
        mapboxgl.accessToken = this.accessToken;

        var years = [2014,2015,2016,2017,2018];
        
        // arrays that will be used to style the layer division 
        var breaks = [
                    // stop domain values must appear in ascending order
                    // Pop Dens threshold [0] Color [1]  
                            [0.0001, 'rgb(204,204,204)'],
                            [50.0, 'rgb(255,255,102)'],					
                            [75.0, 'rgb(255,204,102)'],
                            [100.0, 'rgb(204,153,48)'],
                            [125.0, 'rgb(204,0,0)'],
                            [150.0, 'rgb(153,51,51)'],
        ];
        
        // arrays that will be used to populate the legend 
        var legendLabels = [
                    // Label text that will appear in the legend [0]
                            ['<50%'],
                            ['50% - 75%'],
                            ['75% - 100%'],
                            ['100% - 125%'],
                            ['125% - 150%'],
                            ['>150%'],
        ];	

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [50, 10],
            zoom: 1.5
         });

        // The slice() method returns the selected elements in an array, as a new array object. The original array will not be changed.
        // https://www.w3schools.com/jsref/jsref_slice_array.asp
        // The reverse() method reverses the order of the elements in an array.
        // https://www.w3schools.com/jsref/jsref_reverse.asp
        // This is used to reverse the ordering of the legend
        // The legendsLabels arrays could have been provided in reverse order and not required slice().reverse(). but for this example were provided reversed for consistency
        var breaksRev = breaks.slice().reverse();
        var legendLabelsRev = legendLabels.slice().reverse();
        
        map.on('load', function() {
            var legend = document.getElementById('cd-legend'); 
            
            map.addSource('mapbox-ger-primary', {
                type: 'vector',
                url: 'mapbox://haojun9612.8xb9cce3'
            });

            map.addLayer({
                'id': 'ger-primary',
                'type': 'fill',
                'source': 'mapbox-ger-primary',
                'source-layer': 'GERPrimary-778yem',

                // Default year is 2014 to be displayed
                'filter': ['==', 'Time', 2014], 
                'paint': {
                    'fill-color': {
                        // Set polygon fill color based on attribute for population density CDPOPDENS
                        property: 'Value',
                        type : 'interval',
                        // Loading array declared in the breaks variable 
                        stops: breaks,
                        },
                    'fill-opacity': 1
                }            
            });

            // Create legend and style the key/color
            // Using Javascript for each method. The forEach() method calls a provided function once for each element in an array, in order.
            // https://www.w3schools.com/jsref/jsref_forEach.asp
            breaksRev.forEach(function(layer, i){
            
                // Creating elements to fill the legend div with id = 'cd-legend' 
                // each stop gets a 'row' 
                var item = document.createElement('div');
                //add a 'key' to the row. A key will be the color key
                var key = document.createElement('span');
                //add a value variable to the 'row' in the legend
                var value = document.createElement('span');
                
                //the key will take on the shape and style properties defined here, in the HTML
                key.className = 'legend-key'; 
                // the background color is retreived from the breaks array
                key.style.backgroundColor = layer[1]; 

                // give the value variable a placeholder id that we can access and update with custom labels
                value.id = 'legend-value-' + i;
                
                //add the key (color key) to the legend row
                item.appendChild(key); 
                //add the placeholder value to the legend row
                item.appendChild(value);
                // Add row to the legend
                legend.appendChild(item);        
            });
        
            legendLabelsRev.forEach(function(layer, i){
                //as we iterate through the arrays get the correct row, and add the appropriate text 
                document.getElementById('legend-value-' + i).textContent = layer[0];             
            });  

            //jQuery Slider Widget http://api.jqueryui.com/slider/
            $( "#slider" ).change(function(e) {
                var year = parseInt(e.target.value, 10);
                var filters = ['==', 'Time', year];
                // runs filter query on Mapbox layer based on the location/value of the handle on the slider
                map.setFilter('ger-primary', filters);
                // update the year counter based on the location/value of the handle on the slider
                $( "#yearCount" ).val(years[year]);
            });

            // $( "#slider" ).slider({
            //     // Value is the default location of handle on slider
            //     value:2014,
            //     // Min is the minimum value of the slider
            //     min: 2014,
            //     // Max is the maximum value of the slider
            //     max: 2018,
            //     // Step determines the size or amount of each interval or step the slider takes between the min and max.
            //     step: 1,

            //     // Change event captures when the the slider handle HAS MOVED location. Change event only updates/captured after the slider handle is moved.
            //     // https://api.jqueryui.com/slider/#event-change
            //     change: function(e) {
            //         var year = parseInt(e.target.value, 10);
            //         var filters = ['==', 'Time', year];
            //         // update the year counter based on the location/value of the handle on the slider
            //         $( "#yearCount" ).val(years[year]);
            //         // runs filter query on Mapbox layer based on the location/value of the handle on the slider
            //         map.setFilter('ger-primary', filters);
            //     },

            //     // Slide event captures when the the slider handle IS BEING MOVED location. Slide event updates/captured while the slider handle is being moved. 
            //     // https://api.jqueryui.com/slider/#event-slide
            //     slide: function(e) {
            //         var year = parseInt(e.target.value, 10);
            //         var filters = ['==', 'Time', year];
            //         // update the year counter based on the location/value of the handle on the slider
            //         $( "#yearCount" ).val(years[year]); 
            //         // runs filter query on Mapbox layer based on the location/value of the handle on the slider
            //         map.setFilter('ger-primary', filters);
            //     }
            // });

            // yearCount value, required to replace default value when the page loads
            // $( "#yearCount" ).val( $( "#slider" ).slider( "value" ) );

            // The below code creates a legend below the slider so the user knows what year is selected
            // the itemes variable is an array of the labels that will be placed under the slider
            // To update the legend ONLY the items variable needs to be updated
            // The number of items must mach number of intervals, this example there are 12 = start, end and 10 stops
            // Start and end items must match the min and max declared for the slider
            var items =['2014','2015','2016','2017','2018'];

            // Calculate the legth of the legend based on number of items declared to identify spacing required
            // Do not change when updating the items variable
            var length = 100 / (items.length - 1);
            $.each(items, function(key,value){
            
            var spacing = length;
            if(key === 0 || key === items.length-1)
            spacing = length/2;
            
            // Updates sliderLegend div below the slider using spacing variable to set calculated label spacing width and include label value for the label
            // Do not change when updating the items variable
            $("#sliderLegend").append("<label_scale style='width: "+spacing+"%'>"+value+"</label_scale>");
            });

            // $.getJSON(
            //     'https://docs.mapbox.com/mapbox-gl-js/assets/significant-earthquakes-2015.geojson',
            //     function(data) {

            //         // Create a month property value based on time
            //         // used to filter against.
            //         data.features = data.features.map(function(d) {
            //             d.properties.month = new Date(d.properties.time).getMonth();
            //             return d;
            //         });

            //         map.addSource('earthquakes', {
            //             'type': 'geojson',
            //             data: data
            //         });

            //         map.addLayer({
            //             'id': 'earthquake-circles',
            //             'type': 'circle',
            //             'source': 'earthquakes',
            //             'paint': {
            //                 'circle-color': [
            //                     'interpolate',
            //                     ['linear'],
            //                     ['get', 'mag'],
            //                     6,
            //                     '#FCA107',
            //                     8,
            //                     '#7F3121'
            //                 ],
            //                 'circle-opacity': 0.75,
            //                 'circle-radius': [
            //                     'interpolate',
            //                     ['linear'],
            //                     ['get', 'mag'],
            //                     6,
            //                     20,
            //                     8,
            //                     40
            //                 ]
            //             }
            //         });

            //         map.addLayer({
            //             'id': 'earthquake-labels',
            //             'type': 'symbol',
            //             'source': 'earthquakes',
            //             'layout': {
            //                 'text-field': [
            //                     'concat',
            //                     ['to-string', ['get', 'mag']],
            //                     'm'
            //                 ],
            //                 'text-font': [
            //                     'Open Sans Bold',
            //                     'Arial Unicode MS Bold'
            //                 ],
            //                 'text-size': 12
            //             },
            //             'paint': {
            //                 'text-color': 'rgba(0,0,0,0.5)'
            //             }
            //         });

            //         // Set filter to first month of the year
            //         // 0 = January
            //         var month = 0;
            //         var filters = ['==', 'month', month];
            //         map.setFilter('earthquake-circles', filters);
            //         map.setFilter('earthquake-labels', filters);

            //         // Set the label to the month
            //         $('#month').val(months[month]);

            //         $( "#slider" ).change(function(e) {
            //             var month = parseInt(e.target.value, 10);
            //             var filters = ['==', 'month', month];
            //             map.setFilter('earthquake-circles', filters);
            //             map.setFilter('earthquake-labels', filters);
            //             // set text to corresponding month
            //             $('#month').val(months[month]);
            //         });

            //     }
            // );
        });

    },
}
</script>

<style>
    body { margin: 0; padding: 0; }

    h2 {
        font-size: 14px;
    }

	#map { position: absolute; top: 0; bottom: 0; width: 100%; }

    .map-overlay {
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
        position: absolute;
        width: 25%;
        top: 0;
        left: 0;
        padding: 10px;
    }

    .map-overlay .map-overlay-inner {
        background-color: #fff;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        padding: 10px;
        margin-bottom: 10px;
    }

    .map-overlay h2 {
        line-height: 24px;
        display: block;
        margin: 0 0 10px;
    }

    .map-overlay .legend .bar {
        height: 10px;
        width: 100%;
        background: linear-gradient(to right, #fca107, #7f3121);
    }

    .map-overlay input {
        background-color: transparent;
        display: inline-block;
        width: 100%;
        position: relative;
        margin: 0;
        cursor: ew-resize;
    }
    
    /*Container bottom left*/
    #console {
        position: absolute;
        width: 420px;
        margin: 10px;
        padding: 10px 20px;
        background-color: white;
        bottom:20px;
        z-index:10000;
    }

    #console hr {
        margin-left:-20px; 
        margin-right:-20px;  
        color: #123455; 
        height: 1px; 
        border: 0; 
        border-top: 1px solid #ccc; 
        padding: 0; 
    }

    /*Mapbox Legend */
    .legend {
        font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
        background-color: white; 
    }
    
    /* legend test */
    .legend-container {
        position: absolute;
        bottom: 0px;
        right: 0px;
        padding: 0px 10px;
        margin-bottom: 30px;
        z-index: 1;
        max-width: 200px
    }
    
    /* Legend title */
    .legend h2 {
        padding-top: 8px;
        margin:0;
        text-align: center;
    }

    .legend p {
        margin: 0;
        padding-left:10px;
        padding-right:10px;
        text-align: center;
    }

    .legend hr {
        color: #123455; 
        border: 0; 
        border-top: 1px solid #ccc; 
        padding: 0; 
        margin-top:5px;
        margin-bottom:5px
    }
        
    .legend-key {
        display: inline-block;
        /*size of color key*/
        width: 30px; 
        height: 15px;
        /*position of color key*/
        margin-right: 15px; 
        margin-left: 10px; 
    }  
    
    /* Customize jQuery Slider UI - Handle color and shape*/  
    .ui-slider .ui-slider-handle {
        width: 20px;
        height: 20px;
        background: #f6931f;
        border-radius: 50%;
        border: none;
        cursor: pointer;
    }

    /* Customizing Slider UI - Handle placement along slider to line up*/ 
    .ui-slider-horizontal .ui-slider-handle {
        top: 50%;
        margin-top: -10px;
    }

    .ui-slider-horizontal {
        height: 6px;
    }

    /* Style the counter*/
    #yearCount{
        border:0; 
        color:#f6931f; 
        font-weight:bold; 
        font-size:14px;
        width:50px
    }

    #console > label {
        font-weight:bold; 
        font-size:14px;
    }

    /* Style the legend inside the sliderLegend div */
    label_scale{
        display: inline-block;
        text-align:center;
        font-size:10px;
    }

    /* Style the legend inside the sliderLegend div - ensures the first label appears over the slider start */
    label_scale:first-child{
        text-align:left;
        margin-left:-10px;
        margin-right:10px;
    }

    /* Style the legend inside the sliderLegend div - ensures the last label appears over the slider end */
    label_scale:last-child{
        text-align:right;
        margin-right:-10px;
        padding-left:10px;
    }

</style>