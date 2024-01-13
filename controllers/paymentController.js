import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const ProcessPayment = async (req, res) => {

        const {amount, customerId } = req.body;

    // const lineItems = [{currency: 'inr', total : total * 100 , email , user_id , servicePlan , serviceVal , startDate}]

    // const session = await stripe.checkout.sessions.create({
    //     payment_method_types:["card"],
    //     line_items: lineItems,
    //     mode:"payment",
    //     success_url:"https://credimotion.netlify.app/sucess",
    //     cancel_url:"https://credimotion.netlify.app/failure",
    // });

    // res.json({id:session.id})
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

