import { format } from 'date-fns'
import { AnimateIconWeather } from './AnimateIconWeather'


import WindIcon from '../components/assets/icons/wind.svg'


interface MainTemp {
  feels_like: number,
  humidity: number,
  temp: number,
  temp_max: number,
  temp_min: number 
}

interface Weather { 
  description: string,
  icon: string, 
  main: string
}

interface Wind { 
  deg: number,
  gust: number, 
  speed: number
}


export const WeatherWidget = ({name = '', main_temp, weather, wind} : {name:string, main_temp:MainTemp, weather:Weather, wind:Wind}) => {

  const ftoc = () => { 
    const { temp } = main_temp;  
    return Math.ceil((Math.ceil(temp) - 32 ) * 5/9 )
  }
  return (
    <>
<div className="w-64 border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
  <div className="text-md font-bold flex flex-col text-gray-900">
  <span className="uppercase">Today</span> 
  {/* today day, it is formatted with date-fns */}
  <span className="font-normal text-gray-700 text-sm">{format(new Date(), 'MMMM dd')}</span> 
  <span className="uppercase">{name}</span> 
  </div>
  <div className="w-32 h-32 flex items-center justify-center">
  

  {/* TODO: Icon need to be here */}
      <AnimateIconWeather iconCode={weather.icon}/>
    {/* Icon End */}
  </div>
  <p className="text-gray-700 mb-2">{weather.main}</p>
  <div className="text-3xl font-bold text-gray-900 mb-6">{Math.ceil(main_temp.temp)}ºF <span className="font-normal text-gray-700 mx-1">/</span>{ftoc()}ºC</div>
  <div className="flex justify-between w-full">
    <div className="flex items-center text-gray-700 px-10">
      <img src={WindIcon} alt="Wind" />
      {Math.ceil(wind.speed) }mph
    </div>
  </div>
  </div>
    </>
  )
}
