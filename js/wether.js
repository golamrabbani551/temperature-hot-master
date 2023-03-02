function loadWether(place){
const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=0ef91c7a87d4f02e66cceb74ef3635e4&units=metric`
fetch(url)
.then( res => res.json())
.then( data => searchField(data))
}
const searchField = (country) =>{
    const countryname = document.getElementById('country-name')
    countryname.innerText = country.name;
    const countryTemperature = document.getElementById('country-temp');
    countryTemperature.innerText = country.main.temp;
    const weatherStaus = document.getElementById('weather-statuse')
    weatherStaus.innerText = country.weather[0].main;

}

document.getElementById('searc-weather').addEventListener('click',function(){
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    loadWether(inputFieldValue);
})
// loadWether('japan')