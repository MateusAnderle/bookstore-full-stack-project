import { styled } from "..";

export const FooterContainer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  background: "$red",
  alignItems: "center",
});

export const FooterMenu = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "1180px",
  background: "$red",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginTop: "50px",
  marginBottom: "50px",

  a: {
    textDecoration: "none",
  },

  h3: {
    color: "$white",
    marginBottom: "30px",
    fontSize: "22px",
  },

  li: {
    color: "$white",
    listStyleType: "none",
    lineHeight: "45px",
    cursor: "pointer",

    svg: {
      height: 40,
      width: 40,
      marginTop: 20,
      marginRight: 10,
    },
  },
});
