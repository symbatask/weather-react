import React from 'react';

const Weather = ({weather}) => {
    return (
        <div>
            <img src="" alt=""/>
            <div className="weather__temp">City: {weather.name}</div>
            <div className="weather__temp">Temp: {weather.main.temp}</div>
            <div className="weather__wind">Wind Speed: {weather.wind.speed}</div>
            <div className="weather__temp">Humidity: {weather.main.humidity}</div>
            <div className="weather__temp">Pressure: {weather.main.pressure}</div>
        </div>
    );
};

export default Weather;