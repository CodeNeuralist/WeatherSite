function getWeather() {
    const cityInput = document.getElementById('city-input');
    const cityName = cityInput.value.trim();

    if (cityName === '') {
        alert('Пожалуйста, введите название города.');
        return;
    }

    const weatherInfo = document.getElementById('weather-info');

    const apiKey = process.env.API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const city = data.name;
            const country = data.sys.country;

            weatherInfo.innerHTML = `<p>Температура в городе ${city}, ${country}: ${temperature}°C, ${description}</p>`;
        })
        .catch(error => {
            console.log('Ошибка при получении данных о погоде:', error);
            weatherInfo.innerHTML = `<p>Ошибка при получении данных о погоде. Пожалуйста, попробуйте еще раз позже.</p>`;
        });
}
