import { Box, styled, Button, TextField, Typography } from "@mui/material";

export const Form = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});

export const OtherAdd = styled(Box)(({}) => ({
  width: "170px",
  height: "187px",
  borderRadius: "0px 7px 7px 0px",
  backgroundColor: "#ebebf0",
}));

export const MainAdd = styled(Box)(({}) => ({
  width: "320px",
  height: "186px",
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
  marginTop: "32px",
});

export const DateCard = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const TextCard = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginBottom: "6px",
  fontSize: "10px",
  color: "#fff",
  gap: "4px",
});

export const Slash = styled(Typography)({
  display: "flex",
  alignItems: "center",
  margin: "0px 5px 10px 5px",
  fontSize: "16px",
  color: "#fff",
  gap: "4px",
});

export const BackCard = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
});

export const Scanner = styled(Box)({
  width: "146px",
  height: "7px",
  backgroundColor: "#e0e1e8",
  margin: "20px 0px 10px 0px",
  padding: "10px",
});

export const BackInfo = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  marginLeft: "17px",
});

export const NumberInput = styled(TextField)(({ error }) => ({
  width: "269px",
  height: "42px",
  marginBottom: "15px",
  borderRadius: "16px",
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    borderRadius: "16px",
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "16px",
  },
}));

export const DoubleInput = styled(TextField)(({ error }) => ({
  width: "78px",
  height: "42px",
  marginBottom: "15px",
  borderRadius: "16px",
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    borderRadius: "16px",
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "16px",
  },
}));

export const CvvInput = styled(TextField)(({ error }) => ({
  width: "62px",
  height: "42px",
  marginBottom: "3px",
  borderRadius: "16px",
  backgroundColor: "#fff",
  "& .MuiOutlinedInput-root": {
    height: "46px",
    borderRadius: "16px",
    "&.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderColor: "red",
    },
  },
  "& .MuiInputBase-input": {
    padding: "10px 14px",
    borderRadius: "16px",
    backgroundColor: "#fff",
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "16px",
  },
}));

export const CvvText = styled(Typography)({
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  color: "#bdbecb",
});

export const HeadCvvText = styled(Typography)({
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  color: "#727388",
});
