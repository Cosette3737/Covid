fetch('/covid_data')
      .then(function (covid_data) {
    console.log('GET response:');
        let covidData = covid_data;
          // send data to the createMap function
          createBar(covidData);
      });

 function createBar(covidData) {
    console.log(covidData);
    }; 