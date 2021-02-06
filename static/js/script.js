fetch('/covid_data')
      .then(function(response) {
          //console.log(response);
        return response.json();
    }).then(function (data) {
       // console.log('GET response:');
        let mapdata = data;
        createBar(mapdata);
        });

 function createBar(mapdata) {
    google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': "AIzaSyDSZfX2xxa071XwxZWy0xFI-jmlSWWSvgg",
        
    });

    // call function to draw the map
    google.charts.setOnLoadCallback(drawRegionsMap);

    // function to create map
    function drawRegionsMap() {

        // set data
        var data = google.visualization.arrayToDataTable(mapdata);
        //console.log(mapdata);
        // set options
        var options = {
            colorAxis: {colors: ['#1c92e7',
            '#49a7eb',
            '#60b2ee',
            '#76bdf0',
            '#8dc8f3',
            '#a4d3f5',
            '#badef7',
            '#d1e9fa',
            ]},
            backgroundColor: 'eff3f6',
            region: 'US',
            displayMode:'regions',
            resolution: 'provinces',
        };

        // set where in html to put chart
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        // draw chart using data & options specified
        chart.draw(data, options);
    }

fetch('/state_data')
      .then(function(response) {
          //console.log(response);
        return response.json();
    }).then(function (data) {
       // console.log('GET response:');
        let statedata = data;
        createBar(statedata);
        });


 function createBar(statedata) {
    var states = [];
    var deaths = [];
    var infected = [];
    console.log(statedata);
    for (let i = 1; i < statedata.length; i++) {
    states.push(statedata[i][0]);
    deaths.push(statedata[i][2]);
    infected.push(statedata[i][1]);
    };
    console.log(infected);
    var trace1 = {
        x: states,
        y: deaths,
        name: 'Number of Deaths',
        type: 'bar'
      };
      
      var trace2 = {
        x: states,
        y: infected,
        name: 'Number of Infected',
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {barmode: 'stack'};
      
      Plotly.newPlot('myDiv', data, layout);;
 }
}
