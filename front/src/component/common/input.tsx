import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface CommonInputProps {
  value: string;
  setValue: (v: string) => void;
  variant?: "filled" | "outlined" | "standard";
  fullWidth?: boolean;
}

export default function CommonInput({
  value,
  setValue,
  variant = "outlined",
  fullWidth = false,
}: CommonInputProps) {
  return (
    <TextField
      variant={variant}
      size="small"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
      fullWidth={fullWidth}
    />
  );
}
