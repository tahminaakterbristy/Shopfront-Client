// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import CheckOutForm from "./CheckOutForm";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.STRIPE_SECRET_KEY);

const OnlinePayment = () => {
 

  if (!stripePromise) {
    return <p>Loading Stripe...</p>;
   
  }

 
    return (
      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} testName={testName} />
      </Elements>
    );;
};

export default OnlinePayment;
