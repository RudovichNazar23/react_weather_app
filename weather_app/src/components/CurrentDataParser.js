import TemperatureConverter from "./TemperatureConverter"
import SpeedConverter from "./SpeedConverter"


function CurrentDataParser(data){
    const currentWeather = data.currentConditions;

    const resultData = {
        temp: TemperatureConverter(currentWeather.temp),
        pressure: currentWeather.pressure,
        humidity: currentWeather.humidity,
        windSpeed: SpeedConverter(currentWeather.windspeed),
        conditions: currentWeather.conditions,
        cityName: data.address,
        icon: currentWeather.icon,
        errorMessage: ""
      }

    return resultData;
    
}

export default CurrentDataParser;
