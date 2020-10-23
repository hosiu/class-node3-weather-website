const request = require('postman-request')

// const forecast = (x, y, callback) => {
//     const url = 'http://api.weatherstack.com/current?access_key=5ac961533e6f1f815a97eaac48e27655&query=' + y + ',' + x + '&units=m'

//     request({ url: url, json: true}, (error, respond) => {
//         if (error) {
//             callback('Unable to establish the connection!', undefined)
//         } else if (respond.body.error) {
//             callback('Unable to locate the location you request!', undefined)
//         } else {
//             callback(undefined, {
//                 temperature : respond.body.current.temperature,
//                 feelsLike : respond.body.current.feelslike,
//                 precip : respond.body.current.precip,
//                 desc : respond.body.current.weather_descriptions[0],
//             })
//         }
//     })
// }


// Shorthand version
const forecast = (x, y, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=5ac961533e6f1f815a97eaac48e27655&query=' + y + ',' + x + '&units=m'

    request({ url, json: true}, (error, { body } ) => {
        if (error) {
            callback('Unable to establish the connection!', undefined)
        } else if (body.error) {
            callback('Unable to locate the location you request!', undefined)
        } else {
            callback(undefined, {
                temperature : body.current.temperature,
                feelsLike : body.current.feelslike,
                precip : body.current.precip,
                desc : body.current.weather_descriptions[0]
            })
        }
    })
}


module.exports = forecast