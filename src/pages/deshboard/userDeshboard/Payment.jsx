import { loadStripe } from "@stripe/stripe-js";
import CommonHeader from "../../../sheard/CommonHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";

// todo::
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAY_KEY);
const Payment = () => {
    return (
        <div>
          <CommonHeader heading={'Payment'}></CommonHeader>
          <div>
            <Elements stripe={stripePromise}>
                <CheckOutFrom></CheckOutFrom>
            </Elements>
          </div>
        </div>
    );
};

export default Payment;