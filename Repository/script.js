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
  
    $(document).on("click", ".city", function () {
      // get the name of the city using the data-city attribute of the clicked
      // element
      var city = $(this).attr("data-city");
  
      // send ajax request for weather and display it
      fetchWeatherForCity(city);
    });
  
    // listen for "submit" event on the #search-form
    $("#search-form").on("submit", function (event) {
      // prevent the default form behavior
      event.preventDefault();
  
      // store value of form input in a variable named search. remove any leading
      // or trailing white space using the trim method
      var city = $("#search-input").val().trim();
  
      // do nothing if search has no characters (empty string)
      if (city === "") {
        return;
      }
  
      // send ajax request for weather and display it
      fetchWeatherForCity(city);
    });
  });
  