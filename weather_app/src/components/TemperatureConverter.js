
function TemperatureConverter(fahrenheit){
    const numTemp = Number(fahrenheit);
    const celsius = (numTemp - 32) * 5/9;
    return Math.round(celsius); 
};

export default TemperatureConverter;
