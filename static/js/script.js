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
    var tested = [];
    var population = [];
    //console.log(statedata);
    for (let i = 1; i < statedata.length; i++) {
    states.push(statedata[i][0]);
    tested.push(statedata[i][1]);
    population.push(statedata[i][2]);
    };
    
    var trace1 = {
        x: states,
        y: tested,
        name: 'Tests Performed',
        marker: {color: '#808080'},
        type: 'bar'
      };
      
      var trace2 = {
        x: states,
        y: population,
        name: 'State Population',
        marker: {color: '#1c92e7'},
        type: 'bar'
      };
      
      var data = [trace1, trace2];
      
      var layout = {
        barmode: 'stack'};
      
      Plotly.newPlot('myDiv', data, layout);
    }
 }


fetch('/filtered_data')
    .then(function(response) {
        
      return response.json();
    }).then(function (data) {
        console.log(data);
        let filtered_data = data;
        console.log(filtered_data);
        let filtered_dataArr = filtered_data[1];
        var states = [];
        var infected = [];
        var deaths = [];
        var hospitals = [];
        var gini = [];
        var health_spending = [];
   
        for (let i = 1; i < filtered_data.length; i++) {
            states.push(filtered_data[i][0]);
            infected.push(filtered_data[i][1]);
            deaths.push(filtered_data[i][2]);
            hospitals.push(filtered_data[i][3]);
            gini.push(filtered_data[i][4]);
            health_spending.push(filtered_data[i][5]);
            var dropdown = d3.select("#selDataset").append("option").text(filtered_data[i][0]).property("value");
            // .on("change",function(d) {
            //     var value = d3.select(this).property("value");
            //     console.log(value)});
            var demo_meta = d3.select("#sample-metadata");
                    demo_meta.html("");
                    Object.entries(filtered_data[1]).forEach(([key,value]) => {
                        demo_meta.append("p").text(`${key} : ${value}`);
                    // demo_meta.append("p").text(Object.values(states)[1]);
                    // demo_meta.append("p").text(Object.values(filtered_data)[1][1]);
                    // demo_meta.append("p").text(Object.values(infected)[1]);
                    // demo_meta.append("p").text("Number of Deaths:",Object.values(deaths)[1]);
                    // demo_meta.append("p").text("Number of Hospitals:",Object.values(hospitals)[1]);
                    // demo_meta.append("p").text("Inequality Distribution:", Object.values(gini)[1]);
                        //console.log(states);
                    })}})