import { styled } from "..";

export const CentralizeContainerRegistrationSuccess = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const RegistrationContainerSuccess = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "450px",
  minHeight: "300px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  marginBottom: "40px",
  background: "$white",
  borderRadius: "10px",
  padding: "30px 0",

  img: {
    borderRadius: "10px",
  },

  h2: {
    marginTop: "20px",
  },

  p: {
    marginTop: "20px",
  },
});
