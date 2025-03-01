import { Box, styled, Button, TextField, Typography } from "@mui/material";

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

export const MoneyForm = styled("form")({
  display: "flex",
  // flexDirection: "column",
  width: "100%",
});

export const InputMoneyLeft = styled(TextField)(({ error }) => ({
  width: "130px",
  borderRadius: "8px 0 0 8px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px 0 0 8px",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#007bff",
      borderWidth: "1px",
    },
  },
}));

export const InputMoneyRight = styled(TextField)(({ error }) => ({
  width: "130px",
  borderRadius: "0 8px 8px 0",
  "& .MuiOutlinedInput-root": {
    borderRadius: "0 8px 8px 0",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#007bff",
      borderWidth: "1px",
    },
  },
}));

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
  marginBottom: "6px",
  fontSize: "12px",
  color: "#9fa1af",
  gap: "4px",
});

export const CardsContainer = styled(Box)(({}) => ({
  display: "flex",
  // flexDirection: "column",
  width: "100%",
  margin: "20px 7px 20px 0px",
  gap: "16px",
}));

export const Cards = styled(Box)(({}) => ({
  width: "110px",
  height: "75px",
  borderRadius: "5px",
  backgroundColor: "#6698fa",
}));

export const AddCards = styled(Box)(({}) => ({
  width: "110px",
  height: "71px",
  borderRadius: "5px",
  backgroundColor: "#f2f2f5",
  border: "2px solid #3e7cfb",
  alignItems: "center",
  justifyContent: "center",
}));

export const Form = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const OtherAdd = styled(Box)(({}) => ({
  width: "170px",
  height: "125px",
  borderRadius: "0px 7px 7px 0px",
  backgroundColor: "#ebebf0",
}));

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
});

export const TextBlue = styled(Typography)({
  color: "#6e9cfb",
  fontSize: "12px",
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});

export const MainAdd = styled(Box)(({}) => ({
  width: "320px",
  height: "auto",
  borderRadius: "7px",
  backgroundColor: "#3f79de",
  marginBottom: "10px",
  padding: "10px",
}));

export const FaceCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
});

export const DateCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const Input = styled(TextField)(({ error }) => ({
  width: "130px",
  marginBottom: "15px",
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-root": {
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
}));

export const TextCard = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginBottom: "6px",
  fontSize: "9px",
  color: "#fff",
  gap: "4px",
});

export const BackCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
});

export const StylesPalka = styled(Box)({
  width: "96px",
  height: "auto",
  borderRadius: "7px",
  backgroundColor: "#3f79de",
  marginBottom: "10px",
  padding: "10px",
});

export const BackInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
});
