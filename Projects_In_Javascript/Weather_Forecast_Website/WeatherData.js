// Fetch weather data using a weather API
import { config } from './config.js';

 export default async function fetchWeatherData(latitude, longitude) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${config.WEATHER_APP_API_KEY}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const weatherContainer = document.getElementById('weather-container');
        weatherContainer.innerHTML = ''; // Clear any previous content
        data.list.forEach(item => {
            const date = item.dt_txt;
            const description = item.weather[0].description;
            const temperature = item.main.temp - 273.15;
            const humidity = item.main.humidity;
            const pressure = item.main.pressure;
            const sea_level = item.main.sea_level;
            const windSpeed = item.wind.speed;
            const visibility = item.visibility;
            const partofDay = item.sys.pod === "n" ? "Night" : "Day";
            
            // Create HTML elements to display the data
            const weatherElement = document.createElement('div');
            weatherElement.classList.add(
                'flex', 'flex-col', 'items-start', 'justify-between', 
                'min-w-[20vw]', 'max-w-[30vw]',
                'bg-gradient-to-r', 'from-cyan-400', 'to-blue-400',  
                'p-6', 'm-4', 'rounded-lg', 
                'relative', 'overflow-hidden',
                'text-white', 'border', 'border-white/20', 
                'shadow-lg', 
                'break-words', 
                'transition-transform', 'hover:scale-105', 'hover:shadow-xl',
                'flex-shrink-0'
            );
            

            weatherElement.innerHTML = `
                <h3 class="text-xl font-semibold mb-2">${date}</h3>
                <p class="text-lg mb-1">Description: ${description}</p>
                <p class="text-lg mb-1">Temperature: ${temperature.toFixed(2)}°C</p>
                <p class="text-lg mb-1">Pressure: ${pressure} hPa</p>
                <p class="text-lg mb-1">Humidity: ${humidity}%</p>
                <p class="text-lg mb-1">Sea Level: ${sea_level} m</p>
                <p class="text-lg mb-1">Wind Speed: ${windSpeed} m/s</p>
                <p class="text-lg mb-1">Visibility: ${visibility} m</p>
                <p class="text-lg mb-1">Part of Day: ${partofDay}</p>
            `;

            // Append the element to the container
            weatherContainer.appendChild(weatherElement);
        });

    } catch (error) {
        console.error('Error fetching weather data:', error.message, error.stack);
    }
}

