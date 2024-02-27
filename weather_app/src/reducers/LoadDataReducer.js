
function LoadDataReducer(state, { type, payload }){
    switch(type) {
        case "INITIALIZE":
            return {...state, type: "INITIALIZE", message: payload};
        case "LOADING":
            return {...state, type: "LOADING", message: payload};
        case "ERROR":
            return {...state, type: "ERROR", error: payload};
        case "SUCCESS":
            return {...state, type: "SUCCESS", result: payload};
        default:
            return state;
    };
};

export default LoadDataReducer;
