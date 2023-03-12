
btn = document.getElementById('btn');
btn.addEventListener('click',getWeather)


function getWeather(){

    let city = document.getElementById('city').value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1b11cbd093msh769517372c1ba7ap197772jsn7cc7c00c7f6c',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
        .then(response => response.json())
        .then(response => showWeatherInUi(response))
        .catch(err => console.error(err));
    
}

function showWeatherInUi(data){
    console.log(data);
    debugger;

      document.getElementById("location").innerHTML = `Current Weather in ${data.location.name}, ${data.location.region}`;
      document.getElementById("temp").innerHTML = `Temperature: ${data.current.temp_c}°C`;
      document.getElementById("condition").innerHTML = `Condition: ${data.current.condition.text}`;
      document.getElementById("precip_in").innerHTML = `Perci: ${data.current.wind_kph} km/h`;
      document.getElementById("humidity").innerHTML = `Humidity: ${data.current.humidity}`;
      document.getElementById("windSpeed").innerHTML = `Wind Speed: ${data.current.condition.text}`;

}



