

# Weather Forecast Application

## Overview

This Weather Forecast Application provides users with real-time weather updates and location-based information. It features a user-friendly interface built with HTML, Tailwind CSS, and GSAP for animations. The application uses various APIs for weather data, geolocation, and city images.

## Features

- **Location Search:** Users can search for weather information by location.
- **Detect Location:** Automatically detect the user's current location.
- **Weather Information:** Displays weather details in a card format, including temperature, pressure, humidity, and more.
- **Google Maps Integration:** Shows a map of the location using an iframe.
- **City Images:** Displays an image of the city fetched from Unsplash.

## Technologies Used

- **HTML**: Structure of the application.
- **Tailwind CSS**: Styling and layout of the application.
- **Google Maps API**: Maps integration.
- **Geoapify API**: Geocoding and reverse geocoding.
- **Unsplash API**: Fetching city-related images.
- **OpenWeatherMap API**: Fetching weather data.

## File Structure

- `index.html`: Main HTML file for the application.
- `index.js`: JavaScript file that handles location detection, weather data fetching, and UI updates.
- `WeatherData.js`: JavaScript module that contains functions for fetching weather data.
- `config.js`: Configuration file for storing API keys and other settings.

## Installation

To run this application locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Udesh-Regmi/Javascript
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd your-project-directory
   ```

3. **Open `index.html` in a Web Browser:**

   Simply open the `index.html` file in your preferred web browser to view the application.

## Usage

- **Search Location:** Enter a location in the search box and click the search button to get weather information.
- **Detect Location:** Click the "Detect Location" button to automatically detect and display the current location's weather.

## JavaScript Functionality

- **Location Detection:**
  - Uses the browser's geolocation API to get the user's current position.
  - Updates the Google Maps iframe and fetches weather data based on the detected location.

- **Search Functionality:**
  - Allows users to search for a location and fetches weather data based on the search result.
  - Updates the map and weather details accordingly.

- **Weather Data Fetching:**
  - Fetches weather data from the OpenWeatherMap API and displays it in a card format.
  - Updates weather details such as temperature, pressure, humidity, and wind speed.

- **City Image Fetching:**
  - Fetches an image related to the city from Unsplash and updates the image on the page.

## Configuration

Create a `config.js` file with the following content and add your API keys:

```javascript
export const config = {
    GEOAPIFY_KEY: 'YOUR_GEOAPIFY_API_KEY',
    UNSPLASH_ACCESS_KEY: 'YOUR_UNSPLASH_ACCESS_KEY',
    WEATHER_APP_API_KEY: 'YOUR_OPENWEATHERMAP_API_KEY'
};
```

## Known Issues

- Ensure that your browser has access to location services if using the "Detect Location" feature.
- Make sure the API keys are valid and properly configured in the `config.js` file.

## Contributing

Contributions are welcome! If you have any improvements or fixes, please create a pull request or open an issue on the [GitHub repository](https://github.com/your-repository-url).



## Contact

For any questions or feedback, please reach out to [Udesh Regmi](https://www.linkedin.com/in/udesh-regmi/).

---

