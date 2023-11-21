import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/WeatherUpdate.css';

const api = {
    key: "962eb2dbdbbac1981f7fd74f9d3b538b",
    base: "https://api.openweathermap.org/data/2.5/",
};

const WeatherUpdate = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const [dataStatus, setDataStatus] = useState('loading');

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
            setDataStatus('available');
            setQuery('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setDataStatus('unavailable');
        }
    };

    useEffect(() => {
        // Apply animation based on weather description
        const weatherInfo = document.querySelector('.weather-info');
        if (weather && weather.weather && weather.weather[0]) {
            const weatherDescription = weather.weather[0].main;
            weatherInfo.setAttribute('data-weather', weatherDescription);
        }
    }, [weather]);

    const getIconUrl = (iconCode) => {
        return `http://openweathermap.org/img/w/${iconCode}.png`;
    };

    return (
        <div className="weather-container">
            <form onSubmit={searchWeather}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            {dataStatus === 'loading' && <p>Loading...</p>}
            {dataStatus === 'available' && weather && (
                <div className="weather-info">
                    <h2>{weather.name} Weather Forecast</h2>
                    <div className="weather-details">
                        <div className="weather-icon">
                            <img
                                src={getIconUrl(weather.weather[0].icon)}
                                alt={weather.weather[0].description}
                            />
                        </div>
                        <div className="temperature">
                            {Math.round(weather.main.temp)}°C
                        </div>
                        <div className="description">
                            {weather.weather[0].description}
                        </div>
                    </div>
                    <div className="additional-info">
                        <p>Humidity: {weather.main.humidity}%</p>
                        <p>Wind Speed: {weather.wind.speed} m/s</p>
                        {/* Add more weather information as needed */}
                    </div>
                </div>
            )}
            {dataStatus === 'unavailable' && (
                <p className="error-message">
                    Weather information for this area is not available.
                </p>
            )}
        </div>
    );
};

export default WeatherUpdate;
