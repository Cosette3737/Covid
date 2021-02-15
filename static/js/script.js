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
        //console.log(statedata);
        });


 function createBar(statedata) {
    var states = [];
    var infected = [];
    var tested = [];
    //console.log(statedata);
    for (let i = 1; i < statedata.length; i++) {
    states.push(statedata[i][0]);
    infected.push(statedata[i][1]);
    tested.push(statedata[i][2]);
    };
    
    var trace1 = {
        x: states,
        y: tested,
        name: 'Population Tested %',
        marker: {color: '#1c92e7'},
        type: 'bar'
      };
      
      var trace2 = {
        x: states,
        y: infected,
        name: 'Positivity Rate',
        marker: {color: '#808080'},
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        barmode: 'stack',
        margin:{b:120}};
      
      Plotly.newPlot('myDiv', data, layout, {displayModeBar:false});
    }
 }


fetch('/filtered_data')
    .then(function(response) {
        return response.json();
    }).then(function (data) {
        //console.log(data);
        let filtered_data = data;
        console.log(filtered_data);
        
        // var states = [];
        // var infected = [];
        // var deaths = [];
        // var hospitals = [];
        // var gini = [];
        // var health_spending = [];
   
        for (let i = 1; i < filtered_data.length; i++) {
         d3.select("#selDataset").append("option").text(filtered_data[i][0]).property("value")};
          
    d3.selectAll("#selDataset").on("change", updateInfo);    
    function updateInfo() {
      var dropDown = d3.select("#selDataset");
          var dataset = dropDown.property("value");
          console.log(dataset); 
            for (let i = 1; i < filtered_data.length; i++) {
               // console.log(filtered_data[i][0]); 
               label=["State", "Infected", "Deaths", "Hospitals", "Inequality", "Health Spending"];
              if (dataset === filtered_data[i][0]) {
                 var ind = i;
                 var demo_meta = d3.select("#sample-metadata");
                  demo_meta.html("");
                  //Object.entries(filtered_data[ind]).forEach(() => {
                    demo_meta.append("p").text(`State: ${filtered_data[i][0]}`);
                    demo_meta.append("p").text(`Infected: ${filtered_data[i][1]}`);
                    demo_meta.append("p").text(`Deaths: ${filtered_data[i][2]}`);
                    demo_meta.append("p").text(`Hospitals: ${filtered_data[i][3]}`);
                    demo_meta.append("p").text(`Gini %: ${filtered_data[i][4]}`);
                    demo_meta.append("p").text(`Health $ per Person: ${filtered_data[i][5]}`);
              }
            }}
        })