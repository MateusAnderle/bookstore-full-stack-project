import { styled } from "..";

export const HeaderContainer = styled("header", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  background: "$red",
  alignItems: "center",
});

export const MainHeader = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "1180px",
  background: "$red",
  justifyContent: "space-between",
  height: "120px",
  alignItems: "center",
});

export const LogoWrapper = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  color: "#FBEFE3",

  svg: {
    marginRight: "20px",
    background: "$lightYellow",
    color: "$black",
    borderRadius: 10,
    height: 50,
    width: 50,
    padding: 5,
  },
});

export const Icons = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  textAlign: "center",

  svg: {
    marginLeft: "20px",
    background: "$lightYellow",
    color: "$black",
    borderRadius: 20,
    height: 40,
    width: 42,
    padding: 10,
  },
});

export const AdminDescription = styled("p", {
  marginLeft: 20,
  fontSize: "$md",
  color: "$lightYellow",
  fontWeight: "bold",
});

export const NavContainer = styled("nav", {
  display: "flex",
  width: "100%",
  background: "$lightYellow",
  justifyContent: "center",
});

export const NavHeader = styled("ul", {
  display: "flex",
  flexDirection: "row",
  width: "1180px",
  justifyContent: "space-around",
  alignItems: "center",
  listStyleType: "none",

  a: {
    textDecoration: "none",
  },

  li: {
    display: "flex",
    height: "50px",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: "16px",
    color: "$black",
    padding: "0 77px",

    "&:hover": {
      background: "#BFB88B",
      cursor: "pointer",
    },
  },
});
