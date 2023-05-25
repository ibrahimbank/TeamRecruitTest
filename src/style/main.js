import { styled } from "@mui/material/styles";
import { Stack, Typography, FormControl } from "@mui/material";

// General Styles

export const ModalStyle = styled(Stack)(({ theme }) => ({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: "80%",
  background: "#fff",
  padding: "10px 64px",
  height: "auto",

  [theme.breakpoints.down("md")]: {
    padding: "10px 15px",
  },
  [theme.breakpoints.down("lg")]: {
    height: "60%",
    overflowX: "hidden",
  },
}));

export const Body = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#ffffff !important",
  width: "100%",
  height: "100vh",
}));

export const Wrapper = styled(Stack)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

export const CardInfo = styled(Stack)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const CardInput = styled("div")(({ theme }) => ({
  width: "80%",

  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const Button = styled("button")(() => ({
  background: "#025eff",
  borderRadius: "8px",
  border: "none",
  padding: "1rem 3rem",
  color: "white",
  cursor: "pointer",
  transform: "capitalized",
}));

export const Span = styled("span")(() => ({
  position: "absolute",
  top: 15,
  right: 20,
  cursor: "pointer",
}));

export const BlueTop = styled("span")(({ theme }) => ({
  position: "absolute",
  top: "-15px",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#025eff",
  width: "90px",
  height: "20px",
  borderRadius: "4px",
  boxShadow: "-8px 36px 26px 14px rgba(0,31,199,0.87)",

  [theme.breakpoints.down("lg")]: {
    top: "-55px",
    left: "50%",
  },
  [theme.breakpoints.down("lg")]: {
    top: "-55px",
    left: "50%",
  },
}));

export const LogoWrapper = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#025eff",
  borderRadius: "100%",
  width: "50px",
  height: "50px",
}));

export const LogoText1 = styled("span")(() => ({
  color: "#1e2a51",
  fontWeight: "700",
}));

export const LogoText2 = styled("span")(() => ({
  color: "#535c7a",
}));

export const TimeWrapper = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: ".8rem",
  background: "#1e2a51",
  color: "#fff",
  borderRadius: "8px",
}));

export const ColonWrapper = styled("span")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "8px",
}));

export const EditText = styled("p")(() => ({
  color: "#4d88fa",
  fontSize: "16px",
}));

export const Form = styled(Stack)(() => ({
  margin: "4rem 0rem",
}));

export const TypographyHeader = styled(Typography)(() => ({
  fontSize: "16px !important",
  fontWeight: 700,
}));

export const TypographyDesc = styled(Typography)(() => ({
  color: "#7c7c7c",
}));

export const ComCardWrapper = styled(Stack)(() => ({
  background: "#e9edee",
  borderRadius: "8px",
  // padding: "2rem",
  marginTop: "4rem",
}));

export const FormControlW = styled(FormControl)(({ theme }) => ({
  width: "350px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const CardDetails = styled(Stack)(({ theme }) => ({
  backgroundColor: "#fafbfd",
  opacity: "0.8",
  borderRadius: "10px",
  transform: "translateY(-20%)",
  padding: "2rem 3rem",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  zIndex: "9000000000000000000000",

  [theme.breakpoints.down("lg")]: {
    padding: "2rem .5rem",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "2rem .5rem",
  },
}));

export const CurvedSpan = styled("span")(() => ({
  background: "#fff",
  borderRadius: "0% 100% 100% 0% ",
  width: "20px",
  height: "20px",
}));

export const CurvedSpanRight = styled("span")(() => ({
  background: "#fff",
  borderRadius: "100% 0% 0% 100% ",
  width: "20px",
  height: "20px",
}));

export const Line = styled("div")(() => ({
  border: "2px dashed #d9dbdf",
  height: "1px",
  width: "100%",
  margin: "0px 10px",
}));
