// src/components/Header.tsx
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            .my_blog
          </Link>
        </Typography>
        <Box>
          <Button color="inherit">Auth Button</Button>
          <Link href="/admin" style={{ textDecoration: "none" }}>
            <Button color="inherit">Admin</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
