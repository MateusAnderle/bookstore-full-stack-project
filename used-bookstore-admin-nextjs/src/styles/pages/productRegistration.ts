import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "1180px",
  padding: "0 0 30px 0",
  marginBottom: "50px",
});

export const Title = styled("h2", {
  margin: "20px 0",
});

export const Form = styled("form", {
  fontFamily: "sans-serif",
  display: "flex",
  flexDirection: "column",

  label: {
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    marginTop: "20px",
  },

  input: {
    border: "1px solid #ccc",
    background: "$white",
    color: "$black",
    width: "575px",
    height: "40px",
    fontSize: "14px",
    padding: "5px 15px",
    borderRadius: "8px",
    fontFamily: "sans-serif",
  },

  "input[type=file]": {
    background: "$lightYellow",
    color: "$black",
    fontWeight: "bold",
    paddingTop: "8px",
  },

  "input[type=submit]": {
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

export const SubmitContainer = styled("div", {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px 0",
});
