import { loadStripe } from "@stripe/stripe-js";
import CommonHeader from "../../../sheard/CommonHeader";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import useCart from "../../../hooks/useCart";

// todo::
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PAY_KEY);
const Payment = () => {
  const [cart] = useCart();


  return (
    <div>
      <CommonHeader heading={'Payment'}></CommonHeader>
      <div>
        {cart.length === 0 ? <div className='text-center'>
          <p className='text-3xl font-semibold py-3'>You have no order!!!</p>
        </div>
          : <Elements stripe={stripePromise}>
            <CheckOutFrom></CheckOutFrom>
          </Elements>
        }

      </div>
    </div>
  );
};

export default Payment;