
function MainContainer({city, temperature, humidity, windSpeed, pressure, errorMessage, conditions, image}){

    return (
        !city ? (
            errorMessage ? (
                <div className="container d-flex flex-row align-items-center justify-content-center mt-5 mb-5">
                    <h4>{errorMessage}</h4>
                </div>
            ) : (
                <div className="container d-flex flex-row align-items-center justify-content-center mt-5 mb-5">
                    <h4>Please, type city where you want to check current forecast</h4>
                </div>
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
                    <div className="p-3 d-flex flex-column">
                        <div className="text-center">Humidity</div>
                        <hr style={{width: "80px"}} />
                        <div className="text-center">
                            {humidity} %
                        </div>
                    </div>
                    <div className="p-3 d-flex flex-column">
                        <div className="text-center">Wind</div> 
                        <hr style={{width: "80px"}} />
                        <div className="text-center">
                            {windSpeed} kph
                        </div>
                    </div>
                    <div className="p-3 d-flex flex-column">
                        <div className="text-center">Pressure</div>
                        <hr style={{width: "80px"}} />
                        <div className="text-center">
                            {pressure} hPa
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default MainContainer;
