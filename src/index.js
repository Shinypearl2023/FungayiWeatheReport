

// API Key for OpenWeather API
const apiKey = "7oadaff804bbddf8a15t3480228f87b3"; // Replace with your OpenWeather API key

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    let city = document.getElementById('city-input').value;
    getWeatherData(city);
});

function getWeatherData(city) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(error => alert("City not found"));
}

function displayWeatherData(data) {
    // Extracting the data
    let cityName = data.name;
    let temperature = Math.round(data.main.temp);
    let description = data.weather[0].description;
    let humidity = data.main.humidity;
    let windSpeed = Math.round(data.wind.speed * 3.6); // Convert from m/s to km/h
    let icon = data.weather[0].icon;

    // Displaying the data
    document.getElementById('city-name').textContent = cityName;
    document.getElementById('temperature').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}"> ${temperature}°C`;
    document.getElementById('weather-description').innerHTML = `${description.charAt(0).toUpperCase() + description.slice(1)} <br> Humidity: <span>${humidity}%</span> Wind: <span>${windSpeed} km/h</span>`;
}
