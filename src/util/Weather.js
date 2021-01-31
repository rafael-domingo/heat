const apiKey = '437460ab496455bcd26c841eb450f1cf';

export const Weather = {
    getCoordinates(location) {
        // Format location input if supplying 'city, state'
        if (location.includes(',')) {
            location = location.replace(/\s/g, '');
            console.log(location);
        }
        
        // Using Current Weather API call to get lat and long
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        return fetch(`${url}`).then(response => {
            if (!response) {
                console.log('No response from API');
                return [];
            }
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse) {
                console.log('No jsonResponse');
                return [];
            }
            console.log(jsonResponse.coord);
            return jsonResponse.coord;
        })
    },

    getWeather(location) {
        return Weather.getCoordinates(location).then(coordinates => {
            // One Call API
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude={minutely,daily,alerts}&appid=${apiKey}`).then(response => {
                if(!response) {
                    console.log('No response from API');
                    return [];
                }
                return response.json();
            }).then(jsonResponse => {
                if (!jsonResponse) {
                    console.log('No jsonResponse');
                    return [];
                }
                console.log(jsonResponse);
                return jsonResponse;
            })
        });
        

    },

    getHourly(WeatherObject, parameter) {
        var object = {};
        WeatherObject.hourly.forEach(hour => {
            if (parameter === 'conditions') {
                object[hour.dt] = hour.weather[0].description;
            } else {
                object[hour.dt] = hour[parameter];
            }
        })
        return object;
        
    }
    
}