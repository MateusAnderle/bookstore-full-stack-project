import { styled } from "..";

export const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
  marginBottom: "30px",
});

export const NextPrev = styled("button", {
  border: "none",
  fontSize: "22px",
  background: "$red",
  color: "$lightGray",
  padding: "5px 15px",
  fontWeight: "bold",

  variants: {
    variant: {
      prev: {
        borderTopLeftRadius: "20px",
        borderBottomLeftRadius: "20px",
      },
      next: {
        borderTopRightRadius: "20px",
        borderBottomRightRadius: "20px",
      },
    },
  },

  "&:hover": {
    cursor: "pointer",
    background: "$darkRed",
  },
});

export const PageCounter = styled("div", {
  fontSize: "18px",
  fontWeight: "bold",
  color: "$red",
  padding: "5px 10px",

  "&:hover": {
    cursor: "default",
  },
});
