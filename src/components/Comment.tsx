// src/components/Comment.tsx
import { Typography, Paper } from "@mui/material";

interface CommentProps {
  name: string;
  text: string;
}

const Comment: React.FC<CommentProps> = ({ name, text }) => {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
        Имя: {name}
      </Typography>
      <Typography variant="body2">Комментарий: {text}</Typography>
    </Paper>
  );
};

export default Comment;
