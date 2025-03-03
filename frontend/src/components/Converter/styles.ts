import { styled, TextField, Typography } from "@mui/material";

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

export const Text = styled(Typography)({
  display: "flex",
  alignItems: "center",
  marginBottom: "6px",
  fontSize: "12px",
  color: "#9fa1af",
  gap: "4px",
});
