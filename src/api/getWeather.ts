import { weatherApi } from "./weatherApi"


export const getWeather = async({search}: {search:string}) => {  
    const { data } = await weatherApi.get(`weather?q=${search}&units=imperial&APPID=${import.meta.env.VITE_API_KEY}`)
    
    return { 
        data: data, 
        main_temp: data.main, 
        name: data.name, 
        weather: data.weather[0],
        wind: data.wind
    }
}