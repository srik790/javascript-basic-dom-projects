//Select the button element by its ID 'btn'
btn = document.getElementById('btn');

//Add a click event listener to the button element that calls the function 'getWeather'
btn.addEventListener('click', getWeather)

//Function that retrieves the current weather for the city entered by the user
async function getWeather() {

    //Get the value of the input field with the ID 'city'
    let city = document.getElementById('city').value;

    //Set the options for the API request
    //Customize food instruction to waiter
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '1b11cbd093msh769517372c1ba7ap197772jsn7cc7c00c7f6c',
    //         'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    //     }
    // };

    // //Fetch the data from the API and convert the response to JSON
    // let response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options);
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=553999dcc0054ef5a7384102232803&q=${city}`);
    
    //Print the data to the console for debugging

    let data = await response.json();
    console.log(data);
    showWeatherInUi(data)
}

//Function that displays the weather data in the UI
function showWeatherInUi(data) {


    //Set the values of the elements with the specified IDs to the corresponding data values from the API response
    document.getElementById("location").innerHTML = `${data.location.name}, ${data.location.region}`;
    document.getElementById("temp").innerHTML = `${data.current.temp_c}°C`;
    document.getElementById("condition").innerHTML = `${data.current.condition.text}`;
    document.getElementById("precip_in").innerHTML = `${data.current.wind_kph} km/h`;
    document.getElementById("humidity").innerHTML = `${data.current.humidity}`;
    document.getElementById("windSpeed").innerHTML = `${data.current.condition.text}`;
}