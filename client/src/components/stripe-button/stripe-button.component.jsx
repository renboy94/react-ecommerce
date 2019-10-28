import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = parseInt(price) * 100;
  const publishableKey = "pk_test_xxBZgHCdBCexoQUbpX1mH8yJ";

  const onToken = token => {
    console.log(token);
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Paymen error ", error);
        alert(
          "There was an issue with your payment. Please sure you use the provided test credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
