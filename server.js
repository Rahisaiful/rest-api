const express = require( 'express' );

const app = express();

const PORT = process.env.PORT || 3000

app.get( '/', ( req, res ) => {
    res.send( '<div class="t"><h1>Say hello</h1></div>' );
} );

app.get( '/posts', ( req, res ) => {
    res.send( '<h1>A lot of post</h1>' );
} )

app.listen( PORT, () => {
    console.log( `Server is running my is port of server ${PORT}` );
} );