import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51NACJTClmQIMGl9C40rxGlElMl3otJzHTiNm0MGvXh6SqAcMAFxJUP4eDkd23gWxulCb8ECzEkbRxsKI9YkoDGP800l9dOSofr";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;