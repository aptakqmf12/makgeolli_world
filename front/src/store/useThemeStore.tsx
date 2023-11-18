import { create } from "zustand";

export type Theme = "light" | "dark";

interface ThemeStoreType {
  theme: Theme;
  setToggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const useThemeStore = create<ThemeStoreType>((set) => ({
  theme: "light",
  setToggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setTheme: (v: Theme) => set((state) => ({ theme: v })),
}));
