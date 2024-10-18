// Home Page scripts
document.addEventListener('DOMContentLoaded', async () => {
    const weatherIcon = document.createElement('img');
    const weatherDisplay = document.querySelector('.weather-display');
    const weatherInfo = document.querySelector('#weather-info');
    const forecastInfo = document.querySelector('#forecast-weather-info');
    
    const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=12.113560033331286&lon=-86.2354811759951&appid=e4ecd0c975a7d843f411d8205c8a8aa3&units=metric';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=12.113560033331286&lon=-86.2354811759951&cnt=24&appid=e4ecd0c975a7d843f411d8205c8a8aa3&units=metric';

    const fetchingCurrentWeatherData = async () => {
        try {
            const weatherResponse = await fetch(weatherUrl);
            if (!weatherResponse.ok) {
                throw new Error(`Response status: ${weatherResponse.status}`);
            }

            const weatherData = await weatherResponse.json();
            return weatherData;
        } catch (error) {
            console.log(error.message);
            weatherInfo.textContent = 'Unable to fetch current weather data.';
        }
    };

    const fetchingForecastWeather = async () => {
        try {
            const forecastResponse = await fetch(forecastUrl);
            if (!forecastResponse.ok) {
                throw new Error(`Response status: ${forecastResponse.status}`);
            }

            const forecastData = await forecastResponse.json();
            return forecastData;
        } catch (error) {
            console.log(error.message);
            forecastInfo.textContent = 'Unable to fetch weather forecast.';
        }
    };

    // Display current weather data
    const displayCurrentWeather = async () => {
        const weatherData = await fetchingCurrentWeatherData();
        if (weatherData) {
            weatherInfo.innerHTML = `
                <p>Temperature: ${weatherData.main.temp}°C</p>
                <p>Condition: ${weatherData.weather[0].description}</p>
            `;
            weatherIcon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
            weatherIcon.alt = weatherData.weather[0].description;
            weatherInfo.appendChild(weatherIcon);
        }
    };

    // Display weather forecast data
    const displayWeatherForecast = async () => {
        const forecastData = await fetchingForecastWeather();
        if (forecastData) {
            forecastData.list.slice(0, 5).forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item.dt_txt}: ${item.main.temp}°C - ${item.weather[0].description}`;
                forecastInfo.appendChild(li);
            });
        }
    };

    // Run the display functions
    await displayCurrentWeather();
    await displayWeatherForecast();
});
