var weatherType  = prompt("What is it like outside?", "");

switch(weatherType) {
    case "sunny":
        alert("It's sunny outside! Go out and play");
        break;
    
    case "rainy":
        alert("It's rainy outside! Stay Inside!");
        break;

    case "cloudy":
        alert("It's cloudy. Stay in or go out.");
    
    case "windy":
        alert("It's windy outside! Carry a jacket!");
        break;
    
    case "cold":
        alert("It's cold outside! Don't forget your coat!");
        break;
    
    default:
        alert("I don't know that type of weather");
        break;
}