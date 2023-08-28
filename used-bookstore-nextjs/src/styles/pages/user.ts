import { styled } from "..";

export const CentralizeContainerUser = styled("main", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
});

export const UserContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "40px",
  width: "1180px",
  minHeight: "300px",
  justifyContent: "center",
  marginTop: "40px",
  marginBottom: "40px",
  background: "$white",
  borderRadius: "10px",
  padding: "40px",
});

export const SideInfo = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "$lightGray",
  borderRadius: "10px",
  padding: "40px",
  height: "500px",

  h3: {
    textAlign: "center",
    marginBottom: "20px",
  },

  span: {
    svg: {
      borderRadius: 75,
      marginBottom: 30,
      background: "$lightYellow",
      padding: "20px",
    },
  },
});

export const Logout = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "120px",

  button: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
    padding: "10px 20px",
    border: "none",
    background: "$red",
    borderRadius: "10px",
    color: "$white",
    fontSize: "18px",
    fontFamily: "sans-serif",

    svg: {
      marginRight: "10px",
    },

    "&:hover": {
      background: "$darkRed",
      cursor: "pointer",
    },
  },
});

export const OrdersContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$lightGray",
  borderRadius: "10px",
  padding: "40px",

  h3: {
    marginBottom: "20px",
  },
});

export const OrderBox = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  background: "$white",
  marginBottom: "10px",
  padding: "10px 20px",
  borderRadius: "10px",
});

export const ContentOrderBox = styled("div", {
  width: "100%",
});

export const IconOrderBox = styled("button", {
  border: "none",
  background: "transparent",

  "&:hover": {
    cursor: "pointer",
  },
});

export const ForbiddenAccessContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "1180px",
  minHeight: "300px",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "40px",
  marginBottom: "40px",
  background: "$white",
  borderRadius: "10px",
  padding: "40px",
});

export const ForbiddenAccess = styled("div", {
  textAlign: "center",
  h2: {
    marginBottom: "20px",
  },
});
