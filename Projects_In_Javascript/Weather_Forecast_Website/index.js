import fetchWeatherApi from './Weather_Fetch.js';
import { config } from './config.js';
// Select elements
const detectLocationBtn = document.querySelector(".detect-location");
const mapIframe = document.querySelector("iframe");
const cityElement = document.querySelector(".city");
const temperatureElement = document.querySelector(".temperature");

// Event Listener
detectLocationBtn.addEventListener("click", getLocationUser);

// Main function to get user location
function getLocationUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Handle successful location retrieval
async function showPosition(position) {
    const { latitude, longitude } = position.coords;
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;
    mapIframe.src = mapUrl;

    try {
        const { city, timezone } = await getCityAndTimezone(latitude, longitude);
        cityElement.textContent = city;
        await fetchWeatherData(latitude, longitude, timezone);
        await fetchTimezonePhoto(city);
    } catch (error) {
        console.error('Error handling position:', error);
    }
}

// Handle errors in location retrieval
function showError(error) {
    const messages = {
        [error.PERMISSION_DENIED]: "User denied the request for Geolocation.",
        [error.POSITION_UNAVAILABLE]: "Location information is unavailable.",
        [error.TIMEOUT]: "The request to get user location timed out.",
        [error.UNKNOWN_ERROR]: "An unknown error occurred."
    };
    alert(messages[error.code] || "An unknown error occurred.");
}

async function getCityAndTimezone(latitude, longitude) {
    const apiKey = config.GEOAPIFY_KEY;  // Replace with your actual Geoapify API key
    const geocodeUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;
    
    try {
        const response = await fetch(geocodeUrl);
        const data = await response.json();
        console.log(data)
        const address = data.features[0].properties || {};
        const city = address.city || address.town || address.village || "City not found";
        const timezone = address.timezone || "UTC";
        console.log(city, timezone)
        return { city, timezone };
    } catch (error) {
        console.error("Error fetching city and timezone:", error);
        throw error;
    }
}
// Fetch an image from Unsplash based on the city
async function fetchTimezonePhoto(cityName) {
    const url = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${config.UNSPLASH_ACCESS_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data && data[0] && data[0].urls) {
            console.log(`Image URL: ${data[0].urls.regular}`);
            // Update DOM or use image URL as needed
        } else {
            console.error("No images found.");
        }
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}

// Fetch weather data using a weather API
async function fetchWeatherData(latitude, longitude, timezone) {
    const url = "https://api.open-meteo.com/v1/forecast";
    const params = new URLSearchParams({
        latitude,
        longitude,
        hourly: "temperature_2m",
        timezone
    }).toString();

    try {
        const data = await fetchWeatherApi(`${url}?${params}`);
        console.log(data);
        if (data && data.hourly && data.hourly.temperature_2m) {
            const averageTemperature = data.hourly.temperature_2m.reduce((sum, temp) => sum + temp, 0) / data.hourly.temperature_2m.length;
            temperatureElement.textContent = `Average Temperature: ${averageTemperature.toFixed(2)} °C`;
                   
        } else {
            console.error("Invalid weather data.");
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message, error.stack);
    }
}
