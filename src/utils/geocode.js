const request = require('postman-request')

// const geoCode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG9zaXUiLCJhIjoiY2tnMXR6cGgwMDF1OTJxb2Y4b3UwcXk1ZCJ9.DuU3ESFRzXKxZjg4RjFQLg&limit=1'

//     request({ url: url, json: true}, (error, respond) => {
//         if (error) {
//             callback('Unable to establish the connection!', undefined)
//         } else if (respond.body.features.length === 0) {
//             callback('Unable to locate the location you request!', undefined)
//         } else {
//             callback(undefined, {
//                 location : respond.body.features[0].place_name,
//                 longtitude : respond.body.features[0].center[0],
//                 latitue : respond.body.features[0].center[1]
//             })
//         }
//     })
// }

// Shorthand version
const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG9zaXUiLCJhIjoiY2tnMXR6cGgwMDF1OTJxb2Y4b3UwcXk1ZCJ9.DuU3ESFRzXKxZjg4RjFQLg&limit=1'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to establish the connection!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to locate the location you request!', undefined)
        } else {
            callback(undefined, {
                location : body.features[0].place_name,
                longtitude : body.features[0].center[0],
                latitue : body.features[0].center[1]
            })
        }
    })
}

module.exports = geoCode