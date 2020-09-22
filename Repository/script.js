function getDate() {
    var currentDate = moment().format("MMM Do YY");
    $("#current-day").text(currentDate);
}
getDate();


$(function () {
    
    var apiKey = "d4fcc4955c7cd68336228e5640ba2f91";
  
    function fetchWeatherForCity(city) {
      var queryUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;
  
      
      $.ajax({
        url: queryUrl,
        method: "GET",
      }).then(function (data) {
        
        console.log(data);
  
      
        $("#city-name").text(data.name + " Weather");
  
        
        var iconUrl = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png"
  
    
        var iconImg = $("<img>").attr("src", iconUrl);
        
        $("#weather-icon").empty();
        $("#weather-icon").append(iconImg);
        

        $("#temp").text(data.main.temp + "°");
        $("#wind").text(data.wind.speed + " mph");
        $("#humidity").text(data.main.humidity + " %");
      });
    }

    function getFiveDayForecast(city) {
        var forecastUrl = 
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&units=imperial&appid=" +
        apiKey;

        $.ajax({
            url: forecastUrl,
            method: "GET",
        }).then(function (data) {

        console.log(data);

        var forecastIconUrl = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"

        var forecastIconImg = $("<img>").attr("src", forecastIconUrl)

        $("#forecast-icon").empty();
        $("#forecast-icon").append(forecastIconImg);

        $("#date").text(data.list[0].dt_txt);
        $("#forecast-temp").text(data.list[0].main.temp + "°");
        $("#forecast-humidity").text(data.list[0].main.humidity + " %");

        });
    }
  
    $(document).on("click", ".city", function () {
      
      var city = $(this).attr("data-city");
  
      
      fetchWeatherForCity(city);
      getFiveDayForecast(city);
    });
  
    
    $("#search-form").on("submit", function (event) {
      
      event.preventDefault();
  
      
      var city = $("#search-input").val().trim();
  
      if (city === "") {
        return;
      }
  
      
      fetchWeatherForCity(city);
      getFiveDayForecast(city);
    });
  });
  