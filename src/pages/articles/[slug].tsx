// src/pages/articles/[slug].tsx
import { useRouter } from "next/router";
import ArticleDetail from "~/components/ArticleDetail"; // <---- Убедись, что импортируешь ArticleDetail
import Comment from "~/components/Comment";
import CommentForm from "~/components/CommentForm";
import { useBlogStore } from "~/store/store";
import { useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";

const ArticlePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const articles = useBlogStore((state) => state.articles);

  const article = articles.find((article) => article.slug === slug);

  useEffect(() => {
    if (!article && slug) {
      console.warn(`Article with slug "${slug}" not found`);
    }
  }, [article, slug]);

  if (!article) {
    return <div>Статья не найдена</div>;
  }

  return (
    <Container>
      <ArticleDetail article={article} />{" "}
      {/* <---- Убедись, что используешь ArticleDetail */}
      <Typography variant="h6" component="h2" mt={4} mb={2}>
        Комментарии
      </Typography>
      {article.comments.map((comment, index) => (
        <Comment key={index} name={comment.name} text={comment.text} />
      ))}
      <CommentForm onSubmit={() => {}} />
    </Container>
  );
};

export default ArticlePage;
