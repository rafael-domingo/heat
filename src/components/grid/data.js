export default [
    {
        name: 'Risk Level',
        value: 'Moderate',
        hourly: [],
        css: 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)'
    },
    {
        name: 'Temperature',
        value: 50,
        hourly: [
            {
                time: '12:00PM',
                value: '95F'
            },
            {
                time: '1:00PM',
                value: '96F'
            },
            {
                time: '2:00PM',
                value: '94F'
            },
            {
                time: '3:00PM',
                value: '97F'
            }
        ],
        css: 'linear-gradient(to top, #a8edea 0%, #fed6e3 100%)'
    },
    {
        name: 'Humidity',
        value: 50,
        hourly: [
            {
                time: '12:00PM',
                value: '90%'
            },
            {
                time: '1:00PM',
                value: '91%'
            },
            {
                time: '2:00PM',
                value: '92%'
            },
            {
                time: '3:00PM',
                value: '93%'
            }
        ],
        css: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    },
    {
        name: 'UV Index',
        value: 5,
        hourly: [
            {
                time: '12:00PM',
                value: '5'
            },
            {
                time: '1:00PM',
                value: '3'
            },
            {
                time: '2:00PM',
                value: '2'
            },
            {
                time: '3:00PM',
                value: '0'
            }
        ],
        css: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
    },
    {
        name: 'Conditions',
        value: 'Cloudy',
        hourly: [
            {
                time: '12:00PM',
                id: 800,
                icon: '01d',
                description: 'clear'
            },
            {
                time: '1:00PM',
                id: 804,
                icon: '04d',
                description: 'overcast clouds'
            },
            {
                time: '2:00PM',
                id: 800,
                icon: '01d',
                description: 'clear'
            },
            {
                time: '3:00PM',
                id: 804,
                icon: '04d',
                description: 'overcast clouds'
            }
        ],
        css: 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
    },
    {
        name: 'Hydration',
        value: 'Drink 4 cups / hour',
        hourly: [],
        css: 'linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)'
    },
    {
        name: 'Heat Stress Symptoms',
        value: 'Click to open',
        hourly: [],
        css: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)'
    },
    {
        name: 'First Aid',
        value: 'Click to open',
        hourly: [],
        css: 'linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)'
    }
]