import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const ProcessPayment = async (req, res) => {
    const myPayment = await stripe.paymentIntents.create({
        amount : req.body.amount,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
          },
    })

    res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
};



export const sendStripeApiKey = async (req, res) => {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  };

