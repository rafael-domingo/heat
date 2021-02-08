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
            return jsonResponse.coord;
        })
    },

    getWeather(location) {
        return Weather.getCoordinates(location).then(coordinates => {
            // One Call API
            return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&exclude={minutely,daily,alerts}&appid=${apiKey}`).then(response => {
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
                return jsonResponse;
            })
        });
        

    },

    constructState(WeatherObject) {
        // Temperature object
        const currentTemperature = WeatherObject.current.temp;
        const hourlyTemperature = WeatherObject.hourly.map(hour => {
            const date = new Date(hour.dt * 1000);
            let hours = date.getHours();
            let ampm = "am"
            if (hours > 12) {
                hours -= 12
                ampm = "pm"
            }
            const time = `${hours}:00 ${ampm}`
            return {
                time: time,
                value: hour.temp
            }
        })
        const temperatureObject = {
            name: 'Temperature',
            value: currentTemperature,
            hourly: hourlyTemperature.slice(0,11),
            css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'
        }

        // Humidity object
        const currentHumidity = WeatherObject.current.humidity;
        const hourlyHumidity = WeatherObject.hourly.map(hour => {
            const date = new Date(hour.dt * 1000);
            let hours = date.getHours();
            let ampm = "am"
            if (hours > 12) {
                hours -= 12
                ampm = "pm"
            }
            const time = `${hours}:00 ${ampm}`
            return {
                time: time,
                value: hour.humidity
            }
        })
        const humidityObject = {
            name: 'Humidity',
            value: currentHumidity,
            hourly: hourlyHumidity.slice(0,11),
            css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }

        // UV Index object
        const currentUvi = WeatherObject.current.uvi;
        const hourlyUvi = WeatherObject.hourly.map(hour => {
            const date = new Date(hour.dt * 1000);
            let hours = date.getHours();
            let ampm = "am"
            if (hours > 12) {
                hours -= 12
                ampm = "pm"
            }
            const time = `${hours}:00 ${ampm}`
            return {
                time: time,
                value: hour.uvi
            }
        })
        const uviObject = {
            name: 'UV Index',
            value: currentUvi,
            hourly: hourlyUvi.slice(0,11),
            css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
        }

        // Conditions object
        const currentCondition = WeatherObject.current.weather;
        const hourlyCondition = WeatherObject.hourly.map(hour => {
            const date = new Date(hour.dt * 1000);
            let hours = date.getHours();
            let ampm = "am"
            if (hours > 12) {
                hours -= 12
                ampm = "pm"
            }
            const time = `${hours}:00 ${ampm}`
            return {
                time: time,
                id: hour.weather[0].id,
                icon: hour.weather[0].icon,
                description: hour.weather[0].description
            }
        })
        const conditionsObject = {
            name: 'Conditions',
            value: currentCondition[0].description,
            hourly: hourlyCondition.slice(0,11),
            css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
        }

        // Risk level object
        if (currentTemperature < 91) {
            var currentRisk = 'Lower'
        } else if (currentTemperature < 103) {
            var currentRisk = 'Moderate'
        } else if (currentTemperature < 115) {
            var currentRisk = 'High'
        } else {
            var currentRisk = 'Extreme'
        }

        const riskObject = {
            name: 'Risk Level',
            value: currentRisk,
            hourly: [],
            css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)'
        }

        // Hydration object
        const hydrationObject = {
            name: 'Hydration',
            value: 'Drink 4 cups / hour',
            hourly: [],
            css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'
        }

        // Heat Stress Symptoms object
        const symptomsObject = {
            name: 'Heat Stress Symptoms',
            value: 'Click to open',
            hourly: [],
            css: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)'
        }
        
        // First Aid object 
        const firstAidObject = {
            name: 'First Aid',
            value: 'Click to open',
            hourly: [],
            css: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)'
        }

        const state = [riskObject, temperatureObject, humidityObject, uviObject, conditionsObject, hydrationObject, symptomsObject, firstAidObject]
        return state
    },

    getHourly(WeatherObject, parameter) {
        var array = [];
        WeatherObject.hourly.forEach(hour => {
            var time = hour.dt;
            var object = {
                time: hour[parameter]
            }
            if (parameter === 'conditions') {
                array.push(object);
            } else {
                array.push(object);
            }
        })
        return array;
        
    }
    
}