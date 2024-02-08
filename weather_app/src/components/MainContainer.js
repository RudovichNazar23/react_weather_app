
function MainContainer(){
    return (
        <div className="container d-flex flex-column">
            <div class="container d-flex flex-column align-items-center p-5">
                <h2>London</h2>
                <div class="mt-3">
                    <h3>25°C</h3>
                </div>
            </div>
            <hr />
            <div className="d-flex flex-row align-items-center justify-content-between p-2">
                <div class="p-3 d-flex flex-column">
                    <div className="text-center">Humidity</div>
                    <hr style={{width: "80px"}} />
                    <div class="text-center">
                        23 %
                    </div>
                </div>
                <div class="p-3 d-flex flex-column">
                    <div className="text-center">Wind</div> 
                    <hr style={{width: "80px"}} />
                    <div class="text-center">
                        9kph
                    </div>
                </div>
                <div class="p-3 d-flex flex-column">
                    <div className="text-center">Pressure</div>
                    <hr style={{width: "80px"}} />
                    <div class="text-center">
                        1017hPa
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default MainContainer;
