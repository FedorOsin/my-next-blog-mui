// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1473E6", // Цвет для ссылок и кнопок "Читать"
    },
    text: {
      primary: "#000000", // Цвет для заголовков и .my_blog
      secondary: "#6E6E6E", // Цвет для основного текста
    },
    background: {
      default: "#FFFFFF", // Цвет фона
    },
  },
  typography: {
    h4: {
      fontSize: "2rem", // Увеличиваем размер шрифта для h4
    },
    h5: {
      fontSize: "1.5rem", // Увеличиваем размер шрифта для h5
    },
  },
});

export default theme;
