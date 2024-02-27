import InfoContainer from "./InfoContainer";
import AdditionalInfoContainer from "./AdditionalInfoContainer";

function MainContainer({ state, icons }) {
  if(state.type === "INITIALIZE") {
    return  <InfoContainer><h4>{state.message}</h4></InfoContainer>
  }

  if (state.type === "LOADING") {
    return (
      <InfoContainer>
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </InfoContainer>
    )
  }

  if (state.type === "ERROR") {
    return <InfoContainer><h4>{state.error}</h4></InfoContainer>;
  }

  const resultData = state.result;

  return (
    <div className="container d-flex flex-column">
        <div className="d-flex flex-row align-items-center justify-content-center p-5">
            <div className="d-flex flex-column align-items-center p-5 m-2">
                <div className="mb-2">
                    {icons[resultData.icon]}
                </div>
                <div className="text-center mt-2">
                    <strong>{resultData.conditions}</strong>
                </div>
            </div>
            <div className="d-flex flex-column align-items-center p-5 m-2">
                <h2>{resultData.cityName}</h2>
                <div className="mt-3">
                    <h3>{Math.floor(resultData.temp)}°C</h3>
                </div>
            </div>
        </div>
        <hr />
        <div className="d-flex flex-row align-items-center justify-content-between p-2">
            <AdditionalInfoContainer valueName={"Humidity"} value={resultData.humidity} valueMeasurement={"%"} />
            <AdditionalInfoContainer valueName={"Wind speed"} value={resultData.windSpeed} valueMeasurement={"kph"} />
            <AdditionalInfoContainer valueName={"Pressure"} value={resultData.pressure} valueMeasurement={"hpa"} />
        </div>
    </div>
  );
}

export default MainContainer;
