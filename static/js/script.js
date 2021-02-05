fetch('/covid_data')
      .then(function(response) {
        return response.json();
    }).then(function (data) {
       // console.log('GET response:');
        let coviddata = data;
        headers=['state', 'infection'];
        coviddata2= [[headers],
                    [coviddata],];
        console.log(coviddata2);
        var i;
        for (i = 1; i < 51; i++) {
            mapdata = [coviddata2[i][1], coviddata2[i][3]]
        };
        createBar(mapdata);
        console.log(mapdata);
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
            colorAxis: {colors: ['#e7711c', '#4374e0']},
            backgroundColor: '#d6d6d6'
        };

        // set where in html to put chart
        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        // draw chart using data & options specified
        chart.draw(data, options);
    }

}
