// do not include API key on JavaScript file
const API_KEY = `3943e0d1ac6a3cecde0611cacc1757e3`;
const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
    .catch(error => console.log(error));
}
const displayTemperature = data => {
    const addTemperature = document.getElementById('temperature');
    addTemperature.innerText = data.main.temp;
    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;
    console.log(data);
}
document.getElementById('search-btn').addEventListener('click', function(){
    const inputFild = document.getElementById('input-fild');
    const searchResult =  inputFild.value;
    const cityName = document.getElementById('city-name');
    cityName.innerText = searchResult;
    inputFild.value = '';
    loadTemperature(searchResult);
})
// const searchBtn = () => {
//     // const searchButton = document.getElementById('search-btn');
    
// }