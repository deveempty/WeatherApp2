import { ChangeEvent, useState } from 'react';
import { getWeather } from './api/getWeather';
import { weatherApi } from './api/weatherApi';
import { WeatherWidget } from './components/WeatherWidget';

import 'animate.css'

interface WeatherData {
  name: string,
  main_temp: any,
  weather: any,
  wind: any
}

export const App = () => {
  const [search, setSearch] = useState<string>('')
  const [activeSearch, setActiveSearch] = useState<boolean>(false)
  const [weatherData, setWeatherData] = useState<WeatherData>({
    name: '',
    main_temp: {}, 
    weather: {},
    wind: {}
  })
  
  const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearch(value)   
}    
  const onSubmitSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
      const { data, main_temp, name, weather, wind } = await getWeather({search: search})   
      console.log("🚀 ~ file: App.tsx:28 ~ onSubmitSearch ~ data", data)
      setWeatherData({
        name, 
        main_temp: main_temp,
        weather: weather,
        wind: wind
      })
      setSearch('')
      setActiveSearch(true)
      
  }


  return (
    <>
      <section className="bg-cyan-600 text-white">
        <div
          className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="text-white opacity-75 text-3xl font-extrabold sm:text-5xl"
            >
              WeatherApp
            </h1>
              <form onSubmit={onSubmitSearch}>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <input 
                  className="w-full py-3 pl-10 pr-4 shadow-md text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" 
                  placeholder="Search"
                  type="text"
                  value={search}
                  onChange={onInputChange}
                  /> 
                  </div>
                </form>
                {
                  !!activeSearch ? <div className='mt-2 flex flex-wrap justify-center animate__animated animate__fadeIn' >
                  <WeatherWidget name={weatherData.name} main_temp={weatherData.main_temp} weather={weatherData.weather} wind={weatherData.wind}/> 
                </div> : ''
                
                }
          </div>
        </div>
      </section>

    </>
  )
}
