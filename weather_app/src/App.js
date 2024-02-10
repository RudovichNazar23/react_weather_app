import { useState } from 'react';

import SearchForm from './components/SearchForm';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(
    {
      temp: "",
      pressure: "",
      humidity: "",
      cityName: "",
      windSpeed: "",
      main: ""
    }
  );

  const onChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(!event.target.elements.cityName.value) return;

    const apiId = process.env.REACT_APP_API_ID;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiId}`;


    fetch(url).then(res => {
      return res.json()
    }).then(data => {
      setData({
        temp: data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        cityName: data.name,
        windSpeed: data.wind.speed,
        main: data.weather[0].main
      });
    });
  };

  return (
    <div className="container d-flex flex-column">
        <div className="container border border-dark rounded bg-light mt-5 p-3 d-flex flex-column">
            <SearchForm onChange={onChange} city={city} onSubmit={onSubmit} />
            <hr />
            <MainContainer city={data.cityName} temperature={data.temp} humidity={data.humidity} windSpeed={data.windSpeed} pressure={data.pressure} />
        </div>
        <div>
          <Footer imageSource={"sunny.png"} />
        </div>
    </div>

  );
};

export default App;
