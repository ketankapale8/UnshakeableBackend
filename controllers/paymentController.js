import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const ProcessPayment = async (req, res) => {

        const {amount, customerId } = req.body;

  
    const paymentIntent  = await stripe.paymentIntents.create({
        amount : amount,
        customerId : customerId,
        currency: "usd",
        automatic_payment_methods: {
            enabled: true,
          },
    })

    res
    .status(200)
    res.json({ paymentIntent: paymentIntent.client_secret , 
        customerId : customerId
    });

    

    
};



export const sendStripeApiKey = async (req, res) => {
    res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
  };

