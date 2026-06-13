const convertToCelsius = function(fahrenheit1) {
 const celcius = (fahrenheit1 -32) /1.8;
return Math.round(celcius * 10) / 10;

};

const convertToFahrenheit = function(celcius1) {
  const fahrenheit = (celcius1 *1.8) +32;
 return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
