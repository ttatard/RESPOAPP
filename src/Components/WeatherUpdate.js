import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = {
    key: "962eb2dbdbbac1981f7fd74f9d3b538b",
    base: "https://api.openweathermap.org/data/2.5/",
}

function WeatherUpdate() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);

    const searchWeather = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`${api.base}weather`, {
                params: {
                    q: query,
                    appid: api.key,
                    units: 'metric' // You can adjust the units as needed
                }
            });
            setWeather(response.data);
            setQuery('');
        } catch (error) {
            // Handle error, e.g., display a message to the user
            console.error('Error fetching weather data:', error);
        }
    }

    return (
        <div>
            <form onSubmit={searchWeather}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {weather && (
                <div>
                    <h2>Weather in {weather.name}</h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Description: {weather.weather[0].description}</p>
                    {/* Add more weather information as needed */}
                </div>
            )}
        </div>
    );
}

export default WeatherUpdate;
