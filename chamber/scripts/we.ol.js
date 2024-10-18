// Adding the year and last modified to the footer
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Adding the functionality to the ham button
const hamButton = document.querySelector('#menu');
const navMenu = document.querySelector('.open-menu');
const header = document.querySelector('.header');

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navMenu.classList.toggle('open');
    header.classList.toggle('gap');
});

// Home Page scripts
const weatherIcon = document.createElement('img');
const weatherDisplay = document.querySelector('.weather-display');
const weatherInfo = document.querySelector('#weather-info');
const forecastInfo = document.querySelector('#forecast-weather-info');
const advertising = document.querySelector('#advertising');

const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=12.113560033331286&lon=-86.2354811759951&appid=e4ecd0c975a7d843f411d8205c8a8aa3&units=metric';
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=12.113560033331286&lon=-86.2354811759951&cnt=24&appid=e4ecd0c975a7d843f411d8205c8a8aa3&units=metric`;

const fecthingCurrentWeatherData = async () => {
    try {
        const weatherResponse = await fetch(weatherUrl);
        if (!weatherResponse.ok) {
            throw new Error(`Response status: ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.log(error.message);
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
    }
};

const averageForecastTemp = async () => {
    const forecastData = await fetchingForecastWeather();

    const firstDayForecastData = forecastData.list.slice(0, 8);
    const firstDayAverageTemp = firstDayForecastData.reduce((total, day) => total + day.main.temp, 0) / firstDayForecastData.length;

    const secondDayForecastData = forecastData.list.slice(8, 16);
    const secondDayAverageTemp = secondDayForecastData.reduce((total, day) => total + day.main.temp, 0) / secondDayForecastData.length;

    const thirdDayForecastData = forecastData.list.slice(16, 24);
    const thirdDayAverageTemp = thirdDayForecastData.reduce((total, day) => total + day.main.temp, 0) / thirdDayForecastData.length;

    return {
        firstDayData: { temp: firstDayAverageTemp, date: firstDayForecastData[0].dt_txt },
        secondDayData: { temp: secondDayAverageTemp, date: secondDayForecastData[0].dt_txt },
        thirdDayData: { temp: thirdDayAverageTemp, date: thirdDayForecastData[0].dt_txt }
    };
};

async function populatingForecastWeather() {
    const { firstDayData, secondDayData, thirdDayData } = await averageForecastTemp();

    forecastInfo.innerHTML = `
        <li>Tomorrow: <strong>${firstDayData.temp.toFixed(0)}&deg;C</strong></li>
        <li>${new Date(secondDayData.date).toLocaleString('en-US', { weekday: 'long' })}: <strong>${secondDayData.temp.toFixed(0)}&deg;C</strong></li>
        <li>${new Date(thirdDayData.date).toLocaleString('en-US', { weekday: 'long' })}: <strong>${thirdDayData.temp.toFixed(0)}&deg;C</strong></li>
    `;
}
function populatingCurrentWeather(data) {
    weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    weatherIcon.setAttribute('alt', 'The current weather icon');
    weatherIcon.setAttribute('width', 150);
    weatherIcon.setAttribute('height', 150);
    weatherDisplay.appendChild(weatherIcon);

    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    weatherInfo.innerHTML = `
        <p><strong>${data.main.temp}&deg;</strong> C</p>
        <p>${data.weather[0].description}</p>
        <p>High: ${data.main.temp_max}&deg;</p>
        <p>Low: ${data.main.temp_min}&deg;</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Sunrise: ${sunriseTime}</p>
        <p>Sunset: ${sunsetTime}</p>
    `;
}
const displayCurrentWeather = async () => {
    const weatherData = await fecthingCurrentWeatherData();
    if (weatherData) {
        populatingCurrentWeather(weatherData);
    }
};

function shuffleCompanies(companies) {
    return companies.sort(() => Math.random() - 0.5);
}