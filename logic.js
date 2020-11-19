function getFiveDayForecast(city) {
    var forecastUrl = 
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=" +
    apiKey;

    $.ajax({
        url: forecastUrl,
        method: "GET",
    }).then(function (castData) {

      
      for (var i = 0; i < castData.list.length; i +=8) 
      
      { console.log(castData.list[i].dt_txt);
        console.log(castData.list[i].weather.icon);
        console.log(castData.list[i].main.temp);
        console.log(castData.list[i].main.humidity);

        var cardCastBody = $("<div>")
        cardCastBody.addClass("card-cast-body");
        cardCastBody.attr("id", "cardCastBody-" + i);
        $("#cardCastBody").append(cardCastBody);

        $("#cardCastBody-" + i).append("<h3>" + castData.list[i].dt_txt);
        $("#cardCastBody-" + i).append("<h5>" + castData.list[i].weather.icon);
        $("#cardCastBody-" + i).append("<h5>" + castData.list[i].main.temp);
        $("#cardCastBody-" + i).append(castData.list[i].main.humidity);

    }

    

    });
}