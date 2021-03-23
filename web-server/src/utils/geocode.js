const request= require('request')

const geocode = (address, callback)=> {

    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1Ijoibml0aXNoczJrMTgiLCJhIjoiY2ttM3JtZDdzM2pqazJ2cDNvNW9lazA2dyJ9.xCBIoypHYH4CqWKHADO3MQ'

    request({url: url, json: true},(error, response) =>{
        if(error)
        {
            callback('Unable to connect to location services!', undefined)
        }
        else if(response.body.features.length === 0)
        {
            callback('Unable to find the location. Try another search....', undefined)
        }
        else
        {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],

                location: response.body.features.place_name
            })
        }
    })
}

module.exports = geocode






// const request = require('request')

// const geocode = (address, callback) => {
//    // const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'
//   const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address+'.json?access_token=pk.eyJ1IjoicmltemltIiwiYSI6ImNrNWIwZnhibTA3d2gzZW5xbnkycmdqanAifQ.NVaf90dPZphN3aU4qqdarA'
//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode