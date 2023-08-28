import { styled } from "..";

export const CentralizeContainerRegistration = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const RegistrationContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "500px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  marginBottom: "40px",
  background: "$white",
  borderRadius: "10px",
  padding: "40px 0",
});

export const Form = styled("form", {
  fontFamily: "sans-serif",
  display: "flex",
  flexDirection: "column",

  label: {
    fontSize: "12px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },

  input: {
    border: "1px solid #ccc",
    background: "$white",
    color: "$black",
    width: "400px",
    height: "40px",
    fontSize: "14px",
    padding: "5px 15px",
    borderRadius: "8px",
    fontFamily: "sans-serif",
  },

  "input[name=zipCode]": {
    width: "195px",
  },

  "input[name=phone]": {
    width: "195px",
  },

  "input[name=district]": {
    width: "195px",
  },

  "input[name=city]": {
    width: "195px",
  },

  "input[name=password]": {
    width: "195px",
  },

  "input[name=repeatPassword]": {
    width: "195px",
  },

  "input[type=submit]": {
    marginTop: "30px",
    background: "$red",
    color: "$white",
    fontWeight: "bold",

    "&:hover": {
      background: "$darkRed",
      cursor: "pointer",
    },
  },
});

export const TwoInputsContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
