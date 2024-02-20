import InfoContainer from "./InfoContainer";
import AdditionalInfoContainer from "./AdditionalInfoContainer";


function MainContainer({city, temperature, humidity, windSpeed, pressure, errorMessage, conditions, image}){

    return (
        !city ? (
            errorMessage ? (
                    <InfoContainer>
                        <h4>{errorMessage}</h4>
                    </InfoContainer>
            ) : (
                <InfoContainer>
                    <h4>Please, type city where you want to check current forecast</h4>
                </InfoContainer>
            )
        ) : (
            <div className="container d-flex flex-column">
                <div className="d-flex flex-row align-items-center justify-content-center p-5">
                    <div className="d-flex flex-column align-items-center p-5 m-2">
                        <div className="mb-2">
                            {image}
                        </div>
                        <div className="text-center mt-2">
                            <strong>{conditions}</strong>
                        </div>
                    </div>
                    <div className="d-flex flex-column align-items-center p-5 m-2">
                        <h2>{city}</h2>
                        <div className="mt-3">
                            <h3>{Math.floor(temperature)}°C</h3>
                        </div>
                    </div>
                </div>  
                <hr />
                <div className="d-flex flex-row align-items-center justify-content-between p-2">
                    <AdditionalInfoContainer valueName={"Humidity"} value={humidity} valueMeasurement={"%"} />
                    <AdditionalInfoContainer valueName={"Wind speed"} value={windSpeed} valueMeasurement={"kph"} />
                    <AdditionalInfoContainer valueName={"Pressure"} value={pressure} valueMeasurement={"hpa"} />
                </div>
            </div>
        )
    );
};

export default MainContainer;
