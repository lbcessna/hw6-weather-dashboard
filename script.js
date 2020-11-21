var getCityEL = $(document.getElementById("city-name"));
var getCitySearchEL = $(document.getElementById("city-search"));
var getTempEL = $(document.getElementById("temperature"));
var getHumidityEL = $(document.getElementById("humidity"));
var getWindSpeedEL = $(document.getElementById("wind-speed"));

var cityName="";
var fullStateName="Washington";
var currentTemp = "";

function getWeather() {
    emptyDashFields();
$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + fullStateName + "&appid=be2d4f56e79031b53de247f7d046faaf",
    method: "GET"
}).then(function (response) {
    logData(response);
    return currentTemp = kelvinToFarenheit(response.main.temp);
    
});
}

$("#search-btn").on("click", event =>{
    event.preventDefault();
    console.log("User search field:", $("#city-search").val());
    cityName = $("#city-search").val();
    getWeather();
})
function logData(forecast){
    getCityEL.textContent = "";
    console.log("Forecast Info: ", forecast);
    console.log("City Name is ", forecast.name);
    getHumidityEL.append(forecast.main.humidity + "%")
    getWindSpeedEL.append(forecast.wind.speed +" mph" )

};

function emptyDashFields () {
    getCityEL.empty();
    getTempEL.empty();
    getHumidityEL.empty();
    getWindSpeedEL.empty();

}
function kelvinToFarenheit(valNum) {
    console.log("GetTempEl: ", getTempEL);
    valNum = parseFloat(valNum);
    currentTemp = (Math.floor(((valNum-273.15)*1.8)+32));
    console.log("Current temp is: ", currentTemp + " F");
    getTempEL.append(currentTemp);
    
}
getCityEL.append(cityName);