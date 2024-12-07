async function payNow(amount, id, description, name, email, contact) {
  const baseURL = "http://localhost:3001";
  const productionBaseURL = "https://codekerdos.in/api";

  const response = await fetch(baseURL + "/payment/create-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount,
      currency: "INR",
      receipt: "receipt#1",
      notes: {},
      partial_payment: true,
      first_payment_min_amount: 10 * 100,
    }),
  });

  const order = await response.json();

  // Open Razorpay Checkout
  const options = {
    key: "rzp_live_BuMv1StsuJoNWq", // Replace with your Razorpay key_id
    amount: order.amount,
    currency: order.currency,
    name: "CodeKerdos",
    description: "Course Payment",
    order_id: order.id, // This is the order_id created in the backend
    callback_url: "https://codekerdos.in/payment-success", // Your success URL
    prefill: {
      name: name,
      email: email,
      contact: contact,
    },
    theme: {
      color: "#F37254",
    },
    handler: function (response) {
      fetch(baseURL + "/payment/verify-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            window.location.href = "/payment-success";
          } else {
            alert("Payment verification failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error verifying payment");
        });
    },
  };

  // eslint-disable-next-line no-undef
  const rzp = new Razorpay(options);
  rzp.open();
}

export default payNow;
