
function Footer({ imageSource }){
    const weekForecast = [
        {
            weekDay: "Saturday",
            temperature: "25"
        },
        {
            weekDay: "Sunday",
            temperature: "23"
        },
        {
            weekDay: "Monday",
            temperature: "22"
        },
        {
            weekDay: "Tuesday",
            temperature: "24"
        },
        {
            weekDay: "Wednesday",
            temperature: "26"
        },

    ]

    return (
        <div class="container d-flex flex-column border border-dark rounded bg-light mt-3 p-3 align-items-center">
            <h3>Forecast for a week</h3>
            <hr class="container" />
            <div class="container d-flex flex-row p-1 mt-2">
                    {
                        weekForecast.map(
                            (object) => {
                                return (
                                            <div className="container d-flex flex-column p-2 align-items-center">
                                                <div class="p-1">{object.weekDay}</div>
                                                <img src={imageSource} />
                                                <div>{object.temperature}</div>
                                            </div>
                                        )
                            }
                        )
                    }
            </div>
        </div>
    )
}

export default Footer;
