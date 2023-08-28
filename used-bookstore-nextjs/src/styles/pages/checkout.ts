import { styled } from "..";

export const CentralizeCheckoutContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const CheckoutContainer = styled("section", {
  display: "grid",
  gridTemplateColumns: "1.7fr 1fr",
  gridGap: "40px",
  width: "1180px",
  background: "$white",
  borderRadius: "10px",
  marginTop: "40px",
  marginBottom: "40px",
  padding: "40px",
});

export const DeliveryAndPayment = styled("div", {
  background: "$lightGray",
  padding: "40px",
  borderRadius: "10px",

  h3: {
    marginBottom: "20px",
  },

  h4: {
    marginBottom: "10px",
  },
});

export const DeliveryCheckout = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
  fontFamily: "sans-serif",
  lineHeight: "2.5",
  fontSize: "16px",

  input: {
    marginBottom: "10px",
    border: "none",
    height: "40px",
    fontFamily: "sans-serif",
    padding: " 10px",
    borderRadius: "10px",
    width: "250px",
    fontSize: "14px",
  },
});

export const PaymentChechout = styled("div", {
  div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const ButtonToggle = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#ccc",
  padding: "10px",
  width: "170px",
  height: "70px",
  borderRadius: "10px",
  fontWeight: "bold",
  border: "none",
  fontFamily: "sans-serif",
  fontSize: "16px",

  "&:hover": {
    background: "#999",
    cursor: "pointer",
  },
  variants: {
    active: {
      true: {
        border: "2px solid $black",
      },
    },
  },
});

export const ConfirmDeliveryPayment = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  border: "none",

  button: {
    height: "50px",
    border: "none",
    width: "300px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    borderRadius: "8px",
    color: "$white",
    background: "#80D6F7",

    "&:hover": {
      cursor: "pointer",
      background: "#63B7D7",
    },
  },
});

export const CheckoutReview = styled("div", {
  background: "$lightGray",
  padding: "40px",
  borderRadius: "10px",

  h4: {
    marginBottom: "15px",
    marginTop: "20px",
  },

  h2: {
    marginTop: "20px",
  },

  button: {
    marginTop: "30px",
    height: "50px",
    border: "none",
    width: "300px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    borderRadius: "8px",
    color: "$white",
    background: "#40CD28",

    "&:hover": {
      cursor: "pointer",
      background: "#39B724",
    },
  },
});
