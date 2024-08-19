export default  weatherData = {
  date: new Date().toISOString().split('T')[0], 
  weather_conditions: [
    {
      condition: "Sunny",
      description: "Clear sky with lots of sunshine.",
      image_url: "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=1024x1024&w=is&k=20&c=P68MuQDaXK7NM55yd1ivyrW7NZ2CokCNSfDcXe8BdH0="
    },
    {
      condition: "Windy",
      description: "Strong winds blowing throughout the day.",
      image_url: "https://media.istockphoto.com/id/542795898/photo/before-the-storm.webp?b=1&s=612x612&w=0&k=20&c=d3qSzi8oyw_L5uq_cXJNEOzZ7Tf5TwaXj8F6c6Xr4-A="
    },
    {
      condition: "Foggy",
      description: "Low visibility due to dense fog.",
      image_url: "https://images.unsplash.com/photo-1723222363075-99d5ae312917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9nZ3lkYXl8ZW58MHx8MHx8fDA%3D"
    },
    {
      condition: "Rainy",
      description: "Persistent rain showers.",
      image_url: "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=1024x1024&w=is&k=20&c=U6uwI27fEfgEAl9j_Hz848FgLRidd9Ww0kPCkc0FZB8="
    },
    {
      condition: "Snowy",
      description: "Snowfall with accumulation on the ground.",
      image_url: "https://media.istockphoto.com/id/453067967/photo/panorama-of-the-winter-morning.webp?b=1&s=612x612&w=0&k=20&c=1g2fonJVWtQUBIpvFNqMyX6XAvgq_9YW6Gu14lW-G7A="
    },
    {
      condition: "Cloudy",
      description: "Overcast sky with clouds covering most of the sky.",
      image_url: "https://media.istockphoto.com/id/884015038/photo/over-head-shot-of-rain-cloud-weather-change.webp?b=1&s=612x612&w=0&k=20&c=1bwBgOekOEq2SxBHG4XAuMOiicfDvma8bIZ9qXt0O0k="
    },
    {
      condition: "Stormy",
      description: "Thunderstorms with lightning and heavy rain.",
      image_url: "https://plus.unsplash.com/premium_photo-1673278171347-0df4b2a05f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcm15ZGF5fGVufDB8fDB8fHww"
    }
  ]
};
