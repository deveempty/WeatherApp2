
import Day from '../components/assets/icons/day.svg'
import CloudyDay from '../components/assets/icons/cloudy-day.svg'
import CloudyNight from '../components/assets/icons/cloudy-night.svg'
import Night from '../components/assets/icons/night.svg'
import OvercastDay from '../components/assets/icons/overcast-day.svg'
import OvercastNight from '../components/assets/icons/overcast-night.svg'
import Overcast from '../components/assets/icons/overcast.svg'
import Rain from '../components/assets/icons/rain.svg'
import CloudDayRain from '../components/assets/icons/cloudy-day-rain.svg'
import NightRain from '../components/assets/icons/night-rain.svg'
import Snow from '../components/assets/icons/snow.svg'
import DaySnow from '../components/assets/icons/day-snow.svg'
import NightSnow from '../components/assets/icons/night-snow.svg'
import ThunderStormDay from '../components/assets/icons/thunderstorms-day.svg'
import ThunderStormNight from '../components/assets/icons/thunderstorms-night.svg'
import MistDay from '../components/assets/icons/mist-day.svg'
import MistNight from '../components/assets/icons/mist-night.svg'
import Cloud from '../components/assets/icons/cloudy.svg'

const iconMap = {

    "01d": <img src={Day} alt="Day Icon" />,
    "01n": <img src={Night} alt="Night Icon" />,
    "02d": <img src={CloudyDay} alt="Cloudy Icon" />,
    "02n": <img src={CloudyNight} alt="Cloudy Icon" />,
    "03d": <img src={OvercastDay} alt="Cloudy Icon" />,
    "03n": <img src={OvercastNight} alt="Cloudy Icon" />, 
    "04d": <img src={Overcast} alt="Cloudy Icon" />, //change
    "04n": <img src={Overcast} alt="Cloudy Icon" />, // change
    "09d": <img src={CloudDayRain} alt="Rainy Icon" />, // change
    "09n": <img src={NightRain} alt="Rainy Icon" />,
    "10d": <img src={CloudDayRain} alt="Rainy Icon" />,
    "10n": <img src={NightRain} alt="Rainy Icon" />,
    "11d": <img src={ThunderStormDay} alt="Thunder Icon" />,
    "11n": <img src={ThunderStormNight} alt="Thunder Icon" />, // change, need to be night
    "13d": <img src={DaySnow} alt="Snow Icon" />,
    "13n": <img src={NightSnow} alt="Snow Icon" />,
    "50d": <img src={MistDay} alt="Icon" />,
    "50n": <img src={MistNight} alt="Icon" />

}

export const AnimateIconWeather = ({iconCode}:{iconCode:string}) => {
    const icon = iconMap[iconCode] || <img src={Cloud} alt="Icon" />
    return icon;
}
