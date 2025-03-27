// src/pages/index.tsx
import ArticleCard from "~/components/ArticleCard";
import { useBlogStore, BlogState } from "~/store/store";
import { Container, Typography, Grid, GridProps } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Home = () => {
  const articles = useBlogStore((state: BlogState) => state.articles);
  const theme = useTheme();

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        color={theme.palette.text.primary}
        sx={{ textAlign: "center" }}
      >
        Главная
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {articles.map((article: any) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={article.slug}
            component="div"
            {...({} as GridProps)}
          >
            {" "}
            {/* Добавили component="div" {...({} as GridProps)} */}
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
