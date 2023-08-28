import { styled } from "..";

export const CentralizeCheckoutFinalization = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const CheckoutFinalizationContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "1180px",
  justifyContent: "center",
  alignItems: "center",
});

export const CheckoutFinalizationContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "50px",
  marginBottom: "50px",
  background: "$white",
  width: "600px",
  height: "350px",
  borderRadius: "10px",
  padding: "60px",
  justifyContent: "center",
  alignItems: "center",

  h2: {
    fontFamily: "sans-serif",
    fontSize: "38px",
  },

  p: {
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "22px",
    marginTop: "40px",
  },

  a: {
    marginTop: "40px",
  },
});
