import { styled } from "..";

export const LocationContainerCentralize = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
});

export const ContentLocation = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "900px",

  img: {
    marginTop: "30px",
  },
});

export const LocationDescription = styled("div", {
  marginTop: "20px",
  marginBottom: "20px",
  textAlign: "center",

  h2: {
    marginBottom: "10px",
  },

  p: {
    marginTop: "5px",
  },
});
