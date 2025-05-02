const apiKey = "42dc450fbe20360d2dd2c48cd971036b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(!response.ok) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        // console.log(data);

        const temp = document.querySelector(".temp");
        const cityName = document.querySelector(".city");
        const humidity = document.querySelector(".humidity");
        const wind = document.querySelector(".wind");
        const weatherIcon = document.querySelector(".weather-icon");

        temp.innerHTML = data.main.temp + "°c";
        cityName.innerHTML = data.name;
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clear")
            weatherIcon.src = "images/clear.png";
        else if(data.weather[0].main == "Clouds")
            weatherIcon.src = "images/clouds.png";
        else if(data.weather[0].main == "Drizzle")
            weatherIcon.src = "images/drizzle.png";
        else if(data.weather[0].main == "Mist")
            weatherIcon.src = "images/mist.png";
        else if(data.weather[0].main == "Rain")
            weatherIcon.src = "images/rain.png";
        else if(data.weather[0].main == "Snow")
            weatherIcon.src = "images/snow.png";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

// checkWeather();