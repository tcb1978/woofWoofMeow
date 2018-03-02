require('dotenv').config();
const stripe = require('stripe')( process.env.STRIPE_SECRET_KEY );

module.exports = {
    paymentApi: (req, res) => {
        stripe.charges.create(req.body, (stripeErr, stripeRes) => {
            if ( stripeErr ) {
                res.status(500).json({ error: stripeRes });
            } else {
                res.status(200).json({ suscess: stripeRes });
            }
        })
    }
}