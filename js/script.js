
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDayForecast() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchNextDaysForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const mainTomorrow = data.list[1].weather[0].main;
      const descriptionTomorrow = data.list[1].weather[0].description;
      const tempTomorrow = data.list[1].temp.day;
      const iconTomorrow = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      const mainAfterTomorrow = data.list[2].weather[0].main;
      const descriptionAfterTomorrow = data.list[2].weather[0].description;
      const tempAfterTomorrow = data.list[2].temp.day;
      const iconAfterTomorrow = apiWeather.getHTMLElementFromIcon(data.list[2].weather[0].icon);

      const mainAfterTomorrow2 = data.list[3].weather[0].main;
      const descriptionAfterTomorrow2 = data.list[3].weather[0].description;
      const tempAfterTomorrow2 = data.list[3].temp.day;
      const iconAfterTomorrow2 = apiWeather.getHTMLElementFromIcon(data.list[3].weather[0].icon);


      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = mainTomorrow ;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = descriptionTomorrow;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = iconTomorrow;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${tempTomorrow}°C`;

      document.getElementById('after-tomorrow-forecast-main').innerHTML = mainAfterTomorrow ;
      document.getElementById('after-tomorrow-forecast-more-info').innerHTML = descriptionAfterTomorrow;
      document.getElementById('after-tomorrow-icon-weather-container').innerHTML = iconAfterTomorrow;
      document.getElementById('after-tomorrow-forecast-temp').innerHTML = `${tempAfterTomorrow}°C`;

      document.getElementById('after-tomorrow2-forecast-main').innerHTML = mainAfterTomorrow2 ;
      document.getElementById('after-tomorrow2-forecast-more-info').innerHTML = descriptionAfterTomorrow2;
      document.getElementById('after-tomorrow2-icon-weather-container').innerHTML = iconAfterTomorrow2;
      document.getElementById('after-tomorrow2-forecast-temp').innerHTML = `${tempAfterTomorrow2}°C`;

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

}
