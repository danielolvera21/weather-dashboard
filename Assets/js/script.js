const searchBtn = document.querySelector(".searchBtn");
var cityInput = document.querySelector("#searchTerm");


let getCityInfo = function () {
  const searchTerm = document.querySelector("#searchTerm").value;
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    searchTerm +
    "&units=imperial";
  const apiKey = "&appid=2620e7eed0ad5646d810d854f69ca6f6";

  fetch(apiUrl + apiKey)
    .then(function (res) {
      if (res.ok) {
        return res.json();
      } else {
        alert("Error: City Not Found");
      }
    })
    .then(function (data) {
      console.log(data);
      var date = moment().format("L");
      var temperature = data.main.temp;
      var wind = data.wind.speed;
      var humidity = data.main.humidity;

      $("#searchResults").html("<p>" + date + "</p>");
      $("#temperature").html("<p> temperature:" + temperature + "</p>");
      $("#wind").html("<p> wind speed:" + wind + "mph</p>");
      $("#humidity").html("<p> humidity:" + humidity + "</p>");
    })
    .catch(function (error) {
      alert("Unable to connect to Open Weather Map");
    });
};

searchBtn.addEventListener("click", getCityInfo);
