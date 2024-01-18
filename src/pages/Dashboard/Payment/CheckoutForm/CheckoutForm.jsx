import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import './cheackoutFrom.css'
const CheckoutForm = ({cart,price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [tranjuctionId, setTranjuctionId] = useState('');


  const axiosSecure = useAxiosSecure()

  useEffect(() => {
      axiosSecure.post("/create-payment-intent", { price })
      .then(res => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
    })
  
},[price,axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("PaymentMethod", paymentMethod);
    }

    setProcessing(true);

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        email: user?.email || 'unknown',
        name:user?.displayName || 'anonymous'
      },
    },
  },
    );
    if (confirmError) {
      console.log(confirmError)
    }

    console.log("paymentIntent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === 'succeeded') {
      setTranjuctionId(paymentIntent.id);
      //  Save the payment info server 
      const payment = {
        email: user?.email,
        tranjuctionId: paymentIntent.id,
        price,
        quantity: cart.length,
        items:cart.map(item=>item._id),
        itemName:cart.map(item=>item.name)
      }
      axiosSecure.post("/payments", payment)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            // display confrim
          }
      })
    }
  };
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-primary btn-sm mt-4"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {tranjuctionId && <p className="text-green-600">Tranjuction Complete with tranjuction_id : {tranjuctionId}</p>}
    </>
  );
};

export default CheckoutForm;
