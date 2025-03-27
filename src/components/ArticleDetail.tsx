// src/components/ArticleDetail.tsx
import { Article } from "~/types/Article";
import { Typography, Box, CardMedia } from "@mui/material";

interface ArticleDetailProps {
  article: Article;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {article.title}
      </Typography>
      <CardMedia
        component="img"
        height="400"
        image={article.detailImageUrl || article.imageUrl}
        alt={article.title}
        sx={{ objectFit: "cover" }}
      />
      <Typography variant="body1" style={{ color: "black" }}>
        {article.content}
      </Typography>
    </Box>
  );
};

export default ArticleDetail;
