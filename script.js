var getCityEL = $(document.getElementById("city-name"));
var getTempEL = $(document.getElementById("temperature"));

var cityName="Seattle";
var fullStateName="Washington";
var currentTemp = "";
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + fullStateName + "&appid=be2d4f56e79031b53de247f7d046faaf",
    method: "GET"
}).then(function (response) {
    
    logData(response);
    currentTemp = kelvinToFarenheit(response.main.temp);

});
function logData(forecast){
    getCityEL.textContent = "";
    console.log("Forecast Info: ", forecast);
    console.log("City Name is ", forecast.name);

};

function kelvinToFarenheit(valNum) {
    valNum = parseFloat(valNum);
    currentTemp = (Math.floor(((valNum-273.15)*1.8)+32));
}
getCityEL.append(cityName);
getTempEL.append(currentTemp);