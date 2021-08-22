const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51ItgkCInXwhbaKEHit9dMmAzvj9IRvAUdzYsqKtpYVUhtSolPBi4JHZQ7bxmaYwyRtbB3P9raUzKicKFj1um5lvz00D675tpzG')

// API
// app config
const app = express()

// middlewares
app.use(cors({origin: true}))
app.use(express.json())

// api routes
app.get('/', (req, res) => res.status(200).send('hello world'))

app.post('/payments/create', async (req, res) => {
    const total = req.query.total

    // console.log('Payment request recieved', total)

    const paymentIntent = await stripe.paymentIntents.create({
        // subunits of the currency
        amount: total,
        currency: 'usd'
    })

    // OK - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// listen command
exports.api = functions.https.onRequest(app)

// 
// http://localhost:5001/mikes-pizza-c8851/us-central1/api