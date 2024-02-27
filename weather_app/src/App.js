import { useState, useReducer } from 'react';

import LoadDataReducer from './reducers/LoadDataReducer';
import SearchForm from './components/SearchForm';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import CurrentDataParser from './components/CurrentDataParser';

const API_ID = process.env.REACT_APP_API_ID;

const weatherIcons = {
  "cloudy": <img src="/cloud.png" />,
  "partly-cloudy-night": <img src="/part-cloud-night.png" />,
  "partly-cloudy-day": <img src={"/part-cloud.png"}></img>,
  "clear": <img src="/sunny.png" />,
  "clear-night": <img src="/clear-night.png"></img>,
  "rain": <img src="/heavy-rain.png"></img>,
  "snow": <img src="/snow.png" />
};

const initialState = {
  type: "INITIALIZE",
  message: "Please, type city where you want to check current forecast",
  error: null,
  result: null
}


function App() {
  const [city, setCity] = useState("");
  const [state, dispatch] = useReducer(LoadDataReducer, initialState)
  const [futureData, setFutureData] = useState();


  const onChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if(!event.target.elements.cityName.value) return;

    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_ID}`;
    dispatch({ type: "LOADING", payload: "Loading"})
    let myInterval = setInterval(
        fetch(url)
        .then(res => res.json())
        .then(data => {
          dispatch({type: "SUCCESS", payload: CurrentDataParser(data)});
          setFutureData(data.days.slice(1, 6));
        })
        .catch(error => dispatch({ type: "ERROR", payload: "Failed to find this city" })),
      10000
    )
    clearInterval(myInterval)
  }

  return (
    <div className="container d-flex flex-column">
        <div className="container border border-dark rounded bg-light mt-5 p-3 d-flex flex-column">
            <SearchForm onChange={onChange} city={city} onSubmit={onSubmit} />
            <hr />
            <MainContainer state={state} icons={weatherIcons}/>
        </div>
        <div>
          <Footer data={futureData} icons={weatherIcons} />
        </div>
    </div>

  );
};

export default App;
