const bucharestButton = document.querySelector(".dropdown-menu li .bucharest");
const timisoaraButton = document.querySelector(".dropdown-menu li .timisoara");
const oradeaButton = document.querySelector(".dropdown-menu li .oradea");
// ADAUGAT \\
// ADAUGAT \\
// ADAUGAT \\
const aradButton = document.querySelector(".dropdown-menu li .arad");
const sibiuButton = document.querySelector(".dropdown-menu li .sibiu");
// ADAUGAT\\
// ADAUGAT \\
// ADAUGAT \\
// Declaram o functie care sa ne schimbe orasul curent \\
function updateCurrentCity(city) {
    // Mai intai trebuie sa selectez elementul care imi tine orasul curent \\
    const currentCityElem = document.querySelector(".current-city");
    currentCityElem.innerHTML = city;
};
// Declaram o functie care ne va schimba orasul si ne va face update la vreme \\
function updateWeather(cityName) {
    // Actualizam orasul selectat din dropdown in localStorage \\
    localStorage.setItem("city", cityName);
    // Reafisam vremea curenta in functie de orasul selectat \\
    displayCurrentWeather(cityName);
    displayWeatherForecast(cityName);
    // Actualizam orasul afisat pe ecran \\
    updateCurrentCity(cityName);
};
// Adaugam event listeneri pe fiecare element in parte, adica, pe fiecare button din dropdown \\
bucharestButton.addEventListener("click", function() {
    // La click pe buton-ul Bucuresti ar trebui sa schimb numele orasului, si al 2-lea lucru sa fac update la vreme \\
    updateWeather("București");
});
timisoaraButton.addEventListener("click", function() {
    // La click pe buton-ul Timisoara ar trebui sa schimb numele orasului, si al 2-lea lucru sa fac update la vreme \\
    updateWeather("Timișoara");
});
oradeaButton.addEventListener("click", function() {
    // La click pe buton-ul Oradea ar trebui sa schimb numele orasului, si al 2-lea lucru sa fac update la vreme \\
    updateWeather("Oradea");
});
// ADAUGAT \\
// ADAUGAT \\
// ADAUGAT \\
aradButton.addEventListener("click", function() {
    updateWeather("Arad");
});
sibiuButton.addEventListener("click", function() {
    updateWeather("Sibiu");
});
// ADAUGAT \\
// ADAUGAT \\
// ADAUGAT \\