$(document).ready(function() {
  $('#search-button').click(weatherToday);
  $('#search-button').click(forecastFiveDays);
  $('#search-value').click(weatherToday);
  $('#search-value').click(forecastFiveDays);
  
  var userInput;
  var myKey = '42eafddcf7a997819e157e5630308d59';

  function weatherToday(event) {
    event.preventDefault();

    if ($(this).attr('id') === 'search-value') {
      var x = event.target;
      userInput = $(x).text();
      console.log(userInput);
    } else {
      userInput = $(this)
        .prev()
        .val();
    }

    function weatherFunction(searchTerm) {

      $.ajax({
          type: "GET",
          url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + myKey;

        }).then(function (data) {
          if (history.indexOf(searchTerm) === -1)
              history.push(searchTerm);
              localStorage.setItem("history", JSON.stringify(history));
              createRow(searchTerm);
          }
          $("#today").empty();

          var title = $("<h3>").addClass("card-title").text(data.name + " (" + new Date().toLocaleDateString() + ")");
          var img = $("<img>").attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");

          var tempF = parseInt((response.main.temp - 273.15) * 1.8 + 32);
          var temperature = $('<h4>')
            .addClass('current-temp')
            .text(`Current Temperature: ${tempF} F°`);
          var humidity = $('<h4>')
            .addClass('humidity')
            .text(`Humidity: ${response.main.humidity}%`);
          var windSpeed = $('<h4>')
            .addClass('wind-speed')
            .text(`Wind Speed ${response.wind.speed} mph`);
    
          var uvIdx = $('<h4>').addClass('uvIdx');
          