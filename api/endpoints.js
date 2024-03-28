// Definim API KEY-ul \\
// API KEY-URILE IN GENERAL NU AR FI BINE SA LE STOCAM IN FORMAT TEXT IN CODUL NOSTRU, PENTRU CA ORICINE AR PUTEA SA LE VADA SI SA LE FOLOSEASCA. E BINE CA ELE SA STEA PE SERVER, DAR IN CAZUL NOSTRU FIIND UN API GRATUIT, O SA LE STOCAM AICI \\
const API_KEY = "e2dbfcc322632718c431726d35d155fe";
// Construim link-urile (endpoint-urile) catre care noi o sa facem request-uri cu JS \\
function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};
// Declaram a 2-a functie pe care o vom folosi pentru a lua url-ul catre API-ul ce ne returneaza date despre vremea pe 5 zile \\
function getForecastWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};