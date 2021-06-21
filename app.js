// These import necessary modules and set some initial variables
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const convert = require("xml-js");
const { ROVER_DATA } = require('./constants.js');
var cors = require("cors");
const app = express();
const port = process.env.PORT || 80;

// Allow CORS from any origin
app.use(cors());

// Routes

// NASA relay route!
app.get("/api/search", async (req, res) => {

  try {

    const results = await fetch_retry( 10 );

    console.log(results);

    return res.json({

      success: true,
      results,

    });

  } catch (err) {

    return res.status(500).json({

      success: false,
      message: err.message,

    });

  }
});

// Spins up server and generates logs.

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const fetch_retry = ( n ) => {

    let [ rover, camera, solNum ] = getRandomRoverData();

    return fetch( `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover.name}/photos?sol=${solNum}&camera=${camera.name}&api_key=${process.env.NASA_API_KEY}` )
        .then( response => response.json() )
        .then( data =>  {
            /* TODO: Handle when n === 0 */
            if(data.photos.length === 0) {
                return fetch_retry( n - 1 );
            } else {
                return data;
            }
        })
        .catch( error => console.log( error ) )  
};

const getRandomRoverData = () => {

    let roverData = [];
    let solNum = 0;

    // random rover
    roverData = [ ...roverData, ROVER_DATA[ Math.floor( Math.random() * ROVER_DATA.length )]];

    // random camera
    roverData = [ ...roverData, roverData[0]['camera_data'][ Math.floor( Math.random() * roverData[0]['camera_data'].length )]];

    if(roverData[0].name === 'curiosity') {

        // curiosity is still active and has no set end of mission date, 
        // need to calc date for it
        solNum = getCuriositySolDate( roverData );

    } else {

        solNum = Math.floor( Math.random() * roverData[0]['max_sol'] );

    }

    console.log(roverData[0].name);

    // ramdom date (sol - Martian rotation)
    roverData = [ ...roverData, solNum ];

    return roverData;
}

const getCuriositySolDate = ( data ) => {

    let sol = 0;

    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today = new Date();
    const landing = new Date('2012-08-06'); // Curiosity landing date
    
    const diffDays = Math.round(Math.abs((today - landing) / oneDay));

    sol = Math.floor( Math.random() * diffDays );

    return sol;
}
