const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a5ddfbd33fmshd814e3004466489p199862jsn86413ef59e8d',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};

export const getWeatherFrom = async (query="53.1,-0.13") => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;
    

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const { location, current } = result;
        const { country, localtime, name } = location;
        const { condition, humidity, feelslike_c, temp_c, wind_dir, is_day, wind_kph } = current;
        const { code, text } = condition;

        const object = {
            conditionCode: code,
            conditionText: text,
            country,
            localtime,
            name,
            humidity,
            isDay: is_day,
            feelsLike: feelslike_c,
            temperature: temp_c,
            windSpeed: wind_kph,
            windDir: wind_dir
        };

        console.log(object);
        return object;
    } catch (error) {
        console.error(error);
        return error;
    }
}
