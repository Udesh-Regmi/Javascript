import fetchWeatherData from './WeatherData.js';
import { config } from './config.js';

// Select elements
const elements = {
    detectLocationBtn: document.querySelector(".detect-location"),
    mapIframe: document.querySelector("iframe"),
    formattedData: document.querySelector('.formattedData'),
    city: document.querySelector(".city"),
    // temperature: document.querySelector(".temperature"),
    // country: document.querySelector('.country'),
    // district: document.querySelector('.district'),
    // municipality: document.querySelector('.municipality'),
    // state: document.querySelector('.state'),
    // placeName: document.querySelector('.placeName'),
    // neighbourPlace: document.querySelector('.neighbourPlace')
};

elements.detectLocationBtn.addEventListener("click", getLocationUser);

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
    updateMapIframe(latitude, longitude);

    try {
        const locationData = await getCityAndTimezone(latitude, longitude);
        updateLocationElements(locationData);
        await fetchWeatherData(latitude, longitude);
        await fetchTimezonePhoto(locationData.city);
    } catch (error) {
        console.error('Error handling position:', error);
    }
}

// Update Google Maps iframe
function updateMapIframe(latitude, longitude) {
    const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;
    elements.mapIframe.src = mapUrl;
}

// Update location-related DOM elements using a loop
function updateLocationElements(locationData) {
    for (const key in locationData) {
        if (elements[key]) {
            elements[key].textContent = locationData[key];
        }
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


// Add event listener for search functionality
const searchInput = document.getElementById('location-search');
const searchButton = document.querySelector('.search button');

searchButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const location = searchInput.value.trim();

    if (location) {
        try {
            const geocodeData = await getCoordinatesFromLocation(location);
            if (geocodeData) {
                const { latitude, longitude } = geocodeData;
                updateMapIframe(latitude, longitude);

                const locationData = await getCityAndTimezone(latitude, longitude);
                updateLocationElements(locationData);
                await fetchWeatherData(latitude, longitude);
                await fetchTimezonePhoto(locationData.city);
            } else {
                alert("Location not found. Please try another search term.");
            }
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    } else {
        alert("Please enter a location to search.");
    }
});

// Function to get coordinates from a location name using Geoapify or any other geocoding API
async function getCoordinatesFromLocation(location) {
    const apiKey = config.GEOAPIFY_KEY;
    const geocodeUrl = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(location)}&apiKey=${apiKey}`;

    try {
        const response = await fetch(geocodeUrl);
        const data = await response.json();
        if (data.features && data.features.length > 0) {
            const { lat, lon } = data.features[0].properties;
            return { latitude: lat, longitude: lon };
        } else {
            console.error("No geocode data found.");
            return null;
        }
    } catch (error) {
        console.error("Error fetching coordinates from location:", error);
        throw error;
    }
}

// Get city and timezone using reverse geocoding
async function getCityAndTimezone(latitude, longitude) {
    const apiKey = config.GEOAPIFY_KEY;
    const geocodeUrl = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${apiKey}`;

    try {
        const response = await fetch(geocodeUrl);
        const data = await response.json();
        const address = data.features[0].properties;
        return {
            formattedData: address.formatted || "Formatted data not found",
            city: address.city || address.village || "City not found",
            // country: address.country || "No country detected",
            // district: address.district || "District not found",
            // municipality: address.municipality || "Municipality not found",
            // state: address.state || "State not found",
            // placeName: address.suburb || "Place not found",
            // neighbourPlace: address.neighbourhood || "Neighbour not found",
            // timezone: address.timezone || "UTC"
        };
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
        if (data.results && data.results[0] && data.results[0].urls) {
            // console.log(`Image URL: ${data.results[0].urls.regular}`);
         const imageElem=   document.querySelector('.image-location >img ')
         imageElem.src= data.results[0].urls.regular
        } else {
            console.error("No images found.");
        }
    } catch (error) {
        console.error("Error fetching the image:", error);
    }
}
