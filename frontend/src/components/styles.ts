import { Box, styled, Button, Typography } from "@mui/material";

export const Container = styled(Box)(({}) => ({
  flex: 1,
  height: "100%",
  width: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  //   alignItems: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  padding: "20px",
  borderRadius: "8px",
  margin: "10px",
}));

export const Header = styled(Typography)({
  marginBottom: "20px",
  fontSize: "19px",
});

export const Btn = styled(Button)(({}) => ({
  margin: "20px 10px 10px 10px",
  display: "flex",
  width: "130px",
  height: "44px",
  borderRadius: "32px",
  background: "#3e7cfb",
  color: "#fff",
  "&:hover": {
    background: "#0056b3",
  },
}));

export const Text = styled(Typography)({
  display: "flex",
  alignItems: "center",
  // marginTop: "6px",
  fontSize: "12px",
  color: "#555670",
  gap: "4px",
});

export const State = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const TextColumn = styled(Box)({
  display: "flex",
  //   alignItems: "center",
  flexDirection: "column",
  width: "100%",
  marginTop: "5px",
});

export const TextBlue = styled(Typography)({
  color: "#6e9cfb",
  fontSize: "12px",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});
