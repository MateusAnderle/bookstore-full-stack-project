import { styled } from "..";

export const Title = styled("h2", {
  margin: "20px 0",
});

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "1180px",
  padding: "0 0 30px 0",
  marginBottom: "50px",
});

export const Booklist = styled("li", {
  listStyle: "none",
  background: "$white",
  width: "100%",
  marginBottom: "10px",
  borderRadius: "10px",
  padding: "15px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const ImageAndContent = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const Image = styled("div", {});

export const ButtonIcons = styled("div", {
  display: "flex",
  flexDirection: "row",

  button: {
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
    border: "none",
    padding: "10px",
    borderRadius: "10px",

    "&:hover": {
      background: "#fccccd",
      cursor: "pointer",
    },

    svg: {
      marginRight: "10px",
    },
  },
});

export const ContentWrapper = styled("div", {});

export const BookTitle = styled("h3", {
  marginBottom: "10px",
});

export const BookDescription = styled("p", {
  marginBottom: "5px",
});

export const B = styled("span", {
  fontWeight: "bold",
});
