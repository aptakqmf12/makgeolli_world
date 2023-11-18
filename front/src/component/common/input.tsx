import React, { ChangeEvent } from "react";
import { TextField } from "@mui/material";

interface CommonInputProps {
  value: string;
  setValue: (v: string) => void;
}

export default function CommonInput({ value, setValue }: CommonInputProps) {
  return (
    <TextField
      variant="standard"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
    />
  );
}
