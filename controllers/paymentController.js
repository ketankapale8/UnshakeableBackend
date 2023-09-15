// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const ProcessPayment = async (req, res) => {
    const {total, email , user_id , ServicePlan , ServiceVal , startDate } = req.body;

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: [total , email , user_id , ServicePlan , ServiceVal , startDate ],
        mode:"payment",
        success_url:"https://credimotion.netlify.app/sucess",
        cancel_url:"https://credimotion.netlify.app/failure",
    });

    res.json({id:session.id})


};

