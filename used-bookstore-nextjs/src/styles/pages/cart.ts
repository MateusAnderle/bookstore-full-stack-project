import { styled } from "..";

export const CentralizeCartContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const CartContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "1180px",
  background: "$white",
  borderRadius: "10px",
  marginTop: "40px",
  marginBottom: "40px",
  padding: "40px",
});

export const Table = styled("table", {
  marginTop: "20px",
  textAlign: "center",

  thead: {
    background: "$red",
    color: "$white",
    height: "40px",
  },
});

export const TBody = styled("tbody", {
  textAlign: "center",
  alignItems: "center",
  td: {
    padding: "20px 0 20px 0",
  },
});

export const TdCart = styled("div", {
  display: "flex",
  flexDirection: "row",
  margin: "0 20px",
  justifyContent: "space-around",
  textAlign: "center",

  svg: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const CartTotal = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
});

export const CartContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$lightGray",
  alignItems: "center",
  padding: "30px",
  borderRadius: "10px",

  span: {
    fontSize: "14px",
    marginBottom: "20px",
  },
});

export const CartInsideBox = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "400px",
  marginBottom: "20px",

  div: {
    fontWeight: "bold",
    fontSize: "18px",
  },
});

export const CartButton = styled("button", {
  border: "none",
  borderRadius: "10px",
  fontSize: "20px",
  fontFamily: "sans-serif",
  fontWeight: "bold",
  height: "50px",
  color: "$white",
  background: "#40CD28",
  width: "100%",

  "&:hover": {
    cursor: "pointer",
    background: "#39B724",
  },
});

export const EmptyList = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  marginBottom: "40px",

  h3: {
    marginBottom: "20px",
  },
});
