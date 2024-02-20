
function AdditionalInfoContainer({ valueName, value, valueMeasurement }){
    return (
        <div className="p-3 d-flex flex-column">
            <div className="text-center">{valueName}</div>
            <hr style={{width: "80px"}} />
            <div className="text-center">
                {value} {valueMeasurement}
            </div>
        </div>
    );
};

export default AdditionalInfoContainer;
