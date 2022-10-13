//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const city = document.querySelector('input').value
  const url = `http://api.weatherapi.com/v1/forecast.json?key=88a1f1b3fe964541b2d182652222604&q=${city}&days=10&aqi=yes&alerts=no
  `

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let d = new Date();

        document.querySelector('h2').innerHTML = `Current Weather in ${city}`
        document.querySelector('#current-icon').src = data.current.condition.icon
        document.querySelector('#current-condition').innerHTML = data.current.condition.text
        document.querySelector('#current-condition').innerHTML = data.current.temp_c

        document.querySelector('#current-humidity').innerHTML = `${data.current.humidity}%`
        document.querySelector('#current-precip').innerHTML = `${data.current.precip_mm}mm`
        document.querySelector('#current-wind').innerHTML = `${data.current.wind_kph}kph`

        document.querySelector('#tomorrow').innerHTML = days[d.getDay()+1]
        document.querySelector('#tomorrow-icon').src = data.forecast.forecastday[0].day.condition.icon
        document.querySelector('#tomorrow-temp').innerHTML = `${data.forecast.forecastday[0].day.mintemp_c} - ${data.forecast.forecastday[0].day.maxtemp_c}`
        
        document.querySelector('#day-two').innerHTML = days[d.getDay()+2]
        document.querySelector('#two-icon').src = data.forecast.forecastday[1].day.condition.icon
        document.querySelector('#two-temp').innerHTML = `${data.forecast.forecastday[1].day.mintemp_c} - ${data.forecast.forecastday[1].day.maxtemp_c}`

        document.querySelector('#day-three').innerHTML = days[d.getDay()+3]
        document.querySelector('#three-icon').src = data.forecast.forecastday[2].day.condition.icon
        document.querySelector('#three-temp').innerHTML = `${data.forecast.forecastday[2].day.mintemp_c} - ${data.forecast.forecastday[2].day.maxtemp_c}`

        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
