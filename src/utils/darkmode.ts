import { LocalStorage } from "./localStorage";

export const initDarkMode = () => {
  const themeKey = "theme";

  const local = new LocalStorage();
  const theme = local.get(themeKey);

  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    local.set(themeKey, "dark");
  } else {
    document.documentElement.classList.add("light");
    local.set(themeKey, "light");
  }
};

export const switchDarkMode = () => {
  const themeKey = "theme";

  const local = new LocalStorage();
  const theme = local.get(themeKey);
  if (theme === "dark") {
    document.documentElement.classList.remove("dark");
    local.set(themeKey, "light");
  } else {
    document.documentElement.classList.add("dark");
    local.set(themeKey, "dark");
  }
};
