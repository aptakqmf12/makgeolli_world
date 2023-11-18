import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type Menu = { code: number; codeName: string };

interface CommonSelectProps {
  value: number;
  setValue: (v: number) => void;
  menuList: { code: number; codeName: string }[];
}

export default function CommonSelect({
  value,
  setValue,
  menuList,
}: CommonSelectProps) {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <Select
        value={String(value)}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      >
        {menuList.map((menu, i) => (
          <MenuItem value={menu.code} key={i}>
            {menu.codeName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
