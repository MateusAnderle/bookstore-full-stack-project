import { styled } from "..";

export const ProductWrapper = styled("header", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "$white",
  borderRadius: "10px",
  transition: "0.2s",
  color: "$black",
  height: "400px",
  padding: "0 10px",

  h4: {
    fontSize: "20px",
    marginTop: "10px",
    textAlign: "center",
  },

  p: {
    fontSize: "16px",
  },

  h5: {
    fontSize: "22px",
    marginTop: "10px",
    marginBottom: "15px",
  },

  "&:hover": {
    background: "#D7D3D3",
    cursor: "pointer",
  },
});
