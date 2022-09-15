
let weather = {
    apikey: "8d232b065e2f865b059924a47a618332",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            +"&units=metric&lang=fr&appid="
            + this.apikey).then((response) => response.json())
            .then((data) => this.displayWeather(data));
            if ( city== '' ) { 
                document.getElementById('warning').innerText = "Écrire une ville";}
    },

    displayWeather: function(data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      const { feels_like} = data.main;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "La météo à " + name;
      document.querySelector(".icon").src= 
      "http://openweathermap.org/img/wn/"+ icon + "@2x.png";
      document.querySelector(".feel").innerText = "ressenti: " + feels_like + "°C";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = + temp + "°C";
      document.querySelector(".humidity").innerText = "Humidité: " + humidity + "%";
      document.querySelector(".wind").innerText = "Vitesse du vent: " + speed + "km/h";
      if( this.displayWeather() == 0){
        document.getElementById('warning').innerText = "Écrire une ville valide"
      }
        },

     search: function() {
     this.fetchWeather(document.querySelector(".search-bar").value);
    }
}
    
    
document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
});

this.document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter"){
     weather.search();   
    }
})
