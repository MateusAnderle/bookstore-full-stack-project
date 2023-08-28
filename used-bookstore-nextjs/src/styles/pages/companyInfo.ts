import { styled } from "..";

export const CentralizeInfoContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const InfoContent = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "1180px",

  h2: {
    marginTop: "40px",
  },

  div: {
    marginTop: "20px",
    marginBottom: "40px",
    textAlign: "justify",
    fontFamily: "sans-serif",
    lineHeight: "30px",
  },
});
