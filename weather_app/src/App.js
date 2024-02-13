import { useState } from 'react';

import SearchForm from './components/SearchForm';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

const API_ID = process.env.REACT_APP_API_ID;

const mainPictures = {
  "Snow": "/snow.png",
  "Rain": "/heavy-rain.png",
  "Clouds": "/cloud.png",
  "Clear": "/sunny.png",
  "Smoke": "/carbon-dioxide.png",
  "Drizzle": "/drizzle.png",
};


function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(
    {
      temp: "",
      pressure: "",
      humidity: "",
      cityName: "",
      windSpeed: "",
      main: "",
      errorMessage: "",
    }
  );

  const onChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(!event.target.elements.cityName.value) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${API_ID}`;


    fetch(url).then(res => {
      return res.json()
    }).then(data => {
      if(data.cod === "404"){
        setData({
          errorMessage: "City not found",
        })
      } else {
          setData({
            temp: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            cityName: data.name,
            windSpeed: data.wind.speed,
            main: data.weather[0].main
          });
      }
    });
  };

  return (
    <div className="container d-flex flex-column">
        <div className="container border border-dark rounded bg-light mt-5 p-3 d-flex flex-column">
            <SearchForm onChange={onChange} city={city} onSubmit={onSubmit} />
            <hr />
            <MainContainer 
              city={data.cityName} 
              temperature={data.temp} 
              humidity={data.humidity} 
              windSpeed={data.windSpeed} 
              pressure={data.pressure} 
              errorMessage={data.errorMessage} 
              main={data.main}
              image={<img src={mainPictures[data.main]} />}
              />
        </div>
        <div>
          <Footer imageSource={"sunny.png"} />
        </div>
    </div>

  );
};

export default App;
