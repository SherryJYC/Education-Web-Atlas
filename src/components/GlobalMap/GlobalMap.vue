<template>
<div>
  <div id="map"></div>

    <div class="map-overlay top">
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
        var months=[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

        mapboxgl.accessToken = this.accessToken;

        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v10',
            center: [31.4606, 20.7927],
            zoom: 0.5
         });

        map.on('load', function() {
            // Data courtesy of http://earthquake.usgs.gov/
            // Query for significant earthquakes in 2015 URL request looked like this:
            // http://earthquake.usgs.gov/fdsnws/event/1/query
            //    ?format=geojson
            //    &starttime=2015-01-01
            //    &endtime=2015-12-31
            //    &minmagnitude=6'
            //
            // Here we're using d3 to help us make the ajax request but you can use
            // Any request method (library or otherwise) you wish.
            $.getJSON(
                'https://docs.mapbox.com/mapbox-gl-js/assets/significant-earthquakes-2015.geojson',
                function(data) {

                    // Create a month property value based on time
                    // used to filter against.
                    data.features = data.features.map(function(d) {
                        d.properties.month = new Date(d.properties.time).getMonth();
                        return d;
                    });

                    map.addSource('earthquakes', {
                        'type': 'geojson',
                        data: data
                    });

                    map.addLayer({
                        'id': 'earthquake-circles',
                        'type': 'circle',
                        'source': 'earthquakes',
                        'paint': {
                            'circle-color': [
                                'interpolate',
                                ['linear'],
                                ['get', 'mag'],
                                6,
                                '#FCA107',
                                8,
                                '#7F3121'
                            ],
                            'circle-opacity': 0.75,
                            'circle-radius': [
                                'interpolate',
                                ['linear'],
                                ['get', 'mag'],
                                6,
                                20,
                                8,
                                40
                            ]
                        }
                    });

                    map.addLayer({
                        'id': 'earthquake-labels',
                        'type': 'symbol',
                        'source': 'earthquakes',
                        'layout': {
                            'text-field': [
                                'concat',
                                ['to-string', ['get', 'mag']],
                                'm'
                            ],
                            'text-font': [
                                'Open Sans Bold',
                                'Arial Unicode MS Bold'
                            ],
                            'text-size': 12
                        },
                        'paint': {
                            'text-color': 'rgba(0,0,0,0.5)'
                        }
                    });

                    // Set filter to first month of the year
                    // 0 = January
                    var month = 0;
                    var filters = ['==', 'month', month];
                    map.setFilter('earthquake-circles', filters);
                    map.setFilter('earthquake-labels', filters);

                    // Set the label to the month
                    $('#month').val(months[month]);

                    $( "#slider" ).change(function(e) {
                        var month = parseInt(e.target.value, 10);
                        var filters = ['==', 'month', month];
                        map.setFilter('earthquake-circles', filters);
                        map.setFilter('earthquake-labels', filters);
                        // set text to corresponding month
                        $('#month').val(months[month]);
                    });

                }
            );
        });

    },
}
</script>

<style>
body { margin: 0; padding: 0; }
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

</style>