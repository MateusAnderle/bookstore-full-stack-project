import { styled } from "..";

export const ProductDetailContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const ProductDetailContent = styled("main", {
  width: "1180px",
  display: "flex",
  flexDirection: "column",
});

export const ProductTopContent = styled("div", {
  marginTop: "40px",
  display: "grid",
  gridTemplateColumns: "2fr 1fr",
  gridGap: "20px",
  alignItems: "center",
});

export const ProductImageAndDescription = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  background: "$white",
  height: "500px",
  borderRadius: "10px",
  padding: "50px",
});

export const ProductDescriptionTop = styled("div", {
  marginLeft: "50px",

  a: {
    fontSize: "16px",
    fontWeight: "regular",
    color: "$black",
  },
});

export const ProductDescriptionText = styled("span", {
  display: "block",

  variants: {
    variant: {
      title: {
        fontSize: "32px",
        fontWeight: "bold",
      },
      description: {
        fontSize: "16px",
        fontWeight: "regular",
        marginTop: "5px",
      },
      synopsis: {
        fontSize: "16px",
        fontWeight: "regular",
        marginTop: "20px",
        height: "117px",
        marginBottom: "20px",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      footer: {
        fontSize: "12px",
        fontWeight: "bold",
        marginTop: "5px",
      },
    },
  },
});

export const ProductPriceAndCart = styled("div", {
  background: "$white",
  height: "500px",
  borderRadius: "10px",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  input: {
    border: "1px solid #ccc",
    outline: "none",
    height: "40px",
    borderRadius: "8px",
    padding: "10px",
    fontSize: "14px",
    fontFamily: "Sans-serif",
    marginTop: "10px",
    marginBottom: "10px",
  },

  "input[type=submit]": {
    border: "none",
    height: "40px",
    fontSize: "14px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    borderRadius: "8px",
    color: "$white",
    background: "#80D6F7",
    marginLeft: "5px",
    width: "60px",

    "&:hover": {
      cursor: "pointer",
      background: "#63B7D7",
    },
  },

  span: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },

  b: {
    fontSize: "14px",
  },
});

export const ProductButton = styled("button", {
  border: "none",
  height: "40px",
  fontSize: "14px",
  fontWeight: "bold",
  fontFamily: "sans-serif",
  borderRadius: "8px",
  color: "$white",

  "&:hover": {
    cursor: "pointer",
  },

  variants: {
    variant: {
      green: {
        background: "#40CD28",

        "&:hover": {
          cursor: "pointer",
          background: "#39B724",
        },
      },
    },
  },
});

export const ProductSynopsis = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "40px",
  background: "$white",
  borderRadius: "10px",
  padding: "50px",

  h3: {
    marginBottom: "20px",
  },

  p: {
    lineHeight: "22px",
  },
});

export const ProductDatasheet = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginTop: "40px",
  marginBottom: "40px",
  background: "$white",
  borderRadius: "10px",
  padding: "50px",

  h3: {
    marginBottom: "20px",
  },
});

export const Td = styled("td", {
  variants: {
    variant: {
      key: {
        width: "250px",
        padding: "20px 20px",
        background: "$lightGray",
        borderBottom: "1px solid #fff",
      },
      value: {
        padding: "20px 20px",
        borderBottom: "1px solid #ccc",
      },
    },
  },
});
