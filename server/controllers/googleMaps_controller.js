const axios = require('axios');
require('dotenv').config();

module.exports = {
    getUserlocation: ( req, res, next ) => {
        // Post gets the the location of the user ( latitude and longitude )
        axios.post(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.GOOGLE_MAPS_KEY}`).then( resp => {

            const { lat, lng } = resp.data.location;
            // I'm using the latitude and longitude to get user's the general addresses in the genera area
            axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.GOOGLE_MAPS_KEY}`).then( loc => {

                res.status(200).json( loc.data.results );

            }).catch( error => { console.log(error); res.status(404).json(error); });

        }).catch( error => { console.log(error); res.status(500).json(error); });
    },
    
    getlocation: ( req, res, nex ) => {
        // The address value is user's address ( example -> '1111 N. Aroundhere Ave, CA' )
        const { address } = req.query;
        // The input is formated for the google api url ( still works without )
        const addressFormatted = address.split(' ').join('+');

        // Finds location by the address
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressFormatted}&key=${process.env.GOOGLE_MAPS_KEY}`).then( resp => {

            res.status(200).json( resp.data.results );

        }).catch( error => { console.log(error); res.status(404).json(error); });
    }
}