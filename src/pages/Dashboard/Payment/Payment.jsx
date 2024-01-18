import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../hooks/useCart";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0)
  const price = parseFloat(total.toFixed(2));
  
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">PAYMENT</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} price={price}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
