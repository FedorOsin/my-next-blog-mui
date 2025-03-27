// src/components/ArticleCard.tsx
import Link from "next/link";
import { Article } from "~/types/Article";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="140"
        image={article.imageUrl}
        alt={article.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={theme.palette.text.primary}
        >
          <Link
            href={`/articles/${article.slug}`}
            style={{
              textDecoration: "none",
              color: theme.palette.text.primary,
            }}
          >
            {article.title}
          </Link>
        </Typography>
        <Typography variant="body2" color={theme.palette.text.secondary}>
          {article.content.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {article.minutesRead} минут чтения
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.likes} ❤️
          </Typography>
          <Link
            href={`/articles/${article.slug}`}
            style={{ textDecoration: "none" }}
          >
            <Button size="small" color="primary">
              Читать
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
