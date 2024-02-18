import TemperatureConverter from "./TemperatureConverter";

function Footer({ data }){
    return (
            data ? (
                <div className="container d-flex flex-column border border-dark rounded bg-light mt-3 p-3 align-items-center">
                    <h3>Forecast for a week</h3>
                    <hr className="container" />
                    <div className="container d-flex flex-row p-1 mt-2 justify-content-between">
                            {
                                data.map(
                                    (item) => {
                                        return (
                                            <div className="d-flex flex-column p-2 border rounded" key={item.datetime}>
                                                <div><strong>{item.datetime}</strong></div>
                                                <hr />
                                                <div className="text-center">{TemperatureConverter(item.temp)}°C</div>
                                            </div>
                                        )
                                    }
                                )
                            }
                    </div>
                </div>
            ) 
            : 
            (undefined)

    )
}

export default Footer;
