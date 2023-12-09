import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './CSS/WeatherUpdate1.css';
import line1 from './Images/Dashboard1/line1.png';
import logo1 from './Images/Dashboard1/logo1.png';

export const WeatherUpdate1 = ({ onLogout }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [dataStatus, setDataStatus] = useState('loading');
    const [forecastIndex, setForecastIndex] = useState(0);
    const api = {
        key: "962eb2dbdbbac1981f7fd74f9d3b538b",
        base: "https://api.openweathermap.org/data/2.5/",
      };

      const handleLogout = () => {
        onLogout();
        navigate('/login');
      };
    
      const searchWeather = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(`${api.base}weather`, {
            params: {
              q: query,
              appid: api.key,
              units: 'metric'
            }
          });
          setWeather(response.data);
          setDataStatus('available');
          setQuery('');
          const forecastResponse = await axios.get(`${api.base}forecast`, {
            params: {
              id: response.data.id,
              appid: api.key,
              units: 'metric'
            }
          });
          setForecast(forecastResponse.data.list);
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setDataStatus('unavailable');
        }
      };
    
      useEffect(() => {
        const weatherInfo = document.querySelector('.weather-info');
        if (weather && weather.weather && weather.weather[0]) {
          const weatherDescription = weather.weather[0].main;
          weatherInfo.setAttribute('data-weather', weatherDescription);
        }
      }, [weather]);
    
      const getIconUrl = (iconCode) => {
        return `http://openweathermap.org/img/w/${iconCode}.png`;
      };
    
      const showNextForecast = () => {
        if (forecastIndex + 3 < forecast.length) {
          setForecastIndex(forecastIndex + 3);
        }
      };
    
      const showPreviousForecast = () => {
        if (forecastIndex - 3 >= 0) {
          setForecastIndex(forecastIndex - 3);
        }
      };

      return (
        <div className="weather-update">
            <div className="nav">
                {/* Navigation elements */}
                <p className="WEATHER-UPDATE">
                    <span className="text-wrapper">WEATHER </span>
                    <span className="span">UPDATE</span>
                </p>
                <button className="inverted">
                    <img alt="Inverted" src={logo1} />
                </button>
                <nav>
                    <button className="text-wrapper-2">Call for Help</button>
                </nav>
                <nav>
                    <button className="text-wrapper-3" to="/weather-update">Weather Update</button>
                </nav>
                <nav>
                    <button className="text-wrapper-4">Emergency Tutorials</button>
                </nav>
                <nav>
                    <button className="text-wrapper-5">Log-out</button>
                </nav>
               
            </div>

            {/* Weather content section */}
            <div className="weather-content">
            <div className="weather-content-container">
                <form onSubmit={searchWeather} className="search-form">
                    <input
                        type="text"
                        placeholder="Enter location"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit">Search</button>
                </form>

                {/* Weather details */}
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
                        </div>
                    </div>
                )}
                {dataStatus === 'unavailable' && (
                    <p className="error-message">
                        Weather information for this area is not available.
                    </p>
                )}

                {/* Forecast */}
                {dataStatus === 'available' && weather && (
                    <div className="forecast">
                        {forecast.slice(forecastIndex, forecastIndex + 3).map((item, index) => (
                            <div key={index} className="forecast-item">
                                <p>Date: {item.dt_txt}</p>
                                <p>Temperature: {Math.round(item.main.temp)}°C</p>
                                <p>Description: {item.weather[0].description}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* Forecast navigation */}
                {dataStatus === 'available' && weather && (
                    <div className="forecast-navigation">
                        <button onClick={showPreviousForecast} disabled={forecastIndex === 0}>
                            Previous
                        </button>
                        <button
                            onClick={showNextForecast}
                            disabled={forecastIndex + 3 >= forecast.length}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
            </div>

            {/* Footer */}
            <footer>
                 <img className="line" alt="Line" src={line1} />
                <p className="p">Copyright © 2023 RESPO Inc. All rights reserved</p>
                <div className="text-wrapper-6">Cebu City, Philippines</div>
            </footer>
        </div>
    );
};


export default WeatherUpdate1;