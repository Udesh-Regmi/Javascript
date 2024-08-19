export default async function fetchWeatherApi(url, params) {
    try {
        const queryString = new URLSearchParams(params).toString();
        const response = await fetch(`${url}?${queryString}`);
        const data = await response.json();
        return processWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
}

function processWeatherData(data) {
    const { hourly, ...datas } = data;

  
    return {
        location: {
            latitude: data.latitude,
            longitude: data.longitude,
            timezone: data.timezone,
            timezoneAbbreviation: data.timezone_abbreviation,
        },
        hourly: {
            time: hourly.time,
            temperature2m: hourly.temperature_2m,
        },
    };
}
//Testing 
// const url = "https://api.open-meteo.com/v1/forecast";
// const params = {
//     latitude: 24.02,
//     longitude: 85.06,
//     hourly: "temperature_2m",
//     timezone: "Asia/Bangkok",
// };

// fetchWeatherApi(url, params)
