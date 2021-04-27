import React, {useState, useEffect} from 'react'
import Weather from "./components/Weather";
import axios from "axios";
import './App.css'

function App() {
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState('')
    const [notFound, setNotFound] = useState(false)

    const getWeather = () => {
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city || 'Dubai'}&units=metric&appid=9e2caf010a6d3e3cba1432501dab9869`)
            .then(rec => {
                setWeather(rec.data)
                setNotFound(false)
            })
            .catch(() => setNotFound(true))
    }
    const handleClick = () => {
        getWeather()
        setCity('')
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <div className="app">
            {weather.main === undefined ? 'Loading...' :
                <div className="info">
                    <h1>Weather</h1>
                    <div className="info__flex">
                        <div>
                            <input className='inp' type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                            <button onClick={handleClick}>view</button>
                            {notFound && <div>undefined</div>}
                            {!notFound && <Weather weather={weather}/>}
                        </div>
                        <img className="img" src="https://icon-library.com/images/sunny-weather-icon/sunny-weather-icon-13.jpg" alt=""/>
                    </div>
                </div>
            }
        </div>
    )
}

export default App