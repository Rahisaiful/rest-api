const express = require( 'express' )
const router = express.Router()

// Get
router.get( '/', ( req, res, next  ) => {
    res.status( '200' ).json({
        message: 'Say hello contact route from get'
    })
} );

// Post
router.post( '/', ( req, res, next ) => {
    res.status( '201' ).json({
        message: 'Say hello contact route from post'
    })
} )


// Dynamic id Get
router.get( '/:id', ( req, res, next ) => {
    const id = req.params.id
    res.status( '200' ).json({
        id
    })

} )

// Put
router.put( '/:id', ( req, res, next ) => {
    const id = req.params.id
    res.status( '200' ).json({
        message: 'I am a single put route'
    })

} )

// Delete
router.delete( '/:id', ( req, res, next ) => {
    const id = req.params.id
    res.status( '200' ).json({
        message: 'I am a single Delete route'
    })

} )

module.exports = router