function okFunc(geolocation) {
    const lat = geolocation.coords.latitude;
    const lon = geolocation.coords.longitude;
    const API_KEY = "5af84309b4a0436b2c008975ea9c7dc2";
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            const weatherRegion = document.querySelector("#weather span:first-child");
            const weatherSummary = document.querySelector("#weather span:last-child");
            weatherRegion.innerText = data.name;
            weatherSummary.innerText = `${data.weather[0].main}/${data.main.temp}`;
        });
    

};

function nokayFunc() {
    const weatherRegion = document.querySelector("#weather span:first-child");
    weatherRegion.innerText = "날씨 정보 확인할 수 없음"
};

navigator.geolocation.getCurrentPosition(okFunc,nokayFunc);