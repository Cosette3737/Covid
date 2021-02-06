fetch('/state_data')
      .then(function(response) {
          console.log(response);
        return response.json();
    }).then(function (data) {
       // console.log('GET response:');
        let statedata = data;
        
        console.log(statedata);
        // mapdata =[]
        // var i;
        // for (i = 1; i < 51; i++) {
        //     mapdata=[coviddata[i][0], coviddata[i][1]]
        //     //console.log(mapdata);
    
        createBar(mapdata);
        });

 function createBar(mapdata)