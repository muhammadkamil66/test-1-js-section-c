let isRaining = false;
let isSnowing = false;
let windSpeed = 15;
let isCloudy = false;

if (isRaining === false
    && isSnowing === false
    && isCloudy === false
    && windSpeed < 10) {
        
    console.log("Weather Conditions are suitable");
} else {
    console.log("NOT");
}