import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">PAYMENT</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
