var weather = new XMLHttpRequest(); 
weather.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=6453974&APPID={b34ed25c6c013c1d9db0537a1b65a859}');
weather.onreadystatechange = function() {
  if (weather.readyState === 4) {
    alert(weather.responseText);
  }
};
weather.send();
