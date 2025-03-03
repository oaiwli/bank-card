import { Box, styled, Button, TextField, Typography } from "@mui/material";

export const Cards = styled(Box)(({}) => ({
  width: "110px",
  height: "75px",
  borderRadius: "5px",
  backgroundColor: "#6698fa",
}));

export const BoxText = styled(Box)(({}) => ({
  margin: "24px 5px",
}));

export const ShowText = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginBottom: "6px",
  fontSize: "12px",
  color: "#fff",
  gap: "4px",
});

export const AddCards = styled(Box)(({}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "110px",
  height: "71px",
  borderRadius: "5px",
  backgroundColor: "#f2f2f5",
  border: "2px solid #3e7cfb",
}));

export const Plus = styled(Typography)({
  fontSize: "39px",
  color: "#7b8795",
  fontWeight: "100",
  display: "flex",
  margin: "-10px",
});

export const NewCard = styled(Typography)({
  fontWeight: "500",
  fontSize: "12px",
  color: "#555670",
  display: "flex",
});

export const CardsContainer = styled(Box)(({}) => ({
  display: "flex",
  // flexDirection: "column",
  width: "100%",
  margin: "20px 7px 20px 0px",
  gap: "16px",
}));
