
function validateForm() {
    var city = document.getElementById("inputCity").value ;
    var dataMeteo = fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=b34ed25c6c013c1d9db0537a1b65a859&units=metric&lang=fr')
    .then(res=>res.json())
    .then(res => {
        console.log(res);
        var imageTemp = res.weather[0].icon
        document.getElementById("pngTemp").innerHTML = ("<img src='http://openweathermap.org/img/w/"+imageTemp+".png'>");
        var tempValue = res.main.temp;
        document.getElementById ("zone_temp").innerHTML = "Température : " + tempValue + " °C"; 
        
        var cityName = res.name;
        document.getElementById ("zone_name").innerHTML = cityName; 
        
        var humidityValue = res.main.humidity;
        document.getElementById ("zone_humidity").innerHTML = "Humidité : " + humidityValue + " %"; 
        
        var windSpeed = res.wind.speed;
        document.getElementById ("zone_wind").innerHTML = "Vitesse du Vent : " + windSpeed + " km/h"; 
    });
              
} 
