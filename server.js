const express = require( 'express' );
const contactRouter = require( './api/routes/contact.js' );
const app = express();

const PORT = process.env.PORT || 3000


app.use( '/api/contact', contactRouter );
app.use( '/api/contact', contactRouter );

app.get( '/', ( req, res ) =>{
    res.send( 'Hello Home page' );
} )

app.listen( PORT, () => {
    console.log( `Server is running my is port of server ${PORT}` );
} );